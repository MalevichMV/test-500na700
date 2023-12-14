import burger_menu from './modules/burger_menu';
import modal from './modules/modal';
import slider from './modules/slider';
import '../scss/global.scss'

window.addEventListener('DOMContentLoaded', function() {
    burger_menu();
    modal();
    slider();
}); 