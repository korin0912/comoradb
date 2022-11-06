import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import { createHead } from '@vueuse/head';
import App from './App.vue';

let routes = [
  {
    path: '/',
    name: 'TopShow',
    component: () => import('./components/Top/Show.vue'),
  },
  {
    path: '/calendar/:calendarMonth',
    name: 'CalendarShow',
    component: () => import('./components/Calendar/Show.vue'),
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

if (import.meta.env.DEV) {
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

const Vue = createApp(App)

Vue.use(createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
}));

Vue.use(createHead());

Vue.mount('#app');
