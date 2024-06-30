const correctPassword = "task"; // Set your password here

function login() {
    const passwordInput = document.getElementById('password').value;
    const loginContainer = document.getElementById('login-container');
    const taskList = document.getElementById('task-list');

    if (passwordInput === correctPassword) {
        loginContainer.style.display = 'none';
        taskList.style.display = 'block';
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
        const currentDate = new Date();
        const formattedDate = currentDate.toLocaleString(); // Adjust formatting as needed
        li.innerHTML = `<input type="checkbox"> ${taskInput.value} - ${formattedDate}`;
        taskList.appendChild(li);
        taskInput.value = '';
    }
}
