function isMobileDevice() {
	return window
		.matchMedia("only screen and (max-width: 760px)").matches;
}

function screenHeightLimited() {
	return window
		.matchMedia("only screen and (max-height: 541px)").matches;
}

function accessibilityFits() {
	return window
		.matchMedia("(max-width: 600px)").matches;
}

const banner = document.querySelector('.banner') // Declare once, save space!
const headerImage = document.querySelector('.header-image');
const centralBar = document.querySelector('.central-bar');
const navigationButton = document.querySelector('.navigation-dropdown');
const accessMenu = document.querySelector('.menu2') // Apologies for the name
const accessButton = document.querySelector('.display-settings');
const content = document.querySelector('.content');
const annBanner = document.querySelector('.announcement'); // Will be null if not present on page
const consent = document.querySelector('.consent');

function mobileFormatting() {
	//console.log("Determining device type...")
	
	// Phone in portrait mode!
	if (isMobileDevice()) {
		//console.log("Mobile formatting in effect.");
	
		/* Main text formatting */
		// Less boundary, more text on each line
		centralBar.style.maxWidth = '95vw';
		centralBar.style.marginInline = 'auto';
		centralBar.style.paddingLeft = '0vw';
		centralBar.style.marginTop = '17vh';
		content.style.textAlign = 'center';
		content.style.setProperty('max-width', '95vw', 'important');
		if (annBanner !== null) {
			annBanner.style.maxWidth = '95vw';
		}
	
		/* Header logo formatting */
		// Hide
		if (headerImage.classList.contains('hidden')) {
			// Do nothing as the image is already hidden!
		} else {
			headerImage.classList.toggle('hidden');
		}

		/* Formatting for central bar based on the state of the announcement banner */
		if (annBanner !== null) {
			if (annBanner.display === 'none') {
				console.log("Announcement hidden")
				centralBar.style.marginTop = '15.5vh';
			} else {
				console.log("Announcement shown");
				centralBar.style.marginTop = '1vh';
			};
		}
	} else { // Not a mobile device!
		//console.log("Standard formatting in effect.");

		/* display-settings button formatting (1vw + 48px) */
		adjustButtonAlignment;
	
		/* Main text formatting */
		centralBar.style.maxWidth = '51vw';
		centralBar.style.marginInline = 'auto';
		content.style.textAlign = 'left';
		content.style.setProperty('max-width', '75vw', 'important');
		if (annBanner !== null) {
			annBanner.style.maxWidth = '62.5vw';
		}

		/* Formatting for central bar based on the state of the announcement banner */
		if (annBanner !== null) {
			if (annBanner.display === 'none') {
				console.log("Announcement hidden")
				centralBar.style.marginTop = '15.5vh';
			} else {
				console.log("Announcement shown");
				centralBar.style.marginTop = '1vh';
			};
		}

		/* Header logo formatting */
		headerImage.style.scale = '20%';
		if (headerImage.classList.contains('hidden')) {
			headerImage.classList.toggle('hidden');
		}
	};

	// Device wide (But still small)!
	if (screenHeightLimited()) {
		/* 
		This is important because otherwise the banner text extends too far if it is set to 15vh.
		Beyond this point, banner extends for px. Additionally, the banner becomes fixed instead of absolute.*/
		console.log("Low device height detected")

		banner.style.maxHeight = '81px'; // Big enough that the banner text still fits.
		banner.style.position = 'absolute';
		headerImage.style.position = 'absolute';
		navigationButton.style.position = 'absolute';
		accessButton.style.position = 'absolute';

		// Offset element properly
		if (annBanner !== null) {
			annBanner.style.marginTop = '85px';
		}

		/* Formatting for central bar based on the state of the announcement banner */
		if (annBanner !== null) {
			if (annBanner.display === 'none') {
				console.log("Announcement hidden")
				centralBar.style.marginTop = '85px';
			} else {
				console.log("Announcement shown");
				centralBar.style.marginTop = '1vh';
			};
		}
	} else {
		//console.log("Acceptable device height")
		// Banner at max 15vh is fine
		banner.style.maxHeight = '15vh';
		banner.style.position = 'fixed';
		headerImage.style.position = 'fixed';
		navigationButton.style.position = 'fixed';
		accessButton.style.position = 'fixed';

		if (annBanner !== null) {
			annBanner.style.marginTop = '15vh';
		}
	};

	if (accessibilityFits()) {
		//console.log("Access menu does not fit. Changing width...")
		// Can't have a 500px window
		accessMenu.style.width = '100vw';
		accessMenu.style.left = 'auto';
	} else {
		//console.log("Access menu fits. Width = 500px.")
		// Can use a full 500px window
		accessMenu.style.width = '500px';
		accessMenu.style.left = 'calc(50vw - 250px)';
	}
}

function adjustButtonAlignment() {
	// Button on right if not a mobile device
	if (!isMobileDevice()) {
		/* display-settings button formatting (1vw + 48px) */
		let windowWidth = window.innerWidth;
		const alignment = (windowWidth / 100 + 48) + 'px';
		accessButton.style.right = alignment;
		accessButton.style.left = 'auto';
	} else {
		accessButton.style.left = '1vw';
		accessButton.style.right = 'auto';
	}
	
}

function resize() {
	// Reduces number of listener events created.
	mobileFormatting();
	adjustButtonAlignment();
}

// Call on load and during resizing
resize(); // Runs on page load
window.addEventListener('resize', resize);