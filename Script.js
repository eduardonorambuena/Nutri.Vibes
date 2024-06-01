document.addEventListener('DOMContentLoaded', function() {
    const agendarBtn = document.querySelector('.agendar-btn');

    if (agendarBtn) {
        agendarBtn.addEventListener('click', function() {
            window.location.href = 'agendar.html';
        });
    }
});
