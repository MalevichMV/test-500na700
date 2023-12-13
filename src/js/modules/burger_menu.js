function burger_menu(){
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.header__menu');
    const navItems = document.querySelectorAll('.header__nav-item_paragraph');

    burger.addEventListener('click', () => {
        burger.classList.toggle("burger_active");
        menu.classList.toggle("header__menu_active");
    }); 

    navItems.forEach((elem) => {
        elem.addEventListener('mouseover', () => {
            elem.querySelector('.header__links').classList.add("header__links_active");
        });
        elem.addEventListener('mouseout', () => {
            elem.querySelector('.header__links').classList.remove("header__links_active");
        });
    });
}

export default burger_menu;