const messageContainer = document.querySelector('#d-day-message');
const container = document.querySelector('#d-day-container');

// container.style.display = 'none';
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

const counterMaker = function () {
    const targetDateInput = dateFormMaker();
    const nowDate = new Date();
    const targetDate = new Date(targetDateInput).setHours(0, 0, 0, 0);
    const remaining = (targetDate - nowDate) / 1000;

    // 만약 remaining이 0이라면, 타이머가 종료되었습니다. 출력
    if (remaining <= 0) {
        messageContainer.innerHTML = '<h3>타이머가 종료되었습니다.</h3>';
    } else if (isNaN(remaining)) {
        // 만약 잘못된 날짜가 들어왔다면, 유효한 시간대가 아닙니다. 출력
        messageContainer.innerHTML = '<h3>유효한 시간대가 아닙니다.</h3>';
    }

    // const remainingDate = Math.floor(remaining / 3600 / 24);
    // const remainingHours = Math.floor(remaining / 3600) % 24;
    // const remainingMin = Math.floor(remaining / 60) % 60;
    // const remainingSec = Math.floor(remaining) % 60;

    const remainingObj = {
        remainingDate: Math.floor(remaining / 3600 / 24),
        remainingHours: Math.floor(remaining / 3600) % 24,
        remainingMin: Math.floor(remaining / 60) % 60,
        remainingSec: Math.floor(remaining) % 60,
    };

    const documentObj = {
        days: document.getElementById('days'),
        hours: document.getElementById('hours'),
        min: document.getElementById('min'),
        sec: document.getElementById('sec'),
    };

    const timeKeys = Object.keys(remainingObj);
    const docKeys = Object.keys(documentObj);

    // 날짜 데이터 리팩토링
    for (let i = 0; i < timeKeys.length; i++) {
        documentObj[docKeys[i]].textContent = remainingObj[timeKeys[i]];
    }

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
