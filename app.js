// Initialize Firebase
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

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
    const taskInput = document.getElementById('new-task').value;

    if (taskInput) {
        const currentDate = new Date();
        const formattedDate = currentDate.toLocaleString(); // Adjust formatting as needed

        db.collection("tasks").add({
            task: taskInput,
            timestamp: formattedDate
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
            // Clear input field after adding task
            document.getElementById('new-task').value = '';
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
    }
}
