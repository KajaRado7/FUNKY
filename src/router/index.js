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
    path: '/addevent',
    name: 'AddEvent',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AddEvent.vue'),
  },
  {
    path: '/zapadna',
    name: 'Zapadna',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Zapadna.vue'),
  },
  {
    path: '/sredisnja',
    name: 'Sredisnja',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Sredisnja.vue'),
  },
  {
    path: '/istocna',
    name: 'Istocna',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Istocna.vue'),
  },
  {
    path: '/juzna',
    name: 'Juzna',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Juzna.vue'),
  },
  {
    path: '/gorska',
    name: 'Gorska',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Gorska.vue'),
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
  {
    path: '/informacije',
    name: 'Informacije',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Informacije.vue'),
  },
  {
    path: '/filter',
    name: 'Filter',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Filter.vue'),
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
    next('Login');
  } else {
    next();
  }
});

export default router;
