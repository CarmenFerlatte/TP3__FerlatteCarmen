// Init all js files

import { initNavbar } from './navbar.js';
import { initScript } from './script.js';
import { initInstall } from './install.js';
import { initHeader } from './header.js';


$(function(){
    initNavbar();
    initInstall();
    initHeader();
});