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
];

if (process.env.NODE_ENV == 'development') {
  routes.push({
    path: '/game/:gameId/edit',
    name: 'GameEdit',
    component: () => import('./components/Game/Edit.vue'),
  });
  routes.push({
    path: '/movies/:movieId/edit',
    name: 'MovieEdit',
    component: () => import('./components/Movie/Edit.vue'),
  });
}

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: routes,
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
