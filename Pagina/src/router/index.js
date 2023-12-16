import Vue from 'vue';
import Router from 'vue-router';
import Inicio from '@/components/Inicio';
import Contacto from '@/components/Contacto';
import AgregarVideojuego from '@/components/AgregarVideojuego';
import EliminarVideojuego from '@/components/EliminarVideojuego';
import Videojuego from '@/components/Videojuego';
import Registro from '@/components/Registro';
import Login from '@/components/Login';
import AgregarGenero from '@/components/AgregarGenero';
import EliminarGenero from '@/components/EliminarGenero';
import VideojuegosCategoria from '@/components/VideojuegosCategoria';
import AgregarComentario from '@/components/AgregarComentario';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Inicio',
      component: Inicio,
    },
    {
      path: '/contacto',
      name: 'Contacto',
      component: Contacto,
    },
    {
      path: '/videojuegos/agregar',
      name: 'AgregarVideojuego',
      component: AgregarVideojuego,
    },
    {
      path: '/videojuegos/eliminar',
      name: 'EliminarVideojuego',
      component: EliminarVideojuego,
    },
    {
      path: '/videojuegos/:id',
      name: 'Videojuego',
      component: Videojuego,
    },
    {
      path: '/videojuegos/categoria/:genero',
      name: 'VideojuegosCategoria',
      component: VideojuegosCategoria,
    },
    {
      path: '/comentarios/:nombre_videojuego',
      name: 'AgregarComentario',
      component: AgregarComentario,
    },
    {
      path: '/generos/agregar',
      name: 'AgregarGenero',
      component: AgregarGenero,
    },
    {
      path: '/generos/eliminar',
      name: 'EliminarGenero',
      component: EliminarGenero,
    },
    {
      path: '/usuarios/registro',
      name: 'Registro',
      component: Registro,
    },
    {
      path: '/usuarios/login',
      name: 'Login',
      component: Login,
    },
  ],
});
