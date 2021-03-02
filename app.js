// gamburg-menu

let mobileMenu = document.querySelector(".nav-mobile-menu");
let maineMenu = document.querySelector(".ulMenu");

mobileMenu.addEventListener("click",function(){
    mobileMenu.classList.toggle("active-menu");
    if(mobileMenu.classList.contains("active-menu")) {
        maineMenu.classList.add("active-menu")
    } else {
        maineMenu.classList.remove("active-menu");
    }
})