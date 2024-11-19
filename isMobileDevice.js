function isMobileDevice() {
	return window
		.matchMedia("only screen and (max-width: 760px)").matches;
}
if (isMobileDevice()) {
	console.log("Detected device is a mobile.");
	const element = document.querySelector('.content');
	element.style.maxWidth = '95vw';
} else {
	console.log("Detected device is not a mobile.");
	const element = document.querySelector('.content');
	element.style.maxWidth = '75vw';
}