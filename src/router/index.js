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

    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Registracija.vue'),
  },
  {
    path: '/login',
    name: 'Login',

    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Login.vue'),
  },

  {
    path: '/addevent',
    name: 'AddEvent',

    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AddEvent.vue'),
  },
  {
    path: '/zapadna',
    name: 'Zapadna',

    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Zapadna.vue'),
  },
  {
    path: '/sredisnja',
    name: 'Sredisnja',

    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Sredisnja.vue'),
  },
  {
    path: '/istocna',
    name: 'Istocna',

    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Istocna.vue'),
  },
  {
    path: '/juzna',
    name: 'Juzna',

    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Juzna.vue'),
  },
  {
    path: '/gorska',
    name: 'Gorska',

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
    path: '/informacije/:event_id',
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
  {
    path: '/filtered',
    name: 'Filtered',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Filtered.vue'),
  },
  
 
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});
router.beforeEach((to, from, next) => {
  console.log(
    'Stara ruta',
    from.name,
    '->',
    to.name,
    'korisnik',
    store.currentUser
  );

  const noUser = store.currentUser === null;

  if (noUser && to.meta.needsUser) {
    next('Login');
  } else {
    next();
  }
});

export default router;
