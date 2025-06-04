import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import AboutUs from '@/views/AboutUs.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', name: 'home', component: HomePage},
    {path: '/about-us', name: 'about', component: AboutUs},
  ],
})

export default router
