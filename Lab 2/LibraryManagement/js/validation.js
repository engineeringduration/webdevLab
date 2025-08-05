document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('regForm').addEventListener('submit', function(e) {
        let valid = true;

        // First Name: Alphabet only, min 6 chars
        const firstName = document.getElementById('firstName').value.trim();
        const firstNameError = document.getElementById('firstNameError');
        if (!/^[A-Za-z]{6,}$/.test(firstName)) {
            firstNameError.textContent = 'First name must be at least 6 alphabetic characters.';
            valid = false;
        } else {
            firstNameError.textContent = '';
        }

        // Last Name: Not empty
        const lastName = document.getElementById('lastName').value.trim();
        const lastNameError = document.getElementById('lastNameError');
        if (lastName === '') {
            lastNameError.textContent = 'Last name cannot be empty.';
            valid = false;
        } else {
            lastNameError.textContent = '';
        }

        // Password: Min 6 chars
        const password = document.getElementById('password').value;
        const passwordError = document.getElementById('passwordError');
        if (password.length < 6) {
            passwordError.textContent = 'Password must be at least 6 characters.';
            valid = false;
        } else {
            passwordError.textContent = '';
        }

        // Email: name@domain.com
        const email = document.getElementById('email').value.trim();
        const emailError = document.getElementById('emailError');
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            emailError.textContent = 'Invalid email format.';
            valid = false;
        } else {
            emailError.textContent = '';
        }

        // Mobile: Exactly 10 digits
        const mobile = document.getElementById('mobile').value.trim();
        const mobileError = document.getElementById('mobileError');
        if (!/^\d{10}$/.test(mobile)) {
            mobileError.textContent = 'Mobile number must be exactly 10 digits.';
            valid = false;
        } else {
            mobileError.textContent = '';
        }

        // Address: Not empty
        const address = document.getElementById('address').value.trim();
        const addressError = document.getElementById('addressError');
        if (address === '') {
            addressError.textContent = 'Address cannot be empty.';
            valid = false;
        } else {
            addressError.textContent = '';
        }

        if (!valid) {
            e.preventDefault();
            return;
        }

        // Registration logic: store user in localStorage (simulate DB)
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const regEmail = document.getElementById('email').value.trim();
        // Check for duplicate email
        if (users.some(u => u.email === regEmail)) {
            document.getElementById('emailError').textContent = 'Email already registered.';
            e.preventDefault();
            return;
        }
        // Save user
        users.push({
            firstName: document.getElementById('firstName').value.trim(),
            lastName: document.getElementById('lastName').value.trim(),
            password: document.getElementById('password').value,
            email: regEmail,
            mobile: document.getElementById('mobile').value.trim(),
            address: document.getElementById('address').value.trim()
        });
        localStorage.setItem('users', JSON.stringify(users));
        alert('Registration successful! Please login.');
        window.location.href = 'login.html';
        e.preventDefault();
    });
});
