import Vue from 'vue'
import VueHead from 'vue-head';
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(VueHead);
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
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
  render: h => h(App),
}).$mount('#app')
