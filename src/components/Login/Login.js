// Login.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('login-form');
    const loginButton = document.getElementById('login-button');
    const registerButton = document.getElementById('register-button');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the default form submission

        // Get the username and password from the form
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Simple validation (replace with real validation)
        if (username === 'user' && password === 'pass') {
            // Redirect to header (replace this logic with the actual behavior you want)
            loadHeaderScript();
        } else {
            alert('Invalid credentials');
        }
    });

    // Optional: Add functionality for the register button if needed
    registerButton.addEventListener('click', () => {
        window.location.href = 'registration.html';
    });
});

// Function to dynamically load and execute header.js
function loadHeaderScript() {
    const script = document.createElement('script');
    script.src = 'header.js';
    script.onload = () => {
        console.log('Header script loaded successfully');
        // You might want to initialize or call specific functions from header.js here
    };
    script.onerror = () => {
        console.error('Failed to load header.js');
    };
    document.body.appendChild(script);
}
