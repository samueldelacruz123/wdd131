document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified;

// Toggle the active class when the hamburger is clicked
document.getElementById('hamburger-menu').addEventListener('click', function () {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
});

// Close the menu when clicking outside of it
document.addEventListener('click', function (event) {
    const navbar = document.querySelector('.navbar');
    const hamburgerMenu = document.getElementById('hamburger-menu');
    if (!navbar.contains(event.target) && !hamburgerMenu.contains(event.target)) {
        navbar.classList.remove('active');
    }
});