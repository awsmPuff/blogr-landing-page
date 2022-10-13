const menuBtn = document.querySelector(".menu");
const toggleMenu = document.querySelector(".toggle-menu");
const chooseMore = document.getElementsByClassName("more");
const navList = document.querySelectorAll(".nav-list");


menuBtn.addEventListener("click", () => {
    if(menuBtn.classList.contains("close")) {
        menuBtn.classList.remove("close");
        menuBtn.classList.add("open");
        toggleMenu.style.display = "flex";
    } else if(menuBtn.classList.contains("open")) {
        menuBtn.classList.remove("open");
        menuBtn.classList.add("close");
        toggleMenu.style.display = "none";
    }
});

for(var i = 0; i < chooseMore.length; i++) {
    chooseMore[i].addEventListener("click", (e) => {
        if(e.target.classList.contains("down")) {
            e.target.classList.remove("down");
            e.target.classList.add("up");
            navList[e.target.id].style.display = "flex";
        } else if(e.target.classList.contains("up")) {
            e.target.classList.remove("up");
            e.target.classList.add("down");
            navList[e.target.id].style.display = "none";
        }
    })
}

console.log(navList);

const mediaQuery = window.matchMedia('(min-width: 768px)');
if(mediaQuery.matches) {
    document.querySelector(".header-bg").src = "./images/bg-pattern-intro-desktop.svg";
    document.querySelector(".editor").src = "./images/illustration-editor-desktop.svg";
    document.querySelector(".laptop").src = "./images/illustration-laptop-desktop.svg";
}