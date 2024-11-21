function darkmode(darkmodeOn) {
    if (darkmodeOn) {
        console.log("Light mode enabled."); // light
    } else {
        console.log("Dark mode enabled."); // dark
    }
}

function fontSize(size) {
    if (size == 0) {
        console.log("Small font size selected."); // 16px
    } else if (size == 1) {
        console.log("Standard font size selected."); // 20px
    } else {
        console.log("Large font size selected."); // 24px
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