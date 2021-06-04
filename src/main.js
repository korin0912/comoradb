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
    name: 'Games',
    component: () => import('./components/Games/Games.vue'),
  },
  {
    path: '/actors/:actorId',
    name: 'Actors',
    component: () => import('./components/Actors/Actors.vue'),
  },
];

if (process.env.NODE_ENV == 'development') {
  routes.push({
    path: '/movies/edit/:movieId',
    name: 'MovieEdit',
    component: () => import('./components/Edits/MovieEdit.vue'),
  });
  routes.push({
    path: '/games/edit/:gameId',
    name: 'GameEdit',
    component: () => import('./components/Edits/GameEdit.vue'),
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
