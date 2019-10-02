import './bootstrap';
import Vue from 'vue';
import router from './routes'

import NetworkCTAPartial from './components/partials/networkCTA';


//Partials
Vue.component('NetworkCTAPartial', NetworkCTAPartial);

new Vue({
    el:'#app',
    // components: {
    //     NavComponent
    // },
    router
});

$(window).scroll(function() {
    let scroll = $(window).scrollTop();
    let Nav = $('nav');
    if (scroll >= 1) {
        Nav.addClass('scrolled');
    } else if (scroll === 0) {
        Nav.removeClass('scrolled');
    }
});