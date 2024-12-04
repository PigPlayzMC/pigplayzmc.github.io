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
const element = document.querySelector('.content');
const navigationButton = document.querySelector('.navigation-dropdown');
const accessMenu = document.querySelector('.menu2') // Apologies for the name
const accessButton = document.querySelector('.display-settings');

function mobileFormatting() {
	//console.log("Determining device type...")
	
	

	// Phone in portrait mode!
	if (isMobileDevice()) {
		//console.log("Mobile formatting in effect.");
	
		/* Main text formatting */
		// Less boundary, more text on each line
		element.style.maxWidth = '95vw';
		element.style.marginLeft = '0';
		element.style.paddingLeft = '5vw';
		element.style.marginTop = '17vh'; 
	
		/* Header logo formatting */
		// Hide
		if (headerImage.classList.contains('hidden')) {
			// Do nothing as the image is already hidden!
		} else {
			headerImage.classList.toggle('hidden');
		}
	} else {
		//console.log("Standard formatting in effect.");

		/* display-settings button formatting (1vw + 48px) */
		adjustButtonAlignment;
	
		/* Main text formatting */
		element.style.maxWidth = '75vw';
		element.style.marginLeft = '20';
		element.style.paddingLeft = '25vw';
		element.style.marginTop = '15vh';
	
		/* Header logo formatting */
		headerImage.style.scale = '20%';
		if (headerImage.classList.contains('hidden')) {
			headerImage.classList.toggle('hidden');
		}
	};

	// Device wide (But still small)!
	if (screenHeightLimited()) {
		/* 
		This is important because otherwise the banner text extends to far if it is set to 15vh.
		Beyond this point, banner extends for px. Additionally, the banner becomes fixed instead of absolute.*/
		//console.log("Low device height detected")

		banner.style.maxHeight = '81px'; // Big enough that the banner text still fits.
		banner.style.position = 'absolute';
		headerImage.style.position = 'absolute';
		navigationButton.style.position = 'absolute';
		accessButton.style.position = 'absolute';

		// Offset element properly
		element.style.marginTop = '85px';
	} else {
		//console.log("Acceptable device height")
		// Banner at max 15vh is fine
		banner.style.maxHeight = '15vh';
		banner.style.position = 'fixed';
		headerImage.style.position = 'fixed';
		navigationButton.style.position = 'fixed';
		accessButton.style.position = 'fixed';
	};

	if (accessibilityFits()) {
		console.log("Access menu does not fit. Changing width...")
		// Can't have a 500px window
		accessMenu.style.width = '100vw';
		accessMenu.style.left = 'auto';
	} else {
		console.log("Access menu fits. Width = 500px.")
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