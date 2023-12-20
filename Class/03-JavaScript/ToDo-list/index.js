const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');

const savedTodoList = JSON.parse(localStorage.getItem('save-items'));

// localstorage에 저장되어 있는 날씨 데이터 받아오는 코드
const savedWeatherData = JSON.parse(localStorage.getItem('saved-weather'));

const createTodo = function (storageData) {
    let todoContents = todoInput.value;
    if (storageData) {
        todoContents = storageData.contents;
    }

    const newLi = document.createElement('li');
    const newSpan = document.createElement('span');
    const newBtn = document.createElement('button');

    newBtn.addEventListener('click', () => {
        newLi.classList.toggle('complete');
        saveItemsFn();
    });

    newLi.addEventListener('dblclick', () => {
        newLi.remove();
        saveItemsFn();
    });

    if (storageData?.complete) {
        newLi.classList.add('complete');
    }

    newSpan.textContent = todoContents;
    newLi.appendChild(newBtn);
    newLi.appendChild(newSpan);
    todoList.appendChild(newLi);
    todoInput.value = '';
    saveItemsFn();
};

const keyCodeCheck = function () {
    if (window.event.keyCode === 13 && todoInput.value.trim() !== '') {
        createTodo();
    }
};

const deleteAll = function () {
    const liList = document.querySelectorAll('li');
    for (let i = 0; i < liList.length; i++) {
        liList[i].remove();
    }
    saveItemsFn();
};

const saveItemsFn = function () {
    const saveItems = [];
    for (let i = 0; i < todoList.children.length; i++) {
        const todoObj = {
            contents: todoList.children[i].querySelector('span').textContent,
            complete: todoList.children[i].classList.contains('complete'),
        };
        saveItems.push(todoObj);
    }

    // 삼항연산자 사용해서 코드 줄이기
    //     if (saveItems.length == 0) {
    //         localStorage.removeItem('save-items');
    //     } else {
    //         localStorage.setItem('save-items', JSON.stringify(saveItems));
    //     }

    saveItems.length === 0 ? localStorage.removeItem('save-items') : localStorage.setItem('save-items', JSON.stringify(saveItems));
};

if (savedTodoList) {
    for (let i = 0; i < savedTodoList.length; i++) {
        createTodo(savedTodoList[i]);
    }
}

const weatherDataActive = function ({ location, weather }) {
    const weatherMainList = ['Clear', 'Clouds', 'Drizzle', 'Snow', 'Thunderstorm'];
    weather = weatherMainList.includes(weather) ? weather : 'Fog';
    const locationNameTag = document.querySelector('#location-name-tag');
    locationNameTag.textContent = location;
    // console.log(weather);
    document.body.style.backgroundImage = `url('./images/${weather}.jpg')`;

    if (!savedWeatherData || savedWeatherData.location !== location || savedWeatherData.weather !== weather) {
        console.log('조건식 성립');
        // shorthand property, 객체 형태인 날씨 데이터를 JSON 데이터 포맷 형태로 localStorage에 저장
        localStorage.setItem('saved-weather', JSON.stringify({ location, weather }));
    }
    console.log('조건식 성립X');
};

const weatherSearch = function ({ latitude, longitude }) {
    const openWetherRes = fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&exclude={part}&appid=353e5a88844ec7475862c59decbff83d`
    )
        .then((res) => {
            return res.json();
        })
        .then((json) => {
            console.log(json.name, json.weather[0].main);
            const weatherData = {
                location: json.name,
                weather: json.weather[0].main,
            };
            weatherDataActive(weatherData);
        })
        .catch((err) => {
            console.log(err);
        });
};

const accessToGeo = function ({ coords }) {
    const { latitude, longitude } = coords;
    // shorthand property
    const positionObj = {
        latitude,
        longitude,
    };
    weatherSearch(positionObj);
};

const askForLocation = function () {
    navigator.geolocation.getCurrentPosition(accessToGeo, (err) => {
        console.log(err);
    });
};

askForLocation();

// localStorage에 저장된 날씨 데이터가 있는지 여부에 따라 최초 렌더링시에 weatherDataActive()함수를 localStorage에 저장된 데이터를 기반으로 실행하는 코드
if (savedWeatherData) {
    weatherDataActive(savedWeatherData);
}
