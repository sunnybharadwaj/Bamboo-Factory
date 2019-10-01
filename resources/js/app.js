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

