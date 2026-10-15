const roles = [
    "WEB DEVELOPER",
    "FRONTEND DEVELOPER",
    "PYTHON DEVELOPER"
];

const typingText = document.getElementById("typing-text");

let roleIndex = 0;
let letterIndex = 0;
let isDeleting = false;

function typeEffect() {

    const currentRole = roles[roleIndex];

    if (!isDeleting) {

        // Add one letter
        typingText.textContent =
            currentRole.substring(0, letterIndex + 1);

        letterIndex++;

        // Finished typing
        if (letterIndex === currentRole.length) {

            isDeleting = true;

            // Wait before deleting
            setTimeout(typeEffect, 1800);
            return;
        }

        setTimeout(typeEffect, 100);

    } else {

        // Delete one letter
        typingText.textContent =
            currentRole.substring(0, letterIndex - 1);

        letterIndex--;

        // Finished deleting
        if (letterIndex === 0) {

            isDeleting = false;

            // Move to next role
            roleIndex++;

            if (roleIndex === roles.length) {
                roleIndex = 0;
            }

            setTimeout(typeEffect, 400);
            return;
        }

        setTimeout(typeEffect, 60);
    }
}

typeEffect();

function toggleMenu() {

    const navbar = document.getElementById("navbar");

    navbar.classList.toggle("active");

}

function toggleTheme() {
    const body = document.body;
    const themeToggle = document.getElementById("themeToggle");
    const icon = themeToggle.querySelector("i");

    body.classList.toggle("light-mode");

    if (body.classList.contains("light-mode")) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }
}


// certificate modal
const certificateImages = document.querySelectorAll(".certificate-preview");

const certificateModal = document.getElementById("certificateModal");

const certificateModalImage =
    document.getElementById("certificateModalImage");

const certificateClose =
    document.getElementById("certificateClose");


certificateImages.forEach((image) => {

    image.addEventListener("click", () => {

        certificateModalImage.src = image.src;
        certificateModalImage.alt = image.alt;

        certificateModal.classList.add("active");

        document.body.style.overflow = "hidden";
    });

});


certificateClose.addEventListener("click", () => {

    certificateModal.classList.remove("active");

    document.body.style.overflow = "";
});


certificateModal.addEventListener("click", (event) => {

    if (event.target === certificateModal) {

        certificateModal.classList.remove("active");

        document.body.style.overflow = "";
    }

});


document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        certificateModal.classList.remove("active");

        document.body.style.overflow = "";
    }

});

// contact section

const fields = [
    {
        element: document.querySelector('.contact-form input[placeholder="Your Name"]'),
        text: "Your Name"
    },
    {
        element: document.querySelector('.contact-form input[placeholder="Your Email"]'),
        text: "Your Email"
    },
    {
        element: document.querySelector('.contact-form input[placeholder="Subject"]'),
        text: "Subject"
    },
    {
        element: document.querySelector('.contact-form textarea'),
        text: "Your Message"
    }
];

fields.forEach(field => {
    let index = 0;
    let stopped = false;

    function typeText() {
        if (stopped) return;

        field.element.placeholder = field.text.substring(0, index);
        index++;

        if (index > field.text.length) {
            index = 0;
        }

        setTimeout(typeText, 120);
    }

    field.element.addEventListener("focus", () => {
        stopped = true;
        field.element.placeholder = "";
    });

    typeText();
});