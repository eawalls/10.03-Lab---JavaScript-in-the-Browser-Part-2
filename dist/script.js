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

    // IMPORTANT: To make the INITIAL tasks removable, 
    // we should also loop through them once when the page loads.
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

    // 1. Search the DOM for all buttons that use the done-btn class
    const buttons = document.querySelectorAll('.done-btn');
    
    // 2. Register removeTask as the LAST done button's click handler
    const lastButton = buttons[buttons.length - 1];
    lastButton.addEventListener('click', removeTask);
}

function removeTask(event) {
    // 1. Assign a variable with event.target's parent node (the <li>)
    const liToRemove = event.target.parentNode;

    // 2. Get the <ol> element (the <li>'s parent)
    const ol = liToRemove.parentNode;

    // 3. Call removeChild() to remove the task
    ol.removeChild(liToRemove);
}
