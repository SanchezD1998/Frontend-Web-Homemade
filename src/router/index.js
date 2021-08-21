import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home-chef',
    component: () => import('../components/home-chef')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/perfil',
    name: 'perfil-chef',
    component: () => import('../components/perfil-chef')
  },
  {
    path: '/hoomechef/edit',
    name: 'edit-perfil',
    component: () => import('../components/edit-perfil')
  },{
    path: '/homechef/menu',
    name: 'menu',
    component: () => import('../components/menu')
  },
  {
    path: '/hoomechef/menbresia',
    name: 'menbresia',
    component: () => import('../components/menbresia')
  },{
    path: '/hoomechef/menbresia/add',
    name: 'dato-menbresia',
    component: () => import('../components/dato-menbresia')
  },
  {
    path: '/homechef/recipe',
    name: 'recipe',
    component: () => import('../components/recipe')
  },
  {
    path: '/homechef/recipe/add',
    name: 'new-recipe',
    component: () => import('../components/create-recipe')
  },
  {
    path: '/homechef/search-receta',
    name: 'search-recipe',
    component:()=>import('../components/search-recipe')
  },
  {
    path: '/login',
    name:'login-form',
    component: () =>import('../components/login-form')
  },
  {
    path: '/register',
    name: 'register-form',
    component: () =>import('../components/register-form')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
