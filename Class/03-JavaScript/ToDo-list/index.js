const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');

const savedTodoList = JSON.parse(localStorage.getItem('save-items'));

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

const weatherSearch = function (position) {
    console.log(position.latitude);
    const openWetherRes = fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${position.latitude}&lon=${position.longitude}&exclude={part}&appid=353e5a88844ec7475862c59decbff83d`
    )
        .then((res) => {
            return res.json();
        })
        .then((json) => {
            console.log(json.name, json.weather[0].description);
        })
        .catch((err) => {
            console.log(err);
        });
};

const accessToGeo = function (position) {
    const positionObj = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
    };
    weatherSearch(positionObj);
};

const askForLocation = function () {
    navigator.geolocation.getCurrentPosition(accessToGeo, (err) => {
        console.log(err);
    });
};

askForLocation();

// then, catch
// const promiseTest = function () {
//     return new Promise((resolver, reject) => {
//         setTimeout(() => {
//             resolver('success');
//             // reject('error');
//         }, 2000);
//     });
// };

// promiseTest().then((res) => {
//     console.log(res);
// });
