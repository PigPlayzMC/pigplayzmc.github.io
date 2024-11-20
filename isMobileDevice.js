function isMobileDevice() {
	return window
		.matchMedia("only screen and (max-width: 760px)").matches;
}
if (isMobileDevice()) {
	console.log("Mobile formatting in effect.");

	/* Main text formatting */
	const element = document.querySelector('.content');
	element.style.maxWidth = '95vw';
	element.style.marginLeft = '0';
	element.style.paddingLeft = '5vw';
	element.style.marginTop = '17vh'; 
} else {
	console.log("Standard formatting in effect.");

	/* Main text formatting */
	const element = document.querySelector('.content');
	element.style.maxWidth = '75vw';
	element.style.marginLeft = '20';
	element.style.paddingLeft = '25vw';
	element.style.marginTop = '15vh';
}