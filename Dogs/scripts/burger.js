let burger = document.querySelector(".header__menu-burger");

burger.onclick = function(event){
    let hideMenu = document.querySelector(".header__hide-menu");
    hideMenu.classList.toggle("active");
}