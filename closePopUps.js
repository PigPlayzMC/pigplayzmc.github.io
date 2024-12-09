document.addEventListener('click', function (event) {
	const menu = document.getElementById('menu');
	const displayMenu = document.getElementById('display-menu');

	if (!menu.contains(event.target) && !event.target.matches('#navigation-toggle')) {
		menu.classList.add('hidden');
		state.menuOpen = false;
	}

	if (!displayMenu.contains(event.target) && !event.target.matches('#display-toggle')) {
		displayMenu.classList.add('hidden');
		state.displayMenuOpen = false;
	}
});