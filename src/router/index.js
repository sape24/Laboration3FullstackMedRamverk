import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/homeView.vue'
import SubpageView from '../views/subpageView.vue'
import AboutView from '../views/aboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/books',
      name: 'books',
      component: SubpageView
    },
    {
      path: '/about',
      name: 'name',
      component: AboutView
    }
  ],
})

export default router
