import { createRouter, createWebHistory } from 'vue-router'
import BooksView from '../views/BooksView.vue'
import StartView from '../views/StartView.vue'
import AboutView from '../views/AboutView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'start',
      component: StartView
    },
    {
      path: '/books',
      name: 'books',
      component: BooksView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    }
  ]
  
})

export default router
