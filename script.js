// Select the necessary elements
const addButton = document.getElementById('add-btn');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Function to create a new to-do item
function createTodoItem(taskContent) {
    const todoItem = document.createElement('li');
    todoItem.classList.add('todo-item');

    // Task content
    const taskText = document.createElement('span');
    taskText.textContent = taskContent;
    todoItem.appendChild(taskText);

    // Edit Button
    const editButton = document.createElement('button');
    editButton.classList.add('edit-btn');
    editButton.textContent = 'Edit';
    editButton.onclick = function() {
        editTodoItem(todoItem, taskText);
    };
    todoItem.appendChild(editButton);

    // Delete Button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
        todoList.removeChild(todoItem);
    };
    todoItem.appendChild(deleteButton);

    return todoItem;
}

// Edit Task Function
function editTodoItem(todoItem, taskText) {
    const newTask = prompt('Edit your task:', taskText.textContent);
    if (newTask !== null && newTask.trim() !== '') {
        taskText.textContent = newTask;
    }
}

// Add Task Button Click
addButton.addEventListener('click', () => {
    const taskContent = todoInput.value.trim();
    if (taskContent !== '') {
        const newTodoItem = createTodoItem(taskContent);
        todoList.appendChild(newTodoItem);
        todoInput.value = ''; // Clear the input field
    } else {
        alert('Please enter a task!');
    }
});

// Optional: Allow pressing "Enter" to add a task
todoInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        addButton.click();
    }
});