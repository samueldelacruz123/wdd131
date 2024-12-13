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

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".form");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent default form submission
    
        // Get user input
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
    
        if (name === "" || email === "") {
            alert("Please fill out all fields.");
            return;
        }
    
        // Save name and email to localStorage
        localStorage.setItem("subscriberName", name);
        localStorage.setItem("subscriberEmail", email);
    
        // Redirect to thank-you page
        window.location.href = "thank-you.html";
    });
});
