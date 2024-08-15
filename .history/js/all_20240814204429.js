// Init all js files

import { initNavbar } from './navbar.js';
import { initHeader } from './header.js';
import { initScript } from './script.js';
import { initInstall } from './install.js';

$(function(){
    initNavbar();
    initScript();
    initHeader();
    initInstall();
});