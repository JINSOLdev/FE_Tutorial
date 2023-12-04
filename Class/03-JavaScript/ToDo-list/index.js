const todoInput = document.querySelector('#todo-input');

const keyCodeCheck = function () {
    // console.log(window.event);
    // console.log(window.event.keyCode === 13);
    if (window.event.keyCode === 13 && todoInput.value !== '') {
        const todoList = document.querySelector('#todo-list');
        const newLi = document.createElement('li');
        const newSpan = document.createElement('span');

        newSpan.textContent = todoInput.value;
        newLi.appendChild(newSpan);
        todoList.appendChild(newLi);
        todoInput.value = '';
    }
};
