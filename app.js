const correctPassword = "yourpassword"; // Set your password here

function login() {
    const inputPassword = document.getElementById('password').value;
    if (inputPassword === correctPassword) {
        document.getElementById('login').style.display = 'none';
        document.getElementById('content').style.display = 'block';
    } else {
        alert('Incorrect password');
    }
}

function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');

    if (taskInput.value) {
        const li = document.createElement('li');
        li.className = 'task';
        li.innerHTML = `<input type="checkbox"> ${taskInput.value}`;
        taskList.appendChild(li);
        taskInput.value = '';
    }
}
