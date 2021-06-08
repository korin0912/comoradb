import Vue from 'vue';
import VueHead from 'vue-head';
import VueRouter from 'vue-router';
import App from './App.vue';

Vue.config.productionTip = false;
Vue.use(VueHead);
Vue.use(VueRouter);

let routes = [
  {
    path: '/',
    name: 'TopShow',
    component: () => import('./components/Top/Show.vue'),
  },
  {
    path: '/actor/:actorId',
    name: 'ActorShow',
    component: () => import('./components/Actor/Show.vue'),
  },
  {
    path: '/game/:gameId',
    name: 'GameShow',
    component: () => import('./components/Game/Show.vue'),
  },
  {
    path: '/movie/:movieId',
    name: 'MovieShow',
    component: () => import('./components/Movie/Show.vue'),
  },
];

if (process.env.NODE_ENV == 'development') {
  routes.push({
    path: '/game/:gameId/edit',
    name: 'GameEdit',
    component: () => import('./components/Game/Edit.vue'),
  });
  routes.push({
    path: '/movie/:movieId/edit',
    name: 'MovieEdit',
    component: () => import('./components/Movie/Edit.vue'),
  });
}

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
