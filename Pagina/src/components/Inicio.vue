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
<!-- <template>
  <v-layout row wrap>
    <v-flex xs12>
      <div>{{ mensaje }}</div>
    </v-flex>
    <v-flex xs12>
      <v-btn color="primary" v-on:click="responder">Responder</v-btn>
    </v-flex>
  </v-layout>
</template>
<script type="text/javascript">
export default {
  data() {
    return {
      mensaje: 'Hola, ¿Cómo  te va hoy?',
    };
  },
  methods: {
    responder() {
      this.mensaje = 'Me va muy bien, Gracias!';
    },
  },
};
</script> -->
<!-- <template>
  <v-layout row wrap>
    <v-flex xs4>
      <v-card>
        <v-card-title primary-title>
          <div>
            <div class="headline">Batman vs Superman</div>
            <span class="gery-text">2016 &middot; Ciencia Ficción / Acción &middot; 3h 3m</span>
          </div>
        </v-card-title>
        <v-card-text>
          Batman v Superman: Dawn of Justice (titulada Batman v Superman:
          El amanecer de la justicia en España y Batman vs Superman: El origen
          de la justicia en Hispanoamérica) es una película estadounidense de superhéroes
          estrenada en 2016. Es la segunda entrega del Universo Extendido de DC (DCEU) y
          una secuela de Man of Steel (2013), además de la primera película de acción real
          que presenta a Batman y Superman juntos.
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text color="purple">Calificar esta película</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-flex>
    <v-flex xs4>
      <v-card>
        <v-card-title primary-title>
          <div>
            <div class="headline">La naranja mecánica</div>
            <span class="gery-text">1967 &middot; Drama / Acción &middot; 3h 3m</span>
          </div>
        </v-card-title>
        <v-card-text>
          Alex es un joven muy agresivo que tiene dos pasiones:
          la violencia desaforada y Beethoven. Es el jefe de la
          banda de los drugos, que dan rienda suelta a sus instintos
          más salvajes aterrorizando a la población.
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text color="purple">Calificar esta película</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-flex>
    <v-flex xs4>
      <v-card>
        <v-card-title primary-title>
          <div>
            <div class="headline">Amélie</div>
            <span class="gery-text">2001 &middot; Comedia &middot; 2h 2m</span>
          </div>
        </v-card-title>
        <v-card-text>
          Alex es un joven muy agresivo que tiene dos pasiones:
          la violencia desaforada y Beethoven. Es el jefe de la
          banda de los drugos, que dan rienda suelta a sus instintos
          más salvajes aterrorizando a la población.
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text color="purple">Calificar esta película</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-flex>
    <v-flex xs4>
      <v-card>
        <v-card-title primary-title>
          <div>
            <div class="headline">Vértigo (De entre los muertos)</div>
            <span class="gery-text">1958 &middot; Supenso &middot; 2h 8m</span>
          </div>
        </v-card-title>
        <v-card-text>
          Batman v Superman: Dawn of Justice (titulada Batman v Superman:
          El amanecer de la justicia en España y Batman vs Superman: El origen
          de la justicia en Hispanoamérica) es una película estadounidense de superhéroes
          estrenada en 2016. Es la segunda entrega del Universo Extendido de DC (DCEU) y
          una secuela de Man of Steel (2013), además de la primera película de acción real
          que presenta a Batman y Superman juntos.
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text color="purple">Calificar esta película</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-flex>
    <v-flex xs4>
      <v-card>
        <v-card-title primary-title>
          <div>
            <div class="headline">Con la muerte en los talones</div>
            <span class="gery-text">1959 &middot; Suspenso &middot; 2h 16m</span>
          </div>
        </v-card-title>
        <v-card-text>
          Alex es un joven muy agresivo que tiene dos pasiones:
          la violencia desaforada y Beethoven. Es el jefe de la
          banda de los drugos, que dan rienda suelta a sus instintos
          más salvajes aterrorizando a la población.
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text color="purple">Calificar esta película</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-flex>
    <v-flex xs4>
      <v-card>
        <v-card-title primary-title>
          <div>
            <div class="headline">Cafarnaúm</div>
            <span class="gery-text">2018 &middot; Suspenso &middot; 2h 2m</span>
          </div>
        </v-card-title>
        <v-card-text>
          Alex es un joven muy agresivo que tiene dos pasiones:
          la violencia desaforada y Beethoven. Es el jefe de la
          banda de los drugos, que dan rienda suelta a sus instintos
          más salvajes aterrorizando a la población.
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text color="purple">Calificar esta película</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template> -->

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

    <!-- <v-flex xs4 v-for="pelicula in peliculas" :key="pelicula._id"> -->
    <!-- <v-card>
        <v-card-title primary-title>
          <div>
            <div class="headline">
              <v-btn v-bind:to="`/peliculas/${pelicula._id}`">
                {{ pelicula.nombre }}
              </v-btn>
            </div>
            <span class="gray--text">{{ pelicula.anhopub }} &middot; {{ pelicula.genero }}</span>
          </div>
        </v-card-title>
        <v-card-text>
          {{ pelicula.sinopsis }}
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text color="purple">Calificar esta película</v-btn>
          <v-btn @click="eliminarPelicula(pelicula._id)" text color="red">Borrar</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-flex>
    <v-btn @click="eliminarPeliculas()" text color="red">Borrar todo</v-btn> -->
    <v-container class="grey lighten-5 mb-6">
      <div class="mt-8 mb-5">
        <span class="h1"> Juegos competitivos </span>
      </div>
      <v-row>
        <v-col v-for="videojuego in videojuegos" :key="videojuego._id">
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
        <v-col v-for="videojuego in videojuegos" :key="videojuego._id">
          <v-hover v-slot:default="{ hover }">
            <v-card class="mx-auto" color="grey lighten-4">
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
        <v-col v-for="videojuego in videojuegos" :key="videojuego._id">
          <v-hover v-slot:default="{ hover }">
            <v-card class="mx-auto" color="grey lighten-4">
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
    };
  },
  mounted() {
    const comp = 'Competitivos';
    axios.get('http://localhost:8081/videojuegos')
      .then((response) => {
        console.log(response.data);
        this.videojuegos = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
      // axios.get(`http://localhost:8081/videojuegos/${comp}`)
      // .then((response) => {
      //   console.log(response.data);
      //   this.videojuegosComp = response.data;
      // })
      // .catch((error) => {
      //   console.log(error);
      // });
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
