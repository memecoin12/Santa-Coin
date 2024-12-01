// script.js
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

// Toggle navbar links when hamburger is clicked
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
