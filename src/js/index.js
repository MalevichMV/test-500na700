import burger_menu from './modules/burger_menu';
import modal from './modules/modal';
import slider from './modules/slider';
import faq from './modules/faq';
import subscribe from './modules/subscribe';
import inputMasks from './modules/inputMasks';
import '../scss/global.scss'

window.addEventListener('DOMContentLoaded', function() {
    burger_menu();
    modal();
    slider();
    faq();
    subscribe();
    inputMasks();
}); 