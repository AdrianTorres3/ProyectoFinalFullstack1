
<template>
  <v-container>
    <v-row>
      <v-col>
        <v-img :aspect-ratio="1 / 1" class="rounded-xl"
          src="https://sm.ign.com/ign_es/screenshot/default/skyrim-logo-6553-6831-hd-wallpapers_qq83.jpg"></v-img>
      </v-col>
      <v-col>
        <v-card elevation="15" class="rounded-xl">
          <v-card-title class="text-h3 mb-5">
             {{ videojuego.titulo }}
          </v-card-title>
          <v-card-subtitle class="text-left text h3">
            Género: {{videojuego.genero}}
          </v-card-subtitle>
          <v-card-subtitle class="text-left text h4 mt-n6">
            Fecha de lanzamiento: {{videojuego.lanzamiento}}
          </v-card-subtitle>
          <v-card-subtitle class="text-left text h4 mt-n6">
            Desarrollador: {{videojuego.desarrollador}}
          </v-card-subtitle>
          <v-card-subtitle class="text-left text h4 mt-n6">
            Precio: {{videojuego.precio}}
          </v-card-subtitle>
          <v-card-subtitle class="text-left text h4 mt-n6">
            Plataformas: ´{{ videojuego.plataformas }}
          </v-card-subtitle>
          <v-card-subtitle class="text-left text h4 mt-n6 mb-n2">
            Descripción:
          </v-card-subtitle>
          <v-card-text class="text-left">
           {{videojuego.descripcion}}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <!-- <v-layout row wrap>
      <v-flex xs4>
        <v-card>
          <v-card-title primary-title>
            <div>
              <div class="headline">{{ pelicula.nombre }}</div>
              <span class="grey--text">
                {{ pelicula.anhopub }} &middot; {{ pelicula.genero }}
              </span>
            </div>
          </v-card-title>
          <h6 class="card-title" v-if="current_user" @click="calificar">Calificar esta película</h6>
          <h6 class="card-title" @click="calificar">Calificar esta película</h6>
          <v-card-text>
            {{ pelicula.sinopsis }}
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout> -->
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
const self= this;
export default {
  name: 'Videojuego',
  data() {
    return {
      videojuego: [],
      
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
  },
  methods: {
    async calificar() {
      this.$swal({
        content: componente.$el,
        buttons: {
          confirm: {
            value: 0,
          },
        },
      })
        .then(() => {
          const peliculaId = this.$route.params.id;
          return axios({
            method: 'post',
            data: {
              calif: estado.nota,
            },
            url: `http://localhost:8081/peliculas/calif/${peliculaId}`,
            headers: {
              'Content-Type': 'application/json',
            },
          })
            .then(() => {
              this.$swal(`¡Gracias por calificar! ${estado.nota}`, 'success');
            })
            .catch((error) => {
              const mensaje = error.respuesta.data.message;
              this.$swal('Oh no puede ser!', `${mensaje}`, 'error');
            });
        });
    },
    async obtenerPelicula() {
      return axios({
        method: 'get',
        url: `http://localhost:8081/api/peliculas/${this.route.params.id}`,
      })
        .then((respuesta) => {
          this.pelicula = respuesta.data;
        })
        .catch(() => {

        });
    },
  },
};
</script>
