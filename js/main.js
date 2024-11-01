
const loading = document.getElementById("loading");

const loadingDuration = 5000;

setTimeout(() => {
    loading.classList.add("loading-none");
}, loadingDuration);

const body = document.body;
const modeToggle = document.querySelector(".dark--mode");

modeToggle.addEventListener("click", () => {
    body.classList.toggle("dark");
});


window.addEventListener("scroll", function () {
    shrink();
});

let navbar = document.getElementById("header");

function shrink() {
    if (scrollY > 780) {
        navbar.classList.add("navbar-shrink");
    } else {
        navbar.classList.remove("navbar-shrink");
    }
}


document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        toggleBacktop();
    });

    let backtop = document.getElementById("backtop");

    function toggleBacktop() {
        if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
            backtop.classList.add('backtop-show');
        } else {
            backtop.classList.remove('backtop-show');
        }
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('humburger');
    const navLinks = document.getElementById('navbar--list');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});

const dropdownButton = document.getElementById("nav-drop");
const dropdownMenu = document.getElementById("nav--dorpdown");

dropdownButton.addEventListener("click", function () {
    dropdownMenu.classList.toggle("drop--active");
});

window.addEventListener("click", function (event) {
    if (!event.target.matches('#nav-drop')) {
        dropdownMenu.classList.remove("show");
    }
});

const dropdownButtonn = document.getElementById("nav-drop-1");
const dropdownMenun = document.getElementById("nav--dorpdown-1");

dropdownButtonn.addEventListener("click", function () {
    dropdownMenun.classList.toggle("drop--active");
});

window.addEventListener("click", function (event) {
    if (!event.target.matches('#nav-drop-1')) {
        dropdownMenun.classList.remove("show");
    }
});

const dropdownButtonrn = document.getElementById("nav-drop-2");
const dropdownMenurn = document.getElementById("nav--dorpdown-2");

dropdownButtonrn.addEventListener("click", function () {
    dropdownMenurn.classList.toggle("drop--active");
});

window.addEventListener("click", function (event) {
    if (!event.target.matches('#nav-drop-2')) {
        dropdownMenurn.classList.remove("show");
    }
});

const dropdownButtonsr = document.getElementById("nav-drop-3");
const dropdownMenusr = document.getElementById("nav--dorpdown-3");

dropdownButtonsr.addEventListener("click", function () {
    dropdownMenusr.classList.toggle("drop--active");
});

window.addEventListener("click", function (event) {
    if (!event.target.matches('#nav-drop-3')) {
        dropdownMenusr.classList.remove("show");
    }
});


AOS.init();