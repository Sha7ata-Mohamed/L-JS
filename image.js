function setBackground(e) {
    if (e.type == "focus") {
        e.target.style.backgroundColor = "#FFE393";
    }
    else if (e.type == "blur") {
        e.target.style.backgroundColor = "white";
    }
}
// set up the event listeners only after the DOM is loaded
window.addEventListener("load", function () {
    const cssSelector = "input[type=text],input[type=password]";
    const fields = document.querySelectorAll(cssSelector);
    for (let f of fields) {
        f.addEventListener("focus", setBackground);
        f.addEventListener("blur", setBackground);
    }
});