import Vue from 'vue';
import VueRouter from 'vue-router';
// import Body from '../views/Body.vue';
import Main from '../views/Main.vue';
import Fonds from '../components/Fonds.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
  },
  {
    path: '/fonds',
    name: 'fonds',
    component: Fonds,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
