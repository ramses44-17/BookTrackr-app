import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '@/views/LandingPage.vue'
import UserLayout from '@/layouts/UserLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing page',
      component: LandingPage,
      
    },
    {
      path: '/',
      component:UserLayout,
      children:[
        {
          path: 'home', 
          name: 'home',
          component: () => import('@/views/Home.vue') 
        },
         {
          path: 'books',
          name: 'my books',
          component:  () => import('@/views/Books.vue')
        },
        {
          path: 'sessions',
          name: 'sessions',
          component:  () => import('@/views/Sessions.vue')
        },
        {
          path: 'groups/:id',
          name: 'group',
          component:  () => import('@/views/Group.vue')
        },
        {
          path: 'books/:id',
          name: 'book',
          component:  () => import('@/views/Book.vue')
        },
        {
          path: 'sessions/:id',
          name: 'session',
          component:  () => import('@/views/Session.vue')
        },
         {
          path: 'settings',
          name: 'settings',
          component:  () => import('@/views/Setting.vue')
        }
      ]
    }
  ]
})

export default router
