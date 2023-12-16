<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .5;
  position: absolute;
  width: 100%;
}

.v-application--wrap {
  min-height: 100vh;
  justify-content: center;
}
</style>


<template >
  <v-layout row wrap>
    <v-carousel cover cycle height="400" show-arrows-on-hover hide-delimiter-background class=" mx-auto ma-2 "
      delimiter-icon="mdi-minus">
      <v-carousel-item
        src="https://assetsio.reedpopcdn.com/souls-week-revisiting-dark-souls-3-the-dark-souls-3-of-dark-souls-1645011212983.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp"></v-carousel-item>

      <v-carousel-item
        src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2017/02/guia-todos-trucos-consejos-minecraft.jpg?tf=3840x"></v-carousel-item>

      <v-carousel-item
        src="https://image.api.playstation.com/vulcan/ap/rnd/202209/2121/PBiQRnOysNbFRzrZanE9l2vp.jpg"></v-carousel-item>
    </v-carousel>


    <v-container class="grey lighten-5 mb-6">
      <div class="mt-8 mb-5">
        <span class="h1"> Juegos competitivos </span>
      </div>
      <v-row>
        <v-col v-for="videojuego in videojuegosComp" :key="videojuego._id">
          <v-hover v-slot:default="{ hover }">
            <v-card class="mx-auto" color="grey lighten-4" v-bind:to="`/videojuegos/${videojuego._id}`">
              <v-img :aspect-ratio="4 / 5"
                src="https://sm.ign.com/ign_es/screenshot/default/skyrim-logo-6553-6831-hd-wallpapers_qq83.jpg">
                <v-expand-transition>
                  <div v-if="hover"
                    class="d-flex transition-fast-in-fast-out blue darken-2 v-card--reveal display-3 white--text"
                    style="height: 100%;"><span class="h6" font-weight-light>Desarrollado por: {{
                      videojuego.desarrollador }}</span>

                  </div>

                </v-expand-transition>
              </v-img>
              <v-card-text class="pt-6" style="position: relative;">


                <h3 class="display-1 font-weight-light blue--text mb-2">{{ videojuego.titulo }}</h3>
                <div class="font-weight-light title mb-2"> {{ videojuego.genero }}</div>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>

      </v-row>
      <div class="mt-8 mb-5">
        <span class="h1"> Juegos de deportes </span>

      </div>
      <v-row>
        <v-col v-for="videojuego in videojuegosDep" :key="videojuego._id">
          <v-hover v-slot:default="{ hover }">
            <v-card class="mx-auto" color="grey lighten-4" v-bind:to="`/videojuegos/${videojuego._id}`">
              <v-img :aspect-ratio="4 / 5"
                src="https://sm.ign.com/ign_es/screenshot/default/skyrim-logo-6553-6831-hd-wallpapers_qq83.jpg">
                <v-expand-transition>
                  <div v-if="hover"
                    class="d-flex transition-fast-in-fast-out blue darken-2 v-card--reveal display-3 white--text"
                    style="height: 100%;"><span class="h6" font-weight-light>Desarrollado por: {{
                      videojuego.desarrollador }}</span>

                  </div>

                </v-expand-transition>
              </v-img>
              <v-card-text class="pt-6" style="position: relative;">


                <h3 class="display-1 font-weight-light blue--text mb-2">{{ videojuego.titulo }}</h3>
                <div class="font-weight-light title mb-2"> {{ videojuego.genero }}</div>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>

      </v-row>
      <div class="mt-8 mb-5">
        <span class="h1"> Juegos de mundo abierto </span>

      </div>
      <v-row>
        <v-col v-for="videojuego in videojuegosMundo" :key="videojuego._id">
          <v-hover v-slot:default="{ hover }">
            <v-card class="mx-auto" color="grey lighten-4" v-bind:to="`/videojuegos/${videojuego._id}`">
              <v-img :aspect-ratio="4 / 5"
                src="https://sm.ign.com/ign_es/screenshot/default/skyrim-logo-6553-6831-hd-wallpapers_qq83.jpg">
                <v-expand-transition>
                  <div v-if="hover"
                    class="d-flex transition-fast-in-fast-out blue darken-2 v-card--reveal display-3 white--text"
                    style="height: 100%;"><span class="h6" font-weight-light>Desarrollado por: {{
                      videojuego.desarrollador }}</span>

                  </div>

                </v-expand-transition>
              </v-img>
              <v-card-text class="pt-6" style="position: relative;">


                <h3 class="display-1 font-weight-light blue--text mb-2">{{ videojuego.titulo }}</h3>
                <div class="font-weight-light title mb-2"> {{ videojuego.genero }}</div>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>

      </v-row>
    </v-container>

  </v-layout>
</template>

<script>
/* eslint-disable */
import axios from 'axios';
import '../assets/stylesheets/main.css';

export default {
  name: 'Inicio',
  data() {
    return {
      videojuegos: [],
      videojuegosComp: [],
      videojuegosDep: [],
      videojuegosMundo: [],
      generos: [],
    };
  },
  mounted() {
    const comp = 'Competitivos';
    const deportes = 'Deportes';
    const mundoAbierto = 'Mundo abierto';
    axios.get('http://localhost:8081/videojuegos')
      .then((response) => {
        console.log(response.data);
        this.videojuegos = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
    axios.get(`http://localhost:8081/videojuegos/genero/${comp}`)
      .then((response) => {
        console.log(response.data);
        this.videojuegosComp = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
    axios.get(`http://localhost:8081/videojuegos/genero/${deportes}`)
      .then((response) => {
        console.log(response.data);
        this.videojuegosDep = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
    axios.get(`http://localhost:8081/videojuegos/genero/${mundoAbierto}`)
      .then((response) => {
        console.log(response.data);
        this.videojuegosMundo = response.data;
      })
      .catch((error) => {
        console.log(error);
      });

  },
  methods: {
    async obtenerVideojuegos() {
      //  const token = window.localStorage.getItem('auth');
      return axios({
        method: 'get',
        url: 'http://localhost:8081/videojuegos',
        headers: {
          //  Authorization: `JWT ${token}`,
          'Çontent-Type': 'application/json',
        },
      })
        .then((respuesta) => {
          this.videojuegos = respuesta.data.videojuegos;
        })
        .catch(() => {

        });
    },
    async eliminarPelicula(_id) {
      return axios({
        method: 'delete',
        url: `http://localhost:8081/peliculas/${_id}`,
      })
        .then(() => {
          this.obtenerPeliculas();
        })
        .catch(() => {

        });
    },
    async eliminarPeliculas() {
      return axios({
        method: 'delete',
        url: 'http://localhost:8081/peliculas',
      })
        .then(() => {
          this.obtenerPeliculas();
        });
    },
  },
};
</script>
