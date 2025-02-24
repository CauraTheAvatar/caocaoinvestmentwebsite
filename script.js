document.addEventListener("DOMContentLoaded", function () {
    // Smooth Scrolling for navigation links
    const navLinks = document.querySelectorAll("a[href^='#']");
    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });


// Request a Quote Button Functionality
const quoteButton = document.querySelector("header button");
if (quoteButton) {
    quoteButton.addEventListener("click", function () {
        alert("Forward us an email with details of your services needs.");
    });
}


// Image Hover Effect in Reviews
const reviewImages = document.querySelectorAll(".review img");
reviewImages.forEach(img => {
    img.addEventListener("mouseover", function () {
        this.style.transform = "scale(1.1)";
        this.style.transition = "transform 0.3s ease";
    });
    img.addEventListener("mouseout", function () {
        this.style.transform = "scale(1)";
    });
});


// Toggle Navigation Menu (for Mobile Devices)
const menuToggle = document.createElement("div");
menuToggle.innerHTML = "☰";
menuToggle.classList.add("menu-toggle");

const navMenu = document.querySelector("nav");
menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");
});


// Email Contact Redirection
const emailLink = document.getElementById("emailLink");
if (emailLink) {
    emailLink.addEventListener("click", () => {
        window.location.href = "mailto:mmuuyuni@gmail.com";
    });
}


// Dialling Pad Redirection
const callLink = document.getElementById("callLink");
if (callLink) {
    callLink.addEventListener("click", () => {
        window.location.href = "tel:+264812218771";
    });
}


// Instagram Redirection
const instagramLink = document.getElementById("instagramLink");
if (instagramLink) {
    instagramLink.addEventListener("click", () => {
        window.location.href = "https://www.instagram.com/Iantega";
    });
}

});