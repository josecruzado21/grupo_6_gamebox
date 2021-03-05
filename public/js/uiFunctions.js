// Abre el menu en responsive
const body = document.getElementsByTagName('body');
const navbar = document.querySelector('.sideMenu');
const menuToggle = document.querySelector('.triggerMenu');

menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('open');
    body.style.position = 'fixed';
});
