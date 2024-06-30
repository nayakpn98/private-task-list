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
