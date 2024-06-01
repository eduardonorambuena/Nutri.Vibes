document.addEventListener('DOMContentLoaded', function() {
    const agendarBtn = document.querySelector('.agendar-btn');
    const loginBtn = document.querySelector('.login-btn');

    if (agendarBtn) {
        agendarBtn.addEventListener('click', function() {
            window.location.href = 'agendar.html';
        });
    }

    if (loginBtn) {
        loginBtn.addEventListener('click', function() {
            window.location.href = 'login.html';
        });
    }
});
