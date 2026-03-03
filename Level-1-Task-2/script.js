const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // prevent default form submission

    // Basic validation
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    if(!fullName || !email || !subject || !message) {
        formMessage.style.color = "red";
        formMessage.textContent = "Please fill out all fields.";
        return;
    }

    // Simple email regex check
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(!email.match(emailPattern)) {
        formMessage.style.color = "red";
        formMessage.textContent = "Please enter a valid email address.";
        return;
    }

    formMessage.style.color = "green";
    formMessage.textContent = "Form submitted successfully!";
    form.reset();
});