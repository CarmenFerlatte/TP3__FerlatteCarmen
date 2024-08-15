// Init all js files

import { initNavbar } from 'nav';
import { initScript } from './header.js';
import { initHeader } from './header.js';

$(function(){
    initNavbar();
    initScript();
    initHeader();
});