<template>
  <v-container grid-list-xs>

    <v-form v-model="valido" ref="formulario" lazy-validation>
      <v-text-field label="Nombre" v-model="nombre"></v-text-field>
      <v-text-field label="Contraseña" v-model="contrasenha" type="password" required></v-text-field>
      <v-btn @click="entrar" :disabled="!valido" class="purple lighten-2 white--text">Login</v-btn>
      <v-btn @click="limpar" class="purple darken-1 white--text">Limpiar</v-btn>
    </v-form>
    <v-container class="mt-10">
      <span class="font-weight-light"
        style="font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;">
        ¿No tienes cuenta?, registrate aqui: </span>
      <router-link style="text-decoration: none; color: black;" v-bind:to="{ name: 'Registro' }">
        <v-btn color="primary" class="font-weight-light "
          style="font-family: Arial, Helvetica, sans-serif;">Registrate</v-btn>
      </router-link>
    </v-container>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  data: () => ({
    valido: true,
    nombre: '',
    contrasenha: '',
    reglasEmail: [
      v => !!v || 'Email requerido',
      v => /\S+@\S+\.\S+/.test(v) || 'Email debe ser válido',
    ],
  }),
  methods: {
    entrar() {
      return axios({
        method: 'post',
        data: {
          nombre: this.nombre,
          contrasenha: this.contrasenha,
        },
        url: 'http://localhost:8081/usuarios/login',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((respuesta) => {
          window.localStorage.setItem('auth', respuesta.data.token);
          window.localStorage.setItem('nombreUsuario', respuesta.data.nombre);
          this.$swal('Has iniciado con exito', 'Redirigiendote...', 'success');
          this.$router.push({ name: 'Inicio' });
          window.location.reload();
        })
        .catch((error) => {
          const mensaje = error.respuesta.data.mensaje;
          this.$swal('Oh no!', `${mensaje}`, 'error');
          this.$router.push({ name: 'Login' });
        });
    },
    limpiar() {
      this.$refs.formulario.reset();
    },

  },
};
</script>
