import VueRouter from 'vue-router';

import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import ProfilePage from './components/pages/ProfilePage';
import ServicesPage from './components/pages/ServicesPage';
import ContactPage from './components/pages/ContactPage';
import NotFound from './components/NotFoundComponent';
import StyleGuide from './components/pages/StyleGuideComponent';

let routes = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/about',
        component: AboutPage
    },
    {
        path: '/profile',
        component: ProfilePage
    },
    {
        path: '/services',
        component: ServicesPage
    },
    {
        path: '/contact',
        component: ContactPage
    },
    {
        path: '/styleguide',
        component: StyleGuide
    },
    {
        path: '*',
        component: NotFound
    }
];

export default new VueRouter({
    mode: 'history',
    routes,
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0}
    }
});