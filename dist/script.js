window.addEventListener('DOMContentLoaded', domLoaded);

function domLoaded() {
    const addBtn = document.getElementById('addBtn');
    const taskInput = document.getElementById('taskInput');

    addBtn.addEventListener('click', addBtnClick);

    taskInput.addEventListener('keyup', function(event) {
        if (event.key === "Enter") {
            addBtnClick();
        }
    });
    
    const initialButtons = document.querySelectorAll('.done-btn');
    for (let btn of initialButtons) {
        btn.addEventListener('click', removeTask);
    }
}

function addBtnClick() {
    const taskInput = document.getElementById('taskInput');
    const newTaskText = taskInput.value;

    if (newTaskText.trim() !== "") {
        addTask(newTaskText);
        taskInput.value = "";
        taskInput.focus();
    }
}

function addTask(newTask) {
    const li = document.createElement('li');
    li.innerHTML = `<span class="task-text">${newTask}</span><button class="done-btn">✖</button>`;

    const ol = document.querySelector('ol');
    ol.appendChild(li);

    const buttons = document.querySelectorAll('.done-btn');
    const lastButton = buttons[buttons.length - 1];
    lastButton.addEventListener('click', removeTask);
}

function removeTask(event) {
    const liToRemove = event.target.parentNode;
    const ol = liToRemove.parentNode;
    ol.removeChild(liToRemove);
}
