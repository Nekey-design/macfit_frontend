import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '@/components/LandingPage.vue'
import Admin from '@/components/Admin.vue'
import Bundles from '@/components/Bundles.vue'
import GymLocations from '@/components/GymLocations.vue'
import HomePage from '@/components/HomePage.vue'
import Login from '@/components/Login.vue'
import SignUp from '@/components/SignUp.vue'
import Profile from '@/components/Profile.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
   path: '/',
    name: 'landingpage',
    component: LandingPage
   },

   {
    path: '/admin',
    name: 'admin',
    component: Admin,
   },

   {
    path: '/bundles',
    name: 'bundles',
    component: Bundles,
   },

   {
     path: '/gym_locations',
    name: 'gym_locations',
    component: GymLocations,
   },

   {
    path: '/homepage',
    name: 'homepage',
    component: HomePage,
   },

   
   {
    path: '/login',
    name: 'login',
    component: Login,
   },

   {
    path: '/profile',
    name: 'profile',
    component: Profile,
   },

   {
   path: '/signup',
    name: 'signup',
    component: SignUp,
   },

  ],
})

export default router