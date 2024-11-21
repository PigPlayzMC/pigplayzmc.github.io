function darkmode(darkmodeOn) {
    const element = document.querySelector('.content')
    if (darkmodeOn) {
        console.log("Light mode enabled."); // light
        element.style.backgroundColor = "#ffffff"
        return false
    } else {
        console.log("Dark mode enabled."); // dark
        element.style.backgroundColor = "#000000"
        return true
    }
}

function fontSize(size) {
    const element = document.querySelector('.content');
    if (size == 0) {
        console.log("Small font size selected."); // 16px
        element.style.fontSize = "16px"
    } else if (size == 1) {
        console.log("Standard font size selected."); // 20px
        element.style.fontSize = "20px"
    } else {
        console.log("Large font size selected."); // 24px
        element.style.fontSize = "24px"
    }
}

function spaces(spacing) {
    if (spacing == 0) {
        console.log("Standard spacing selected.") // 1
    } else {
        console.log("Wide spacing selected.") // 1.5
    }
}

var darkmodeOn = false; // light/normal mode
var size = 1; // 20px
var spacing = 0; // standard spacing

document.getElementById('display-toggle').addEventListener('click', function() {
    const menu = document.getElementById('display-menu');
    menu.classList.toggle('hidden');
});

document.getElementById('small-font').addEventListener('click', function() {
    fontSize(0)
});