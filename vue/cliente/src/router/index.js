import { createRouter, createWebHistory } from 'vue-router'
import TareasApp from '../components/TareasApp.vue'
import CrearTarea from '../components/CrearTarea.vue'
import EditarTarea from '../components/EditarTarea.vue'
import UsersApp from '../components/UsersApp.vue'
import Login from "../views/Login.vue"
import Register from "../views/Register.vue"

const routes = [
  { path: '/',
    name: 'Tareas',
    component: TareasApp},

  { path: "/login", 
    name: 'Login',
    component: Login },

  { path: "/register",
    name: 'Register',
    component: Register},

  {path: '/ticket',
    name: 'Crear',
    component: CrearTarea},

  { path: '/ticket/:id',
    name: 'Editar',
    component: EditarTarea},

  { path: '/users',
    name: 'Usuarios',
    component: UsersApp}

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
