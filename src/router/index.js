import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import store from '@/store';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/registracija',
    name: 'Registracija',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Registracija.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Login.vue'),
  },
  {
    path: '/početna',
    name: 'Početna',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "početna" */ '../views/Početna.vue'),
    meta: {
      needsUser: true,
    },
  },
  {
    path: '/addevent',
    name: 'AddEvent',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AddEvent.vue'),
  },
  {
    path: '/west',
    name: 'West',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/West.vue'),
  },
  {
    path: '/regije',
    name: 'Regije',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Regije.vue'),
  },

  {
    path: '/favoriti',
    name: 'Favoriti',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Favoriti.vue'),
  },
  {
    path: '/account',
    name: 'Account',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Account.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});
router.beforeEach((to, from, next) => {
  console.log('Stara rute', from.name, '->', to.name, 'korisnik', store.name);

  const noUser = store.currentUser === null;

  if (noUser && to.meta.needsUser) {
    next('login');
  } else {
    next();
  }
});

export default router;
