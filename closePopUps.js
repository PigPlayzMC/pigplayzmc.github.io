const menu = document.getElementById('menu');

// Add a click event listener to the document
document.addEventListener('click', function (event) {
    // Check if the clicked element is outside the target element
    if (!menu.contains(event.target)) {
        menu.classList.toggle('hidden');
    }
});

const display = document.getElementById('display-menu');

// Add a click event listener to the document
document.addEventListener('click', function (event) {
    // Check if the clicked element is outside the target element
    if (!display.contains(event.target)) {
        display.classList.toggle('hidden');
    }
});