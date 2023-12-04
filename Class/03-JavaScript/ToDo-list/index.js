const keyCodeCheck = function () {
    // console.log(window.event);
    // console.log(window.event.keyCode === 13);
    if (window.event.keyCode === 13) {
        const inputValue = document.querySelector('#todo-input').value;
        console.log(inputValue);
    }
};
