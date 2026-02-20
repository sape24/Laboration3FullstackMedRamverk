import { createRouter, createWebHistory } from 'vue-router'       //importerar vue router med funktioner samt de olika viewsen
import HomeView from '../views/homeView.vue'
import SubpageView from '../views/subpageView.vue'
import AboutView from '../views/aboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [                  //definierar applikationens routes med andra ord url sökväg och vilken view som ska visas
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
      name: 'about',
      component: AboutView
    }
  ],
})

export default router
