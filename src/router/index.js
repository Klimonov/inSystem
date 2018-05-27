import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import Start from '../components/Start.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/',
      name: 'Start',
      component: Start
    }
  ],
  mode: 'history'
})
