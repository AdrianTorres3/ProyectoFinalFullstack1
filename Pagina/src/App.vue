<style>
.imagenMenu {
  width: 40%;
  height: 40%;
  margin-right: 0cm;
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
              <v-menu open-on-hover offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn color="transparent" depressed dark v-bind="attrs" v-on="on">
                    ARPG
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item v-for="(item, index) in items" :key="index">
                    <div class="mr-n16">
                      <router-link style="text-decoration: none; margin-left: 0cm;" v-bind:to="{ name: 'Pelicula' }">
                        <v-list-tile-avatar>
                          <img class="imagenMenu" src="https://cdn.vuetifyjs.com/images/john.png">
                        </v-list-tile-avatar>
                      </router-link>
                    </div>
                    <div class="ml-n16 mr-6">
                      <router-link style="text-decoration: none; margin-left: 0cm;" v-bind:to="{ name: 'Pelicula' }">
                        <v-list-item-title class="tituloItems">{{ item.title }}</v-list-item-title>
                      </router-link>
                    </div>

                    <router-link style="text-decoration: none; color: black;" v-bind:to="{ name: 'Pelicula' }">
                      <v-list-tile-content>
                        hodsadlalsdlsaldsa
                      </v-list-tile-content>
                    </router-link>

                  </v-list-item>
                </v-list>
              </v-menu>
              <v-menu open-on-hover offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn color="transparent" depressed dark v-bind="attrs" v-on="on">
                    Mundo abierto
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item v-for="(item, index) in items" :key="index">
                    <div class="mr-n16">
                      <router-link style="text-decoration: none; margin-left: 0cm;" v-bind:to="{ name: 'Pelicula' }">
                        <v-list-tile-avatar>
                          <img class="imagenMenu" src="https://cdn.vuetifyjs.com/images/john.png">
                        </v-list-tile-avatar>
                      </router-link>
                    </div>
                    <div class="ml-n16 mr-6">
                      <router-link style="text-decoration: none; margin-left: 0cm;" v-bind:to="{ name: 'Pelicula' }">
                        <v-list-item-title class="tituloItems">{{ item.title }}</v-list-item-title>
                      </router-link>
                    </div>
                    <v-spacer></v-spacer>
                    <router-link style="text-decoration: none; color: black;" v-bind:to="{ name: 'Pelicula' }">
                      <v-list-tile-content>
                        hodsadlalsdlsaldsa
                      </v-list-tile-content>
                    </router-link>

                  </v-list-item>
                </v-list>
              </v-menu>
              <v-menu open-on-hover offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn color="transparent" depressed dark v-bind="attrs" v-on="on">
                    SandBox
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item v-for="(item, index) in items" :key="index">
                    <div class="mr-n16">
                      <router-link style="text-decoration: none; margin-left: 0cm;" v-bind:to="{ name: 'Pelicula' }">
                        <v-list-tile-avatar>
                          <img class="imagenMenu" src="https://cdn.vuetifyjs.com/images/john.png">
                        </v-list-tile-avatar>
                      </router-link>
                    </div>
                    <div class="ml-n16 mr-6">
                      <router-link style="text-decoration: none; margin-left: 0cm;" v-bind:to="{ name: 'Pelicula' }">
                        <v-list-item-title class="tituloItems">{{ item.title }}</v-list-item-title>
                      </router-link>
                    </div>
                    <v-spacer></v-spacer>
                    <router-link style="text-decoration: none; color: black;" v-bind:to="{ name: 'Pelicula' }">
                      <v-list-tile-content>
                        hodsadlalsdlsaldsa
                      </v-list-tile-content>
                    </router-link>

                  </v-list-item>
                </v-list>
              </v-menu>
              <v-menu open-on-hover offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn color="transparent" depressed dark v-bind="attrs" v-on="on">
                    Deportes
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item v-for="(item, index) in items" :key="index">
                    <div class="mr-n16">
                      <router-link style="text-decoration: none; margin-left: 0cm;" v-bind:to="{ name: 'Pelicula' }">
                        <v-list-tile-avatar>
                          <img class="imagenMenu" src="https://cdn.vuetifyjs.com/images/john.png">
                        </v-list-tile-avatar>
                      </router-link>
                    </div>
                    <div class="ml-n16 mr-6">
                      <router-link style="text-decoration: none; margin-left: 0cm;" v-bind:to="{ name: 'Pelicula' }">
                        <v-list-item-title class="tituloItems">{{ item.title }}</v-list-item-title>
                      </router-link>
                    </div>
                    <v-spacer></v-spacer>
                    <router-link style="text-decoration: none; color: black;" v-bind:to="{ name: 'Pelicula' }">
                      <v-list-tile-content>
                        hodsadlalsdlsaldsa
                      </v-list-tile-content>
                    </router-link>

                  </v-list-item>
                </v-list>
              </v-menu>
              <v-menu open-on-hover offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn color="transparent" depressed dark v-bind="attrs" v-on="on">
                    Peleas
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item v-for="(item, index) in items" :key="index">
                    <div class="mr-n16">
                      <router-link style="text-decoration: none; margin-left: 0cm;" v-bind:to="{ name: 'Pelicula' }">
                        <v-list-tile-avatar>
                          <img class="imagenMenu" src="https://cdn.vuetifyjs.com/images/john.png">
                        </v-list-tile-avatar>
                      </router-link>
                    </div>
                    <div class="ml-n16 mr-6">
                      <router-link style="text-decoration: none; margin-left: 0cm;" v-bind:to="{ name: 'Pelicula' }">
                        <v-list-item-title class="tituloItems">{{ item.title }}</v-list-item-title>
                      </router-link>
                    </div>
                    <v-spacer></v-spacer>
                    <router-link style="text-decoration: none; color: black;" v-bind:to="{ name: 'Pelicula' }">
                      <v-list-tile-content>
                        hodsadlalsdlsaldsa
                      </v-list-tile-content>
                    </router-link>

                  </v-list-item>
                </v-list>
              </v-menu>
              <v-menu open-on-hover offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn color="transparent" depressed dark v-bind="attrs" v-on="on">
                    Peleas
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item v-for="(item, index) in items" :key="index">
                    <div class="mr-n16">
                      <router-link style="text-decoration: none; margin-left: 0cm;" v-bind:to="{ name: 'Pelicula' }">
                        <v-list-tile-avatar>
                          <img class="imagenMenu" src="https://cdn.vuetifyjs.com/images/john.png">
                        </v-list-tile-avatar>
                      </router-link>
                    </div>
                    <div class="ml-n16 mr-6">
                      <router-link style="text-decoration: none; margin-left: 0cm;" v-bind:to="{ name: 'Pelicula' }">
                        <v-list-item-title class="tituloItems">{{ item.title }}</v-list-item-title>
                      </router-link>
                    </div>
                    <v-spacer></v-spacer>
                    <router-link style="text-decoration: none; color: black;" v-bind:to="{ name: 'Pelicula' }">
                      <v-list-tile-content>
                        hodsadlalsdlsaldsa
                      </v-list-tile-content>
                    </router-link>

                  </v-list-item>
                </v-list>
              </v-menu>
              <v-menu open-on-hover offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn color="transparent" depressed dark v-bind="attrs" v-on="on">
                    Peleas
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item v-for="(item, index) in items" :key="index">
                    <div class="mr-n16">
                      <router-link style="text-decoration: none; margin-left: 0cm;" v-bind:to="{ name: 'Pelicula' }">
                        <v-list-tile-avatar>
                          <img class="imagenMenu" src="https://cdn.vuetifyjs.com/images/john.png">
                        </v-list-tile-avatar>
                      </router-link>
                    </div>
                    <div class="ml-n16 mr-6">
                      <router-link style="text-decoration: none; margin-left: 0cm;" v-bind:to="{ name: 'Pelicula' }">
                        <v-list-item-title class="tituloItems">{{ item.title }}</v-list-item-title>
                      </router-link>
                    </div>
                    <v-spacer></v-spacer>
                    <router-link style="text-decoration: none; color: black;" v-bind:to="{ name: 'Pelicula' }">
                      <v-list-tile-content>
                        hodsadlalsdlsaldsa
                      </v-list-tile-content>
                    </router-link>

                  </v-list-item>
                </v-list>
              </v-menu>
              <v-menu open-on-hover offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn color="transparent" depressed dark v-bind="attrs" v-on="on">
                    Peleas
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item v-for="(item, index) in items" :key="index">
                    <div class="mr-n16">
                      <router-link style="text-decoration: none; margin-left: 0cm;" v-bind:to="{ name: 'Pelicula' }">
                        <v-list-tile-avatar>
                          <img class="imagenMenu" src="https://cdn.vuetifyjs.com/images/john.png">
                        </v-list-tile-avatar>
                      </router-link>
                    </div>
                    <div class="ml-n16 mr-6">
                      <router-link style="text-decoration: none; margin-left: 0cm;" v-bind:to="{ name: 'Pelicula' }">
                        <v-list-item-title class="tituloItems">{{ item.title }}</v-list-item-title>
                      </router-link>
                    </div>
                    <v-spacer></v-spacer>
                    <router-link style="text-decoration: none; color: black;" v-bind:to="{ name: 'Pelicula' }">
                      <v-list-tile-content>
                        hodsadlalsdlsaldsa
                      </v-list-tile-content>
                    </router-link>

                  </v-list-item>
                </v-list>
              </v-menu>
              <v-menu open-on-hover offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn color="transparent" depressed dark v-bind="attrs" v-on="on">
                    Peleas
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item v-for="(item, index) in items" :key="index">
                    <div class="mr-n16">
                      <router-link style="text-decoration: none; margin-left: 0cm;" v-bind:to="{ name: 'Pelicula' }">
                        <v-list-tile-avatar>
                          <img class="imagenMenu" src="https://cdn.vuetifyjs.com/images/john.png">
                        </v-list-tile-avatar>
                      </router-link>
                    </div>
                    <div class="ml-n16 mr-6">
                      <router-link style="text-decoration: none; margin-left: 0cm;" v-bind:to="{ name: 'Pelicula' }">
                        <v-list-item-title class="tituloItems">{{ item.title }}</v-list-item-title>
                      </router-link>
                    </div>
                    <v-spacer></v-spacer>
                    <router-link style="text-decoration: none; color: black;" v-bind:to="{ name: 'Pelicula' }">
                      <v-list-tile-content>
                        hodsadlalsdlsaldsa
                      </v-list-tile-content>
                    </router-link>

                  </v-list-item>
                </v-list>
              </v-menu>
              <v-menu open-on-hover offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn color="transparent" depressed dark v-bind="attrs" v-on="on">
                    Peleas
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item v-for="(item, index) in items" :key="index">
                    <div class="mr-n16">
                      <router-link style="text-decoration: none; margin-left: 0cm;" v-bind:to="{ name: 'Pelicula' }">
                        <v-list-tile-avatar>
                          <img class="imagenMenu" src="https://cdn.vuetifyjs.com/images/john.png">
                        </v-list-tile-avatar>
                      </router-link>
                    </div>
                    <div class="ml-n16 mr-6">
                      <router-link style="text-decoration: none; margin-left: 0cm;" v-bind:to="{ name: 'Pelicula' }">
                        <v-list-item-title class="tituloItems">{{ item.title }}</v-list-item-title>
                      </router-link>
                    </div>
                    <v-spacer></v-spacer>
                    <router-link style="text-decoration: none; color: black;" v-bind:to="{ name: 'Pelicula' }">
                      <v-list-tile-content>
                        hodsadlalsdlsaldsa
                      </v-list-tile-content>
                    </router-link>

                  </v-list-item>
                </v-list>
              </v-menu>
              <v-menu open-on-hover offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn color="transparent" depressed dark v-bind="attrs" v-on="on">
                    Peleas
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item v-for="(item, index) in items" :key="index">
                    <div class="mr-n16">
                      <router-link style="text-decoration: none; margin-left: 0cm;" v-bind:to="{ name: 'Pelicula' }">
                        <v-list-tile-avatar>
                          <img class="imagenMenu" src="https://cdn.vuetifyjs.com/images/john.png">
                        </v-list-tile-avatar>
                      </router-link>
                    </div>
                    <div class="ml-n16 mr-6">
                      <router-link style="text-decoration: none; margin-left: 0cm;" v-bind:to="{ name: 'Pelicula' }">
                        <v-list-item-title class="tituloItems">{{ item.title }}</v-list-item-title>
                      </router-link>
                    </div>
                    <v-spacer></v-spacer>
                    <router-link style="text-decoration: none; color: black;" v-bind:to="{ name: 'Pelicula' }">
                      <v-list-tile-content>
                        hodsadlalsdlsaldsa
                      </v-list-tile-content>
                    </router-link>

                  </v-list-item>
                </v-list>
              </v-menu>
              <v-menu open-on-hover offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn color="transparent" depressed dark v-bind="attrs" v-on="on">
                    Peleas
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item v-for="(item, index) in items" :key="index">
                    <div class="mr-n16">
                      <router-link style="text-decoration: none; margin-left: 0cm;" v-bind:to="{ name: 'Pelicula' }">
                        <v-list-tile-avatar>
                          <img class="imagenMenu" src="https://cdn.vuetifyjs.com/images/john.png">
                        </v-list-tile-avatar>
                      </router-link>
                    </div>
                    <div class="ml-n16 mr-6">
                      <router-link style="text-decoration: none; margin-left: 0cm;" v-bind:to="{ name: 'Pelicula' }">
                        <v-list-item-title class="tituloItems">{{ item.title }}</v-list-item-title>
                      </router-link>
                    </div>
                    <v-spacer></v-spacer>
                    <router-link style="text-decoration: none; color: black;" v-bind:to="{ name: 'Pelicula' }">
                      <v-list-tile-content>
                        hodsadlalsdlsaldsa
                      </v-list-tile-content>
                    </router-link>

                  </v-list-item>
                </v-list>
              </v-menu>
              <v-menu open-on-hover offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn color="transparent" depressed dark v-bind="attrs" v-on="on">
                    Peleas
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item v-for="(item, index) in items" :key="index">
                    <div class="mr-n16">
                      <router-link style="text-decoration: none; margin-left: 0cm;" v-bind:to="{ name: 'Pelicula' }">
                        <v-list-tile-avatar>
                          <img class="imagenMenu" src="https://cdn.vuetifyjs.com/images/john.png">
                        </v-list-tile-avatar>
                      </router-link>
                    </div>
                    <div class="ml-n16 mr-6">
                      <router-link style="text-decoration: none; margin-left: 0cm;" v-bind:to="{ name: 'Pelicula' }">
                        <v-list-item-title class="tituloItems">{{ item.title }}</v-list-item-title>
                      </router-link>
                    </div>
                    <v-spacer></v-spacer>
                    <router-link style="text-decoration: none; color: black;" v-bind:to="{ name: 'Pelicula' }">
                      <v-list-tile-content>
                        hodsadlalsdlsaldsa
                      </v-list-tile-content>
                    </router-link>

                  </v-list-item>
                </v-list>
              </v-menu>
              <v-menu open-on-hover offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn color="transparent" depressed dark v-bind="attrs" v-on="on">
                    Peleas
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item v-for="(item, index) in items" :key="index">
                    <div class="mr-n16">
                      <router-link style="text-decoration: none; margin-left: 0cm;" v-bind:to="{ name: 'Pelicula' }">
                        <v-list-tile-avatar>
                          <img class="imagenMenu" src="https://cdn.vuetifyjs.com/images/john.png">
                        </v-list-tile-avatar>
                      </router-link>
                    </div>
                    <div class="ml-n16 mr-6">
                      <router-link style="text-decoration: none; margin-left: 0cm;" v-bind:to="{ name: 'Pelicula' }">
                        <v-list-item-title class="tituloItems">{{ item.title }}</v-list-item-title>
                      </router-link>
                    </div>
                    <v-spacer></v-spacer>
                    <router-link style="text-decoration: none; color: black;" v-bind:to="{ name: 'Pelicula' }">
                      <v-list-tile-content>
                        hodsadlalsdlsaldsa
                      </v-list-tile-content>
                    </router-link>

                  </v-list-item>
                </v-list>
              </v-menu>
              <v-menu open-on-hover offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn color="transparent" depressed dark v-bind="attrs" v-on="on">
                    Peleas
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item v-for="(item, index) in items" :key="index">
                    <div class="mr-n16">
                      <router-link style="text-decoration: none; margin-left: 0cm;" v-bind:to="{ name: 'Pelicula' }">
                        <v-list-tile-avatar>
                          <img class="imagenMenu" src="https://cdn.vuetifyjs.com/images/john.png">
                        </v-list-tile-avatar>
                      </router-link>
                    </div>
                    <div class="ml-n16 mr-6">
                      <router-link style="text-decoration: none; margin-left: 0cm;" v-bind:to="{ name: 'Pelicula' }">
                        <v-list-item-title class="tituloItems">{{ item.title }}</v-list-item-title>
                      </router-link>
                    </div>
                    <v-spacer></v-spacer>
                    <router-link style="text-decoration: none; color: black;" v-bind:to="{ name: 'Pelicula' }">
                      <v-list-tile-content>
                        hodsadlalsdlsaldsa
                      </v-list-tile-content>
                    </router-link>

                  </v-list-item>
                </v-list>
              </v-menu>
              <v-menu open-on-hover offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn color="transparent" depressed dark v-bind="attrs" v-on="on">
                    Peleas
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item v-for="(item, index) in items" :key="index">
                    <div class="mr-n16">
                      <router-link style="text-decoration: none; margin-left: 0cm;" v-bind:to="{ name: 'Pelicula' }">
                        <v-list-tile-avatar>
                          <img class="imagenMenu" src="https://cdn.vuetifyjs.com/images/john.png">
                        </v-list-tile-avatar>
                      </router-link>
                    </div>
                    <div class="ml-n16 mr-6">
                      <router-link style="text-decoration: none; margin-left: 0cm;" v-bind:to="{ name: 'Pelicula' }">
                        <v-list-item-title class="tituloItems">{{ item.title }}</v-list-item-title>
                      </router-link>
                    </div>
                    <v-spacer></v-spacer>
                    <router-link style="text-decoration: none; color: black;" v-bind:to="{ name: 'Pelicula' }">
                      <v-list-tile-content>
                        hodsadlalsdlsaldsa
                      </v-list-tile-content>
                    </router-link>

                  </v-list-item>
                </v-list>
              </v-menu>
              <v-menu open-on-hover offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn color="transparent" depressed dark v-bind="attrs" v-on="on">
                    Peleas
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item v-for="(item, index) in items" :key="index">
                    <div class="mr-n16">
                      <router-link style="text-decoration: none; margin-left: 0cm;" v-bind:to="{ name: 'Pelicula' }">
                        <v-list-tile-avatar>
                          <img class="imagenMenu" src="https://cdn.vuetifyjs.com/images/john.png">
                        </v-list-tile-avatar>
                      </router-link>
                    </div>
                    <div class="ml-n16 mr-6">
                      <router-link style="text-decoration: none; margin-left: 0cm;" v-bind:to="{ name: 'Pelicula' }">
                        <v-list-item-title class="tituloItems">{{ item.title }}</v-list-item-title>
                      </router-link>
                    </div>
                    <v-spacer></v-spacer>
                    <router-link style="text-decoration: none; color: black;" v-bind:to="{ name: 'Pelicula' }">
                      <v-list-tile-content>
                        hodsadlalsdlsaldsa
                      </v-list-tile-content>
                    </router-link>

                  </v-list-item>
                </v-list>
              </v-menu>
              <div>
                <router-link style="text-decoration: none; margin-left: 0cm;" v-bind:to="{ name: 'AgregarVideojuego' }">
                  <v-btn color="transparent" depressed class="mt-3">
                    <v-icon>mdi-plus</v-icon>
                    <span>Agregar videojuego</span>
                  </v-btn>
                </router-link>
              </div>
              <div>
                <router-link style="text-decoration: none; margin-left: 0cm;" v-bind:to="{ name: 'Login' }">
                  <v-btn color="transparent" depressed class="mt-3">
                    <v-icon>mdi-account</v-icon>
                    <span>iniciar sesion</span>
                  </v-btn>
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
                    <v-btn color="transparent" depressed class="mt-11">
                      <v-icon>mdi-account</v-icon>
                      <span>iniciar sesion</span>
                    </v-btn>
                  </router-link>
                </div>
                <v-btn flat icon color="white" depressed dark v-bind="attrs" v-on="on">
                  <v-icon>mdi-view-headline</v-icon>
                </v-btn>
              </template>
              <v-list
                style="background-image: url('https://www.bhmpics.com/downloads/gaming-wallpapers-/2.canva-purple-blue-neon-gaming-desktop-backgrounds-pwyzmwkptug.jpg');">
                <v-menu open-on-hover offset-y>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn color="transparent" depressed dark v-bind="attrs" v-on="on">
                      ARPG
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-item v-for="(item, index) in items" :key="index">
                      <div class="mr-n16">
                        <router-link style="text-decoration: none; margin-left: 0cm;" v-bind:to="{ name: 'Pelicula' }">
                          <v-list-tile-avatar>
                            <img class="imagenMenu" src="https://cdn.vuetifyjs.com/images/john.png">
                          </v-list-tile-avatar>
                        </router-link>
                      </div>
                      <div class="ml-n16 mr-6">
                        <router-link style="text-decoration: none; margin-left: 0cm;" v-bind:to="{ name: 'Pelicula' }">
                          <v-list-item-title class="tituloItems">{{ item.title }}</v-list-item-title>
                        </router-link>
                      </div>

                      <router-link style="text-decoration: none; color: black;" v-bind:to="{ name: 'Pelicula' }">
                        <v-list-tile-content>
                          hodsadlalsdlsaldsa
                        </v-list-tile-content>
                      </router-link>

                    </v-list-item>
                  </v-list>
                </v-menu>
                <v-menu open-on-hover offset-y>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn color="transparent" depressed dark v-bind="attrs" v-on="on">
                      Mundo abierto
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-item v-for="(item, index) in items" :key="index">
                      <div class="mr-n16">
                        <router-link style="text-decoration: none; margin-left: 0cm;" v-bind:to="{ name: 'Pelicula' }">
                          <v-list-tile-avatar>
                            <img class="imagenMenu" src="https://cdn.vuetifyjs.com/images/john.png">
                          </v-list-tile-avatar>
                        </router-link>
                      </div>
                      <div class="ml-n16 mr-6">
                        <router-link style="text-decoration: none; margin-left: 0cm;" v-bind:to="{ name: 'Pelicula' }">
                          <v-list-item-title class="tituloItems">{{ item.title }}</v-list-item-title>
                        </router-link>
                      </div>
                      <v-spacer></v-spacer>
                      <router-link style="text-decoration: none; color: black;" v-bind:to="{ name: 'Pelicula' }">
                        <v-list-tile-content>
                          hodsadlalsdlsaldsa
                        </v-list-tile-content>
                      </router-link>

                    </v-list-item>
                  </v-list>
                </v-menu>
                <v-menu open-on-hover offset-y>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn color="transparent" depressed dark v-bind="attrs" v-on="on">
                      SandBox
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-item v-for="(item, index) in items" :key="index">
                      <div class="mr-n16">
                        <router-link style="text-decoration: none; margin-left: 0cm;" v-bind:to="{ name: 'Pelicula' }">
                          <v-list-tile-avatar>
                            <img class="imagenMenu" src="https://cdn.vuetifyjs.com/images/john.png">
                          </v-list-tile-avatar>
                        </router-link>
                      </div>
                      <div class="ml-n16 mr-6">
                        <router-link style="text-decoration: none; margin-left: 0cm;" v-bind:to="{ name: 'Pelicula' }">
                          <v-list-item-title class="tituloItems">{{ item.title }}</v-list-item-title>
                        </router-link>
                      </div>
                      <v-spacer></v-spacer>
                      <router-link style="text-decoration: none; color: black;" v-bind:to="{ name: 'Pelicula' }">
                        <v-list-tile-content>
                          hodsadlalsdlsaldsa
                        </v-list-tile-content>
                      </router-link>

                    </v-list-item>
                  </v-list>
                </v-menu>
                <v-menu open-on-hover offset-y>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn color="transparent" depressed dark v-bind="attrs" v-on="on">
                      Deportes
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-item v-for="(item, index) in items" :key="index">
                      <div class="mr-n16">
                        <router-link style="text-decoration: none; margin-left: 0cm;" v-bind:to="{ name: 'Pelicula' }">
                          <v-list-tile-avatar>
                            <img class="imagenMenu" src="https://cdn.vuetifyjs.com/images/john.png">
                          </v-list-tile-avatar>
                        </router-link>
                      </div>
                      <div class="ml-n16 mr-6">
                        <router-link style="text-decoration: none; margin-left: 0cm;" v-bind:to="{ name: 'Pelicula' }">
                          <v-list-item-title class="tituloItems">{{ item.title }}</v-list-item-title>
                        </router-link>
                      </div>
                      <v-spacer></v-spacer>
                      <router-link style="text-decoration: none; color: black;" v-bind:to="{ name: 'Pelicula' }">
                        <v-list-tile-content>
                          hodsadlalsdlsaldsa
                        </v-list-tile-content>
                      </router-link>

                    </v-list-item>
                  </v-list>
                </v-menu>
                <v-menu open-on-hover offset-y>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn color="transparent" depressed dark v-bind="attrs" v-on="on">
                      Peleas
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-item v-for="(item, index) in items" :key="index">
                      <div class="mr-n16">
                        <router-link style="text-decoration: none; margin-left: 0cm;" v-bind:to="{ name: 'Pelicula' }">
                          <v-list-tile-avatar>
                            <img class="imagenMenu" src="https://cdn.vuetifyjs.com/images/john.png">
                          </v-list-tile-avatar>
                        </router-link>
                      </div>
                      <div class="ml-n16 mr-6">
                        <router-link style="text-decoration: none; margin-left: 0cm;" v-bind:to="{ name: 'Pelicula' }">
                          <v-list-item-title class="tituloItems">{{ item.title }}</v-list-item-title>
                        </router-link>
                      </div>
                      <v-spacer></v-spacer>
                      <router-link style="text-decoration: none; color: black;" v-bind:to="{ name: 'Pelicula' }">
                        <v-list-tile-content>
                          hodsadlalsdlsaldsa
                        </v-list-tile-content>
                      </router-link>

                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-list>
            </v-menu>

          </v-toolbar-items>

        </v-toolbar>


      </div>
    </template>
    <!-- <v-navigation-drawer fixed v-model="drawer" app>
      <v-list dense>
        <v-list-item>
          <v-list-item-action>
            <v-icon>home</v-icon>
          </v-list-item-action>
          <v-list-item-content>Inicio</v-list-item-content>
        </v-list-item>
        <router-link v-bind:to="{ name: 'Contacto' }" class="side_bar_link">
          <v-list-item>
            <v-list-item-action>
              <v-icon>contact_mail</v-icon>
            </v-list-item-action>
            <v-list-item-content>Contacto</v-list-item-content>
          </v-list-item>
        </router-link>

        <router-link v-bind:to="{ name: 'Registro' }" class="side_bar_link">
          <v-list-item>
            <v-list-item-action>

            </v-list-item-action>
          </v-list-item>
        </router-link>
      </v-list>
    </v-navigation-drawer> -->

    <!-- <v-app-bar color="indigo" dark fixes app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer">
        <v-icon>{{ drawer ? 'close' : 'menu' }}</v-icon>
      </v-app-bar-nav-icon>
      <v-app-bar-title>Inicio</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn v-bind:to="{ name: 'AgregarPelicula' }">Agregar Película</v-btn>
      </v-toolbar-items>
    </v-app-bar> -->

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
import './assets/stylesheets/main.css';

export default {
  data: () => ({
    drawer: null,
    items: [
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me 2' },
    ],

  }),
};
</script>
