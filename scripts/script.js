const menu = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};

const header = document.querySelector("header");
const list = document.querySelector(".scrolled");
const list2 = document.querySelector(".scrolled2");
const list3 = document.querySelector(".scrolled3");
const list4 = document.querySelector(".scrolled4");
const sectionOne = document.querySelector(".first-page");

const sectionOneOptions = {
    rootMargin: "-500px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(entries, sectionOneObserver){
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            header.classList.add("nav-scrolled");
            list.classList.add("nav-scrolled-fonts");
            list2.classList.add("nav-scrolled-fonts");
            list3.classList.add("nav-scrolled-fonts");
            list4.classList.add("nav-scrolled-fonts");
        } else{
            header.classList.remove("nav-scrolled");
            list.classList.remove("nav-scrolled-fonts");
            list2.classList.remove("nav-scrolled-fonts");
            list3.classList.remove("nav-scrolled-fonts");
            list4.classList.remove("nav-scrolled-fonts");
        }
    })
}, sectionOneOptions);

sectionOneObserver.observe(sectionOne);