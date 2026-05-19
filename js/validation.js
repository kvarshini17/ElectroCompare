/* 
  Form Validation Logic
*/

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // In a real app, this would be an AJAX call to login.php
            alert('Login successful! Redirecting...');
            window.location.href = 'index.html';
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const pass = registerForm.querySelector('input[type="password"]').value;
            const confirm = registerForm.querySelectorAll('input[type="password"]')[1].value;

            if (pass !== confirm) {
                alert('Passwords do not match!');
                return;
            }

            alert('Registration successful! Please login.');
            window.location.href = 'login.html';
        });
    }
});
