import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/usuarios',
    name: 'Usuarios',
    component: () => import('../views/Usuarios.vue')
  },
  {
    path: '/detalleUsuario/:id',
    name: 'DetalleUsuario',
    component: () => import('../views/detalleUsuario.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/contacto',
    name: 'Contactos',
    component: () => import('../views/Contactos.vue'),
    children: [
      {
        path: '/detalles2/:nombre',
        name: 'Detalles2',
        component: () => import('../views/Detalles2.vue')
      }
    ]
  },
  {
    path: '/detalles/:name',
    name: 'Detalles',
    component: () => import('../views/Detalles.vue')
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
