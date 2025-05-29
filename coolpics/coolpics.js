let button= document.getElementById("menu");

let menuLinks= document.getElementById("menu_links");

button.addEventListener("click",function () {
    menuLinks.classList.toggle("hide"); 
});
