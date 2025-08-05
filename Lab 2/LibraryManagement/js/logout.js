// logout.js
// Call window.logout() to log out the user and redirect to login page
function handleLogout() {
    if (typeof window.logout === 'function') {
        window.logout();
    } else {
        // fallback: clear localStorage and redirect
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('username');
        window.location.href = 'login.html';
    }
}
