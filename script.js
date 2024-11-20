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

    // Validate Message
    const message = document.getElementById('message').value.trim();
    if (message === "") {
        alert("Please enter a message.");
        return;
    }

    // If all validations pass, submit the form
    // Submit the form
    const formData = new FormData(this);
    fetch('https://script.google.com/macros/s/AKfycbzIoPN2DsTZsM56Uy1OfAB2ay3aoiI91aGywa5ZUY8UTXx1-A96h1TMiZDcDKkGX6jo/exec', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === "success") {
            alert("Form submitted successfully! We'll get back to you as soon as possible.");
            const successMessage = document.getElementById('successMessage');
            successMessage.style.display = 'block';
        }
    })
    .catch(error => console.error('Error:', error));
});
