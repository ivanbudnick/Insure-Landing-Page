var menuButton = document.getElementById("menu-button");
var header = document.getElementById("header");
var mainImage = document.getElementById("main-image");
var humanizing = document.getElementById("humanizing");
var text = document.getElementById("text");
var findOut = document.getElementById("find-out");
var footer = document.getElementById("footer");
var buttonHowWeWork = document.getElementById("button-how-we-work");

 
menuButton.addEventListener("click",displayMenu);
buttonHowWeWork.addEventListener("click", deployMenu);

function displayMenu(e) {

    var menu = document.getElementById("menu");
    menu.style.display = "block";
    menu.style.top = "80px";
    menu.style.transition = "1s";
    menu.style.transitionTimingFunction = "ease-out";

}

function deployMenu (e) {
    menu.style.display = "none";

}