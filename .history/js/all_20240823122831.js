// Init all js files

import { initNavbar } from './navbar.js';
import { initHeader } from './header.js';
import { initScript } from './script.js';
import { initAccordeon } from './accordeon.js';
import { initInstall } from './install.js';
import { initServiceWorker } from './service-worker.js';

$(function(){
    initNavbar();
    initScript();
    initHeader();
    initAccordeon();
    initInstall();
});