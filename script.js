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

	// Submit the form
	const formData = new FormData(this);
	fetch('https://script.google.com/macros/s/AKfycbzSFKmPwEZxS_c4Y129nNDbeKGhpzPbl_UhURoAUMjPgeJR7g86XmetPz49OR3WmvdV/exec', {
		method: 'POST',
		body: formData,
	})
	.then(response => response.json())
	.then(data => {
		if (data.status === "success") {
			// Display success message
			alert("Form submitted successfully! We'll get back to you as soon as possible.");
			const successMessage = document.getElementById('successMessage');
			successMessage.style.display = 'block';

			// Clear the form
			document.getElementById('contactForm').reset();
		} else {
			throw new Error("Submission failed. Please try again.");
		}
	})
	.catch(error => {
		console.error('Error:', error);
		alert("There was an error submitting the form. Please try again later.");
	});
});
