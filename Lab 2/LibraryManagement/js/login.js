
document.addEventListener('DOMContentLoaded', function() {
    // Login form validation and flow
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');


    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();
        let errorMessage = '';
        if (!username) errorMessage += 'Username cannot be empty.\n';
        if (!password) errorMessage += 'Password cannot be empty.\n';
        if (errorMessage) {
            alert(errorMessage);
            return;
        }

        // Check credentials against registered users (simulate DB)
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        // Accept login by email or firstName
        const user = users.find(u => (u.email === username || u.firstName === username) && u.password === password);
        if (user) {
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('username', user.firstName);
            window.location.href = 'index.html';
        } else {
            alert('Invalid username/email or password.');
        }
    });

    // Logout flow (can be called from logout button on any page)
    window.logout = function() {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('username');
        window.location.href = 'login.html';
    };
});