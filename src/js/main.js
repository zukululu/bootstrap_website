window.onscroll = function() { navScroll() };

const navbar = document.getElementById('second-nav');
const navOffset = navbar.getBoundingClientRect().top;
let sideBar = document.getElementById('side-bar')
let sideOffset = sideBar.getBoundingClientRect().top-140;

function navScroll() {
    if(window.pageYOffset >= navOffset) {
        navbar.classList.add("stick");
        if(window.pageYOffset >= sideOffset) {
            sideBar.classList.add("side-stick")
        } else {
            sideBar.classList.remove("side-stick")
        }
    } else {
        navbar.classList.remove("stick");
    }
    console.log(window.pageYOffset)
}