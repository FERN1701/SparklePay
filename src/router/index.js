import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import DashboardLayout from '../views/dashboards/Dashboardlayout.vue'
import Main from '../views/dashboards/Main.vue'
import Histories from '../views/dashboards/Histories.vue'
import Products from '../views/dashboards/Products.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
    },
    {
        path: '/dashboard',
        name: 'dashboardLayout',
        component: DashboardLayout,
      children: [
        {
          path: '',
          name: 'main',
          component: Main,
        },
        {
          path: 'histories',
          name: 'histories',
          component: Histories,
        },
        {
          path: 'products',
          name: 'products',
          component: Products,
        },
      ]
    }
  ],
})



export default router
