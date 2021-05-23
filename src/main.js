import Vue from 'vue'
import VueHead from 'vue-head';
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(VueHead);
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Games',
      component: () => import('./components/Games/Games.vue'),
    },
    {
      path: '/actors',
      name: 'Actors',
      component: () => import('./components/Actors/Actors.vue'),
    },
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
