function burger_menu(){
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.header__menu');
    const navItems = document.querySelectorAll('.header__nav-item_paragraph');

    // закрытие меню на мобильном устройстве
    const closeMobileMenu = () => {
        burger.classList.remove("burger_active");
        menu.classList.remove("header__menu_active");
        document.body.style.overflow = 'auto';
    }

    // открытие меню на мобильном устройстве
    const openMobileMenu = () => {
        burger.classList.add("burger_active");
        menu.classList.add("header__menu_active");
        document.body.style.overflow = 'hidden';
    }

    burger.addEventListener('click', () => {
        if (menu.classList.contains("header__menu_active"))
        {
            closeMobileMenu();
        } else {
            openMobileMenu();
        };
    }); 

    // вывод пунктов менб при наведении на навигационную ссылку содержащую подпункты
    navItems.forEach((elem) => {
        elem.addEventListener('mouseover', () => {
            elem.querySelector('.header__links').classList.add("header__links_active");
        });
        elem.addEventListener('mouseout', () => {
            elem.querySelector('.header__links').classList.remove("header__links_active");
        });
    });

    // закрытие меню при клике на ссылку навигации
    const links = document.querySelector('.header__nav').querySelectorAll('a');
    links.forEach((elem) => {
        elem.addEventListener('click', () => {
            if (menu.classList.contains("header__menu_active"))
            {
                closeMobileMenu();
            }
        });
    });
}

export default burger_menu;