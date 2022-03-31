//mobile menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navbar-nav");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("res");
    navMenu.classList.toggle("res");
    navLink.forEach(n => n.classList.toggle("res"));
}
//close menu
navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu(){
  hamburger.classList.remove("res");
  navMenu.classList.remove("res");
  navLink.forEach(n => n.classList.remove("res"));
}

//Text typing
var typing=new Typed(".job-text", {
  strings: [ "WEB DEVELOPER","FLUTTER DEVELOPER"],
  typeSpeed: 200,
  backSpeed: 60,
  loop: true,
});