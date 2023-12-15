import burger_menu from './modules/burger_menu';
import modal from './modules/modal';
import faq from './modules/faq';
import subscribe from './modules/subscribe';
import inputMasks from './modules/inputMasks';
import news from './modules/news';
import projects from './modules/projects';

import '../scss/global.scss'

window.addEventListener('DOMContentLoaded', function() {
    burger_menu();
    modal();
    faq();
    subscribe();
    inputMasks();
    news();
    projects();
}); 