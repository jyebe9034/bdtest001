import Vue from 'vue';
import VueRouter from 'vue-router';

// import IntroRoute from './modules/intro';
// import CatalogRoute from './modules/catalog';
import ApplyRoute from './modules/apply';
// import NoticeRoute from './modules/notice';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    // component: Home,
  },
  // IntroRoute,
  // CatalogRoute,
  ApplyRoute,
  // NoticeRoute,
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
