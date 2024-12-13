function darkmode(darkmodeOn, preloading) {
	const element = document.querySelector('.central-bar');
	const content = document.querySelector('.content');
	const form = document.querySelector('.form-container');

	if (!darkmodeOn) { // LIGHT MODE
		console.log("Light mode enabled."); // light
		element.style.background = "rgba(212, 212, 212, 0.7)"; // Default
		content.style.color = "#000000";
		updateLinkColors(false);

		form.style.backgroundColor = '#dfdfdf';
		form.style.color = '#000000';
	} else { // DARK MODE
		console.log("Dark mode enabled."); // dark
		element.style.background = "#060A1D"; // Not default
		content.style.color = "#ffffff";
		updateLinkColors(true);

		form.style.backgroundColor = '#060A1D'; // Change later
		form.style.color = '#ffffff';
	}

	// Only sets local theme if its been changed and consent has been given.
	if (findConsent) {
		if (!preloading) {
			localStorage.setItem("Theme", darkmodeOn);
			console.log("New theme formatting saving...");
		}
	}
}

function updateLinkColors(isDarkMode) {
	const styleElementId = 'dynamic-link-styles';
	let styleElement = document.getElementById(styleElementId);

	// Create the <style> element if it doesn't exist
	if (!styleElement) {
		styleElement = document.createElement('style');
		styleElement.id = styleElementId;
		document.head.appendChild(styleElement);
	}

	// Update the CSS rules for links
	if (isDarkMode) { // Dark
		styleElement.textContent = `
			a:link { color: hotpink !important; }       /* Unvisited links */
			a:visited { color: pink !important; }   /* Visited links */
		`;
	} else { // Light
		styleElement.textContent = `
			a:link { color: blue !important; }       /* Unvisited links */
			a:visited { color: purple !important; }   /* Visited links */
		`;
	}
}

function fontSize(size, preloading) {
	const element = document.querySelector('.content');
	if (size == 0) {
		//console.log("Small font size selected."); // 16px
		element.style.fontSize = "16px";
	} else if (size == 1) {
		//console.log("Standard font size selected."); // 20px
		element.style.fontSize = "20px";
	} else {
		//console.log("Large font size selected."); // 24px
		element.style.fontSize = "24px";
	}
	
	// Only sets local theme if its been changed and consent has been given.
	if (findConsent) {
		if (!preloading) {
			localStorage.setItem("Size", size);
			console.log("New font size formatting saving...");
		}
	}
}

function noConsent() { // Triggers when local storage cannot load.
	console.log("No consent given. Default settings enabling...")
	fontSize(1, false);
	darkmode(false, true);

	// Show consent popup
	const consentPopup = document.querySelector('.consent')
	consentPopup.classList.toggle('hidden');

	const allow = document.querySelector('.allow');
	const deny = document.querySelector('.deny');

	allow.addEventListener('click', function() { // Local storage can be used
		localStorage.setItem("Consent", true);
		consentPopup.classList.toggle('hidden');
		console.log("Consent given!")
	})
	deny.addEventListener('click', function() { // No consent given
		consentPopup.classList.toggle('hidden');
		console.log("Consent denied. :(")
		localStorage.clear();
	})
}

function findConsent() {
	try {
		if (localStorage.getItem("Consent") === "true") {
			console.log("Saving settings authorised!")
			return true;
		} else {
			return false;
		}
	}
	catch {
		return false;
	}
}

try {
	const consent = localStorage.getItem("Consent");
	if (consent === "true") {
		console.log("Consent to use local storage found!")

		// Initialise with correct formatting
		try {
			fontSize(localStorage.getItem("Size"), true);
			}
		catch {
			console.log("No previous font size settings found");
			fontSize(1, false);
		}

		try {
			darkmode(localStorage.getItem("Theme") === "true", true);
		}
		catch {
			console.log("No previous theme settings found")
			darkmode(false, true);
		}
	} else { // Needed only for users who return from before consent implemented!
		noConsent();
	}
}
catch {
	noConsent();
}

// Button toggle
document.getElementById('display-toggle').addEventListener('click', function () {
	const displayMenu = document.getElementById('display-menu');

	state.displayMenuOpen = !state.displayMenuOpen;
	displayMenu.classList.toggle('hidden', !state.displayMenuOpen);
});


// Listen for all font size button clicks
document.getElementById('small-font').addEventListener('click', function() {
	fontSize(0, false);
});
document.getElementById('standard-font').addEventListener('click', function() {
	fontSize(1, false);
});
document.getElementById('large-font').addEventListener('click', function() {
	fontSize(2, false);
});

// Listen for theme clicks
document.getElementById('light-mode').addEventListener('click', function() {
	darkmode(false, false);
});
document.getElementById('dark-mode').addEventListener('click', function() {
	darkmode(true, false);
});

// Listen for clear local storage clicks
document.getElementById('clear-settings').addEventListener('click', function() {
	localStorage.clear();
	console.log("Reloading site...");
	location.reload();
});