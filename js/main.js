document.addEventListener('DOMContentLoaded', () => {
    const element = document.querySelector('.your-element');
    if (element) {
        element.addEventListener('click', () => {
            console.log('Element clicked!');
        });
    }
});

