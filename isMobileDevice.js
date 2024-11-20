function isMobileDevice() {
	return window
		.matchMedia("only screen and (max-width: 760px)").matches;
}
if (isMobileDevice()) {
	console.log("Detected device is a mobile.");
} else {
	console.log("Detected device is not a mobile.");
}