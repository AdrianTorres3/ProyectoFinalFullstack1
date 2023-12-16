<style>
.imagenMenu {
  width: 20%;
  height: 20%;

}

.tituloItems {
  color: black;
  font-size: larger;
}
</style>
<template>
  <v-app id="inspire">
    <template>
      <div>

        <v-toolbar prominent dark fixed style="height: fit-content;"
          src="https://www.bhmpics.com/downloads/gaming-wallpapers-/2.canva-purple-blue-neon-gaming-desktop-backgrounds-pwyzmwkptug.jpg">
          <v-slide-group class="ml-6 mt-7 py-5">
            <router-link v-bind:to="{ name: 'Inicio' }" class="side_bar_link">
              <v-toolbar-title class="mr-6 mt-3">
                <span class=" font-weight-light text-h4 white--text">BEST </span>
                <span class="font-weight-light text-h4 white--text">| Games</span>
              </v-toolbar-title>
            </router-link>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
              <v-menu open-on-hover offset-y v-for="genero in generos" :key="genero._id">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn color="transparent" depressed dark v-bind="attrs" v-on="on"
                    v-bind:to="`/videojuegos/categoria/${genero.nombre}`" @click="reloadPage">
                    {{ genero.nombre }}
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item v-for="videojuego in videojuegos" v-if="videojuego.genero == genero.nombre"
                    :key="videojuego._id" @click="reloadPage" style="width: 600px;">

                    <div class="mr-5 ">
                      <router-link style="text-decoration: none; margin-left: 0cm;"
                        v-bind:to="`/videojuegos/${videojuego._id}`">
                        <v-list-item-title class="tituloItems text-left"> <span class="text-h6 blue--text"> {{
                          videojuego.titulo }}</span></v-list-item-title>
                      </router-link>
                    </div>
                    <div class="mr-6">
                      <router-link style="text-decoration: none; color: black;"
                        v-bind:to="`/videojuegos/${videojuego._id}`">
                        <v-list-tile-content>
                          {{ videojuego.genero }}
                        </v-list-tile-content>
                      </router-link>
                    </div>
                    <div class="mr-n12">
                      <router-link style="text-decoration: none; margin-left: 0cm;"
                        v-bind:to="`/videojuegos/${videojuego._id}`">
                        <v-list-tile-avatar>
                          <img class="imagenMenu" :src="videojuego.imagen">
                        </v-list-tile-avatar>
                      </router-link>
                    </div>

                  </v-list-item>
                </v-list>
              </v-menu>

              <div>
                <router-link style="text-decoration: none; margin-left: 0cm;" v-bind:to="{ name: 'AgregarVideojuego' }">
                  <v-btn v-if="usuario != null" color="transparent" depressed class="mt-3">
                    <v-icon>mdi-plus</v-icon>
                    <span>Agregar videojuego</span>
                  </v-btn>
                  <v-btn v-else disabled color="transparent" depressed class="mt-3">
                    <v-icon>mdi-plus</v-icon>
                    <span>Agregar videojuego</span>
                  </v-btn>
                </router-link>
              </div>
              <div>
                <router-link style="text-decoration: none; margin-left: 0cm;" v-bind:to="{ name: 'AgregarGenero' }">
                  <v-btn v-if="usuario != null" color="transparent" depressed class="mt-3">
                    <v-icon>mdi-plus</v-icon>
                    <span>Agregar género</span>
                  </v-btn>
                  <v-btn v-else disabled color="transparent" depressed class="mt-3">
                    <v-icon>mdi-plus</v-icon>
                    <span>Agregar género</span>
                  </v-btn>
                </router-link>
              </div>

              <div>
                <router-link style="text-decoration: none; margin-left: 0cm;" v-bind:to="{ name: 'Login' }">
                  <v-btn color="transparent" depressed class="mt-3">
                    <v-icon>mdi-account</v-icon>
                    <span v-if="usuario != null">{{ usuario }}</span>
                    <span v-else> iniciar sesión </span>
                  </v-btn>
                </router-link>
              </div>
              <!-- <div>

                <v-btn color="transparent" depressed class="mt-3" v-if="usuario != null" @click="logout">
                  <v-icon>mdi-logout</v-icon>
                  <span>Cerrar sesión</span>
                </v-btn>
                <v-btn color="transparent" depressed class="mt-3" v-else hidden>

                </v-btn>

              </div> -->
              <div>
                <v-menu offset-y open-on-click>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn color="transparent" depressed class="mt-3" v-on="on" v-bind="attrs">
                      <v-icon>mdi-dots-vertical</v-icon>

                    </v-btn>
                  </template>
                  <v-list
                    style="background-image: url('https://www.bhmpics.com/downloads/gaming-wallpapers-/2.canva-purple-blue-neon-gaming-desktop-backgrounds-pwyzmwkptug.jpg');">
                    <router-link style="text-decoration: none;" v-bind:to="{ name: 'EliminarVideojuego' }">
                      <v-btn v-if="usuario != null" color="transparent" depressed>
                        <v-icon color="white">mdi-delete</v-icon>
                        <span class="white--text">Eliminar videojuegos</span>
                      </v-btn>
                      <v-btn v-else disbaled color="transparent" depressed>
                        <v-icon color="white">mdi-delete</v-icon>
                        <span class="white--text">Eliminar videojuegos</span>
                      </v-btn>
                    </router-link>

                    <router-link style="text-decoration: none; margin-left: 0cm;" v-bind:to="{ name: 'EliminarGenero' }">
                      <v-btn v-if="usuario != null" color="transparent" depressed class="">
                        <v-icon color="white">mdi-delete</v-icon>
                        <span class="white--text">Eliminar géneros</span>
                      </v-btn>
                      <v-btn v-else disabled color="transparent" depressed class="">
                        <v-icon color="white">mdi-delete</v-icon>
                        <span class="white--text">Eliminar géneros</span>
                      </v-btn>
                    </router-link>


                  </v-list>
                </v-menu>
                <router-link style="text-decoration: none; margin-left: 0cm;" v-bind:to="{ name: 'AgregarGenero' }">

                </router-link>
              </div>
              <v-spacer></v-spacer>
            </v-toolbar-items>
          </v-slide-group>


          <!-- segundo menu, por si la pantall es chica -->

          <v-toolbar-items class="hidden-md-and-up">

            <v-menu offset-y open-on-click>
              <template v-slot:activator="{ on, attrs }">
                <div>
                  <router-link style="text-decoration: none; margin-left: 0cm;" v-bind:to="{ name: 'Login' }">
                    <v-btn color="transparent" depressed class="mt-15 ml-n7">
                      <v-icon>mdi-account</v-icon>
                      <span v-if="usuario != null">{{ usuario }}</span>
                      <span v-else> iniciar sesión </span>
                    </v-btn>
                  </router-link>
                </div>
                <v-btn flat icon color="white" depressed dark v-bind="attrs" v-on="on" class="mt-3 ml-n6">
                  <v-icon>mdi-view-headline</v-icon>
                </v-btn>
              </template>
              <v-list
                style="background-image: url('https://www.bhmpics.com/downloads/gaming-wallpapers-/2.canva-purple-blue-neon-gaming-desktop-backgrounds-pwyzmwkptug.jpg');">
                <router-link style="text-decoration: none;" v-bind:to="{ name: 'AgregarVideojuego' }">
                  <v-btn v-if="usuario != null" color="transparent" depressed>
                    <v-icon color="white">mdi-plus</v-icon>
                    <span class="white--text">Agregar videojuego</span>
                  </v-btn>
                  <v-btn v-else disabled color="transparent" depressed>
                    <v-icon color="white">mdi-plus</v-icon>
                    <span class="white--text">Agregar videojuego</span>
                  </v-btn>
                </router-link>

                <router-link style="text-decoration: none; margin-left: 0cm;" v-bind:to="{ name: 'AgregarGenero' }">
                  <v-btn v-if="usuario != null" color="transparent" depressed class="mt-3">
                    <v-icon color="white">mdi-plus</v-icon>
                    <span class="white--text">Agregar género</span>
                  </v-btn>
                  <v-btn v-else diabled color="transparent" depressed class="mt-3">
                    <v-icon color="white">mdi-plus</v-icon>
                    <span class="white--text">Agregar género</span>
                  </v-btn>
                </router-link>

                <v-menu open-on-hover offset-y v-for="genero in generos" :key="genero._id">

                  <template v-slot:activator="{ on, attrs }">
                    <v-btn color="transparent" depressed dark v-bind="attrs, genero._id" v-on="on"
                      v-bind:to="`/videojuegos/categoria/${genero.nombre}`">
                      <span class="white--text">{{ genero.nombre }}</span>
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-item v-for="videojuego in videojuegos" v-if="videojuego.genero == genero.nombre"
                      :key="videojuego._id" @click="reloadPage">
                      <div class="mr-n16">
                        <router-link style="text-decoration: none; margin-left: 0cm;"
                          v-bind:to="`/videojuegos/${videojuego._id}`">
                          <v-list-tile-avatar>
                            <img class="imagenMenu" :src="videojuego.imagen">
                          </v-list-tile-avatar>
                        </router-link>
                      </div>
                      <div class="ml-n16 mr-6">
                        <router-link style="text-decoration: none; margin-left: 0cm;"
                          v-bind:to="`/videojuegos/${videojuego._id}`">
                          <v-list-item-title class="tituloItems text-left"> <span class="text-h6 blue--text"> {{
                            videojuego.titulo }}</span></v-list-item-title>
                        </router-link>
                      </div>

                      <router-link style="text-decoration: none; color: black;"
                        v-bind:to="`/videojuegos/${videojuego._id}`">
                        <v-list-tile-content>
                          {{ videojuego.genero }}
                        </v-list-tile-content>
                      </router-link>

                    </v-list-item>
                  </v-list>
                </v-menu>

              </v-list>
            </v-menu>
            <v-menu offset-y open-on-click>
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="transparent" depressed class="mt-3 ml-n6" v-on="on" v-bind="attrs">
                  <v-icon>mdi-dots-vertical</v-icon>

                </v-btn>
              </template>
              <v-list
                style="background-image: url('https://www.bhmpics.com/downloads/gaming-wallpapers-/2.canva-purple-blue-neon-gaming-desktop-backgrounds-pwyzmwkptug.jpg');">
                <router-link style="text-decoration: none;" v-bind:to="{ name: 'EliminarVideojuego' }">
                  <v-btn v-if="usuario != null" color="transparent" depressed>
                    <v-icon color="white">mdi-delete</v-icon>
                    <span class="white--text">Eliminar videojuegos</span>
                  </v-btn>
                  <v-btn v-else disabled color="transparent" depressed>
                    <v-icon color="white">mdi-delete</v-icon>
                    <span class="white--text">Eliminar videojuegos</span>
                  </v-btn>
                </router-link>

                <router-link style="text-decoration: none; margin-left: 0cm;" v-bind:to="{ name: 'EliminarGenero' }">
                  <v-btn v-if="usuario != null" color="transparent" depressed class="mt-3">
                    <v-icon color="white">mdi-delete</v-icon>
                    <span class="white--text">Eliminar géneros</span>
                  </v-btn>
                  <v-btn v-else disabled color="transparent" depressed class="mt-3">
                    <v-icon color="white">mdi-delete</v-icon>
                    <span class="white--text">Eliminar géneros</span>
                  </v-btn>
                </router-link>


              </v-list>
            </v-menu>
          </v-toolbar-items>

        </v-toolbar>


      </div>
    </template>


    <v-main>
      <v-container fluid>
        <div id="app">
          <router-view />
        </div>
      </v-container>
    </v-main>

    <v-footer dark app class="indigo darken-3"
      style="background-image: url('https://www.teahub.io/photos/full/234-2346901_wallpaper-background-solid-glare-light-color-double-colour.jpg');">

      <span class="white--text">&copy; 2023 | Best Games</span>
      <v-spacer></v-spacer>


      <v-btn class="mx-4 white--text" icon href="https://www.facebook.com/adrian.torresdealba" target="_blank">
        <v-icon size="24px">
          mdi-facebook
        </v-icon>
      </v-btn>
      <v-btn class="mx-4 white--text" icon href="https://www.instagram.com/adrian.tda/" target="_blank">
        <v-icon size="24px">
          mdi-instagram
        </v-icon>
      </v-btn>
      <v-btn class="mx-4 white--text" icon href="https://twitter.com/explore" target="_blank">
        <v-icon size="24px">
          mdi-twitter
        </v-icon>
      </v-btn>

      <router-link style="text-decoration: none; margin-left: 0cm;" v-bind:to="{ name: 'Contacto' }">
        <v-btn color="transparent" depressed class="white--text"> <span class="font-weight-light">Sobre nosotros</span>

        </v-btn>
      </router-link>
    </v-footer>

  </v-app>
</template>

<script>
/* eslint-disable */
import axios from 'axios';
//import '../assets/stylesheets/main.css';




const refreshPage = () => {
  location.reload();
};
export default {
  name: 'App',

  data() {
    return {
      usuario: window.localStorage.getItem('nombreUsuario'),
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
      generos: [],
      videojuegos: [],
    };
  },
  mounted() {
    axios.get(`http://localhost:8081/generos`)
      .then((response) => {
        console.log(response.data);
        this.generos = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
    axios.get('http://localhost:8081/videojuegos')
      .then((response) => {
        console.log(response.data);
        this.videojuegos = response.data;
      })
      .catch((error) => {
        console.log(error);
      });

  },
  methods: {
    reloadPage() {
      window.location.reload();
    },
    logout() {
      axios.post('http://localhost:8081/logout')

    }
  }
}
</script>
