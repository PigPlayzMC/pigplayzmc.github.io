function darkmode(darkmodeOn, preloading) {
    const element = document.querySelector('.content')
    if (!darkmodeOn) {
        console.log("Light mode enabled."); // light
    } else {
        console.log("Dark mode enabled."); // dark
    }

    // Only sets local theme if its been changed.
    if (!preloading) {
        localStorage.setItem("Theme", darkmodeOn)
        console.log("New style formatting saving...")
    }
}

function fontSize(size, preloading) {
    const element = document.querySelector('.content');
    if (size == 0) {
        //console.log("Small font size selected."); // 16px
        element.style.fontSize = "16px";
    } else if (size == 1) {
        //console.log("Standard font size selected."); // 20px
        element.style.fontSize = "20px";
    } else {
        //console.log("Large font size selected."); // 24px
        element.style.fontSize = "24px";
    }
    
    // Only sets local theme if its been changed.
    if (!preloading) {
        localStorage.setItem("Size", size)
        console.log("New style formatting saving...")
    }
}

function spaces(spacing) {
    if (spacing == 0) {
        console.log("Standard spacing selected.") // 1
    } else {
        console.log("Wide spacing selected.") // 1.5
    }
}

// Initialise with correct formatting
try {
    fontSize(localStorage.getItem("Size"), true);
    darkmode(localStorage.getItem("Theme"), true);
    }
catch {
    console.log("No previous style settings found");
}

// Button toggle
document.getElementById('display-toggle').addEventListener('click', function() {
    const menu = document.getElementById('display-menu');
    menu.classList.toggle('hidden');
});

// Listen for all font size button clicks
document.getElementById('small-font').addEventListener('click', function() {
    fontSize(0, false);
});
document.getElementById('standard-font').addEventListener('click', function() {
    fontSize(1, false);
});
document.getElementById('large-font').addEventListener('click', function() {
    fontSize(2, false);
});

// Listen for theme clicks
document.getElementById('light-mode').addEventListener('click', function() {
    fontSize(false, false);
});
document.getElementById('dark-mode').addEventListener('click', function() {
    fontSize(true, false);
});