document.addEventListener('DOMContentLoaded', () => {
    const interactive = document.querySelector('.interactive');

    interactive.addEventListener('mouseover', () => {
        interactive.style.transform = 'scale(1.1)';
        interactive.style.transition = 'transform 0.3s ease';
    });

    interactive.addEventListener('mouseout', () => {
        interactive.style.transform = 'scale(1)';
    });

    interactive.addEventListener('click', () => {
        alert('Interactive element clicked!');
    });
});
