const messageContainer = document.querySelector('#d-day-message');
const container = document.querySelector('#d-day-container');
const intervalIdArr = [];

container.style.display = 'none';
messageContainer.innerHTML = '<h2>D-day를 입력해주세요.</h2>';

const dateFormMaker = function () {
    const inputYear = document.querySelector('#targetYear').value;
    const inputMonth = document.querySelector('#targetMonth').value;
    const inputDate = document.querySelector('#targetDate').value;
    // console.log(inputYear, inputMonth, inputDate);

    const dateFormat = `${inputYear}-${inputMonth}-${inputDate}`;
    // const dateFormat = inputYear + '-' + inputMonth + '-' + inputDate;

    return dateFormat;
};

const counterMaker = function (data) {
    console.log(data);
    console.log('반복 실행중');
    const targetDateInput = dateFormMaker();
    const nowDate = new Date();
    const targetDate = new Date(targetDateInput).setHours(0, 0, 0, 0);
    const remaining = (targetDate - nowDate) / 1000;
    if (remaining <= 0) {
        // 만약 remaining이 0이라면, 타이머가 종료되었습니다. 출력
        container.style.display = 'none';
        messageContainer.innerHTML = '<h3>타이머가 종료되었습니다.</h3>';
        messageContainer.style.display = 'flex';
        setInterval();
        return;
    } else if (isNaN(remaining)) {
        // 만약 잘못된 날짜가 들어왔다면, 유효한 시간대가 아닙니다. 출력
        container.style.display = 'none';
        messageContainer.innerHTML = '<h3>유효한 시간대가 아닙니다.</h3>';
        messageContainer.style.display = 'flex';
        setClearInterval();
        return;
    }

    const remainingObj = {
        remainingDate: Math.floor(remaining / 3600 / 24),
        remainingHours: Math.floor(remaining / 3600) % 24,
        remainingMin: Math.floor(remaining / 60) % 60,
        remainingSec: Math.floor(remaining) % 60,
    };
    // const remainingDate = Math.floor(remaining / 3600 / 24);
    // const remainingHours = Math.floor(remaining / 3600) % 24;
    // const remainingMin = Math.floor(remaining / 60) % 60;
    // const remainingSec = Math.floor(remaining) % 60;

    const documentArr = ['days', 'hours', 'min', 'sec'];
    const timeKeys = Object.keys(remainingObj);

    const format = function (time) {
        if (time < 10) {
            return '0' + time;
        } else {
            return time;
        }
    };
    // const docKeys = Object.keys(documentObj);

    // for-of 반복문
    let i = 0;
    for (const tag of documentArr) {
        const remainingTime = format(remainingObj[timeKeys[i]]);
        console.log(remainingTime);
        document.getElementById(tag).textContent = remainingObj[timeKeys[i]];
        i++;
    }

    // 날짜 데이터 리팩토링
    // for (let i = 0; i < timeKeys.length; i++) {
    //     documentObj[docKeys[i]].textContent = remainingObj[timeKeys[i]];
    // }

    // const documentObj = {
    //     days: document.getElementById('days'),
    //     hours: document.getElementById('hours'),
    //     min: document.getElementById('min'),
    //     sec: document.getElementById('sec'),
    // };
    // // for-in 반복문
    // let i = 0;
    // for (let key in documentObj) {
    //     // console.log(documentObj[key], key);
    //     documentObj[key].textContent = remainingObj[timeKeys[i]];
    //     i++;
    // }

    // documentObj['days'].textContent = remainingObj['remainingDate'];
    // documentObj['hours'].textContent = remainingObj['remainingHours'];
    // documentObj['min'].textContent = remainingObj['remainingMin'];
    // documentObj['sec'].textContent = remainingObj['remainingSec'];

    // const days = document.getElementById('days');
    // const hours = document.getElementById('hours');
    // const min = document.getElementById('min');
    // const sec = document.getElementById('sec');

    // days.textContent = remainingObj['remainingDate'];
    // hours.textContent = remainingObj['remainingHours'];
    // min.textContent = remainingObj['remainingMin'];
    // sec.textContent = remainingObj['remainingSec'];
};

const starter = function () {
    const targetDateInput = dateFormMaker();
    container.style.display = 'flex';
    messageContainer.style.display = 'none';
    counterMaker(targetDateInput);

    // for (let i = 0; i < 100; i++) {
    //     setTimeout(() => {
    //         counterMaker();
    //     }, 1000 * i);
    // }

    const intervalId = setInterval(counterMaker, 1000);
    intervalIdArr.push(intervalId);
    console.log(intervalIdArr);
};

const setClearInterval = function () {
    // container.style.display = 'none';
    // messageContainer.innerHTML = '<h2>D-day를 입력해주세요.</h2>';
    container.style.display = 'flex';
    for (let i = 0; i < intervalIdArr.length; i++) {
        clearInterval(intervalIdArr[i]);
    }
};

const resetTimer = function () {
    container.style.display = 'none';
    messageContainer.innerHTML = `<h2>D-Day를 입력해주세요.</h2>`;
    messageContainer.style.display = 'flex';
    setClearInterval();
};
