import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import MembersView from '@/views/MembersView.vue'


const router = createRouter({
  history: createWebHistory('/'),
//   linkActiveClass: 'is-active',
  routes: [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/clani',
        name: 'members',
        component: MembersView
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // Scroll to top on every navigation
    if (savedPosition) {
        return savedPosition; // This handles browser back/forward
    } else {
        return { top: 0 }; // Scroll to top of the page
    }
  }
})

export default router
