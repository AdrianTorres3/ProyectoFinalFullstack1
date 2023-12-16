
<template>
  <v-container>
    <v-row>
      <v-col>
        <v-img :aspect-ratio="1 / 1" class="rounded-xl" :src="videojuego.imagen"></v-img>
      </v-col>
      <v-col>
        <v-card elevation="15" class="rounded-xl">
          <v-card-title class="text-h3 mb-5">
            {{ videojuego.titulo }}
          </v-card-title>
          <v-card-subtitle class="text-left text h3">
            Género: {{ videojuego.genero }}
          </v-card-subtitle>
          <v-card-subtitle class="text-left text h4 mt-n6">
            Fecha de lanzamiento: {{ videojuego.lanzamiento }}
          </v-card-subtitle>
          <v-card-subtitle class="text-left text h4 mt-n6">
            Desarrollador: {{ videojuego.desarrollador }}
          </v-card-subtitle>
          <v-card-subtitle class="text-left text h4 mt-n6">
            Precio: {{ videojuego.precio }}
          </v-card-subtitle>
          <v-card-subtitle class="text-left text h4 mt-n6">
            Plataformas: {{ videojuego.plataformas }}
          </v-card-subtitle>
          <v-card-subtitle class="text-left text h4 mt-n6 mb-n2">
            Descripción:
          </v-card-subtitle>
          <v-card-text class="text-left">
            {{ videojuego.descripcion }}
          </v-card-text>
        </v-card>
      </v-col>
      <h2>Reseñas</h2>
      <v-card v-for="resena in resenas" v-if="resena.nombre_videojuego == videojuego.titulo" :key="resena._id">
        <v-card-title>
          <span class="text-h4 text-uppercase">usuario: {{ resena.nombre_usuario }}</span>
        </v-card-title>
        <v-card-subtitle class="text h4 text-left mt-4">{{ resena.nombre_videojuego }}</v-card-subtitle>
        <v-card-text class="text-left">
          {{ resena.comentario }}
        </v-card-text>
        <v-card-text>

        </v-card-text>
      </v-card>
    </v-row>

    <v-btn class="mt-10" color="primary" v-bind:to="`/comentarios/${videojuego.titulo}`">Agregar comentario</v-btn>
  </v-container>
</template>

<script>
/* eslint-disable */

import axios from 'axios';
import Vue from 'vue';
import StarRating from 'vue-star-rating';

const wrapper = document.createElement('div');
// estado compartido
const estado = {
  nota: 0,
};
// crear componente en contenido
const ComponenteCalif = Vue.extend({
  data() {

    return {
      usuario: window.localStorage.getItem('nombreUsuario'),
      calif: 0,
    };
  },
  watch: {
    calif(nuevoValor) {
      estado.nota = nuevoValor;
    },
  },
  template: `
    <div class="rating">
      ¿Cuál fue su expriencia viendo esta película?
      <star-rating v-model="calif" :show-rating="false"></star-rating>
    </div>   
  `,
  components: {
    'star-rating': StarRating,
  },
});

const componente = new ComponenteCalif().$mount(wrapper);
const self = this;
export default {
  name: 'Videojuego',
  data() {
    return {
      videojuego: [],
      resenas: [],

    };
  },
  mounted() {

    axios.get(`http://localhost:8081/videojuegos/${this.$route.params.id}`)
      .then((response) => {
        console.log(response.data);
        this.videojuego = response.data;

      })
      .catch((error) => {
        console.log(error);
      });

    axios.get(`http://localhost:8081/comentarios`)
      .then((response) => {
        console.log(response.data);
        this.resenas = response.data;

      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {


  },
};
</script>
