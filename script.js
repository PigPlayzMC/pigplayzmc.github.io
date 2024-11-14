document.getElementById('contactForm').addEventListener('submit', function(event) {
    // Prevent the form from submitting
    event.preventDefault();

    // Validate Name
    const name = document.getElementById('name').value.trim();
    if (name === "") {
        alert("Please enter your name.");
        return;
    }

    // Validate Email
    const email = document.getElementById('email').value.trim();
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Validate Phone
    const phone = document.getElementById('phone').value.trim();
    if (!/^\d{10}$/.test(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return;
    }

    // Validate Message
    const message = document.getElementById('message').value.trim();
    if (message === "") {
        alert("Please enter a message.");
        return;
    }

    // If all validations pass, submit the form (or you could add custom code here to process it)
    alert("Form submitted successfully!");
});
