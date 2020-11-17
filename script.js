var menuButton = document.getElementById("menu-button");
var header = document.getElementById("header");
var mainImage = document.getElementById("main-image");
var humanizing = document.getElementById("humanizing");
var text = document.getElementById("text");
var findOut = document.getElementById("find-out");
var footer = document.getElementById("footer");

 
menuButton.addEventListener("click",displayMenu);

function displayMenu(e) {

    var menu = document.getElementById("menu");
    menu.style.display = "block";
    menu.style.backgroundColor = "red";
    menu.style.transition = "4s";
    mainImage.style.display = "none";
    humanizing.style.display = "none";
    text.style.display = "none";
    findOut.style.display = "none";
    footer.style.display = "none";
}