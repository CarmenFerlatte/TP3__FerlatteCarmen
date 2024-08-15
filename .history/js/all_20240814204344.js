// Init all js files

import { initNavbar } from './navbar.js';
import { initInstall } from './install.js';
import { initHeader } from './header.js';
import { initScript } from './script.js';

$(function(){
    initNavbar();
    initInstall();
    initHeader();
});