// JavaScript code that makes the sidebar appear and disappear when a button is clicked.


const navButton = document.getElementById('nav-button');
const navClose = document.querySelector('.nav__close');
const navList = document.querySelector('.nav__list');
const navImage = document.querySelector('.nav__image');

let transitionDuration = '0.3s';

navButton.addEventListener('click', toggleSidebar);
navClose.addEventListener('click', closeSidebar);

function toggleSidebar() {

    navList.classList.toggle('show');
    navImage.classList.toggle('show-image');
    setTransitionDuration();

}

function closeSidebar() {

    navList.classList.remove('show');
    navImage.classList.remove('show-image');
    setTransitionDuration();

}

function setTransitionDuration() {

    transitionDuration = navList.classList.contains('show') ? '3s' : '0.3s';
    navList.style.transitionDuration = transitionDuration;
    navImage.style.transitionDuration = transitionDuration;

}

function validateForm() {

    document.getElementById('emailError').textContent = '';

    const email = document.getElementById('email').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        document.getElementById('emailError').textContent = 'Invalid email format';
        return;
    }

    document.getElementById('myForm').submit();
    
}

