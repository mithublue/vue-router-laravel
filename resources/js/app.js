/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

//require('./bootstrap');
import './bootstrap';
import Vue from 'vue';
import Vuetify from 'vuetify';

//Route information for vue router
//import Routes from '@/js/routes.js';

//component files
import App from '@/js/views/App';


//
import VueRouter from 'vue-router';

import Home from '@/js/components/Home';
import About from '@/js/components/About';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    router: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/about',
            component: About
        }
    ]
});

//

Vue.use(Vuetify);


const app = new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});

export default app;