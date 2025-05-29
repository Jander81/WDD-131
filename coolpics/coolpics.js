let button= document.getElementById("menu");

let menuLinks= document.getElementById("menu_links");

button.addEventListener("click",function () {
    menuLinks.classList.toggle("hide"); 
});

function handleResize() {
    let links= document.getElementById("menu_links");
    let width= window.innerWidth;
    if(width > 1000) {
        links.classList.remove("hide");
    } else {
        links.classList.add("hide");
    }
}

window.addEventListener("resize", handleResize);
window.addEventListener("load", handleResize);