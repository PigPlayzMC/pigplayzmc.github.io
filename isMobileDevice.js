function isMobileDevice() {
	return window
		.matchMedia("only screen and (max-width: 760px)").matches;
}
function mobileFormatting() {
	if (isMobileDevice()) {
		console.log("Mobile formatting in effect.");
	
		/* Main text formatting */
		// Less boundary, more text on each line
		const element = document.querySelector('.content');
		element.style.maxWidth = '95vw';
		element.style.marginLeft = '0';
		element.style.paddingLeft = '5vw';
		element.style.marginTop = '17vh'; 
	
		/* Header logo formatting */
		// Hide
		const headerImage = document.querySelector('.header-image');
		if (headerImage.classList.contains('hidden')) {
			// Do nothing as the image is already hidden!
		} else {
			headerImage.classList.toggle('hidden');
		}
	} else {
		console.log("Standard formatting in effect.");
	
		/* Main text formatting */
		const element = document.querySelector('.content');
		element.style.maxWidth = '75vw';
		element.style.marginLeft = '20';
		element.style.paddingLeft = '25vw';
		element.style.marginTop = '15vh';
	
		/* Header logo formatting */
		const headerImage = document.querySelector('.header-image');
		headerImage.style.scale = '20%';
	}
}

mobileFormatting // Runs on page load

setInterval(mobileFormatting(), 10000) // Rechecks if mobile formatting should be active once every 10 seconds.