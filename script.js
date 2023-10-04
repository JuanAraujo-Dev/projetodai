const logo = document.querySelector('.logo');

logo.addEventListener('mouseenter', () => {
    logo.style.transform = 'scale(1.1)';
    logo.style.transition = 'transform 0.3s';
});

logo.addEventListener('mouseleave', () => {
    logo.style.transform = 'scale(1)';
});