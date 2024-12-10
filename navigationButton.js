document.getElementById('navigation-toggle').addEventListener('click', function () {
	const menu = document.getElementById('menu');

	state.menuOpen = !state.menuOpen;
	menu.classList.toggle('hidden', !state.menuOpen);
});