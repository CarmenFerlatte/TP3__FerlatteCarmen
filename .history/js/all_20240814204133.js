// Init tout les js files

import { initNavbar } from './navbar.js';
import { initScript } from './script.js';
import { initHeader } from './header.js';

$(function(){
    initNavbar();
    initScript();
    initHeader();
});