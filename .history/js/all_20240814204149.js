// Init all js files

import { initNavbar } from './navbar.js';
import { initScript } from './.js';
import { initHeader } from './header.js';

$(function(){
    initNavbar();
    initScript();
    initHeader();
});