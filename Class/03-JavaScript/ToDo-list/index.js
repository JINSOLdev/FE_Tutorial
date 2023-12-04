const keyCodeCheck = function () {
    // console.log(window.event);
    // console.log(window.event.keyCode === 13);
    if (window.event.keyCode === 13) {
        const inputValue = document.querySelector('#todo-input').value;
        const newLi = document.createElement('li');
        const newSpan = document.createElement('span');
        console.log(inputValue, newLi, newSpan);
    }
};
