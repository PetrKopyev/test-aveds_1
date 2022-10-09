import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/auth/Login'
import Main from "@/components/Main";
import Contacts from "@/components/Contacts";
import PersonalArea from "@/components/PersonalArea";

Vue.use(VueRouter)

const ifNotAuth = (to, from, next) => {
    if (to.name !== 'Main' && !localStorage.getItem('token')) next({name: 'Main'})
    else next();
};

const ifAuth = (to, from, next) => {
    if (to.name === 'Main' && localStorage.getItem('token')) next({path: '/personal-area'})
    else next()
};

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/',
        name: 'Main',
        component: Main,
        beforeEnter: ifAuth,
    },
    {
        path: '/contacts',
        name: 'Contacts',
        component: Contacts,
    },
    {
        path: '/personal-area',
        name: 'PersonalArea',
        component: PersonalArea,
        beforeEnter: ifNotAuth,
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
