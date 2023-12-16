
<template>
  <v-form v-model="valido" ref="formulario" lazy-validation>
    <v-text-field label="Título videojuego:" v-model="titulo" :rules="reglasTitulo" required></v-text-field>
    <v-select label="Género:" v-model="genero" required :rules="reglasGenero" :items="generos" item-text="nombre"
      itemid="id"></v-select>
    <v-text-field label="Fecha de lanzamiento:" v-model="lanzamiento" required :rules="reglasLanzamiento"></v-text-field>
    <v-text-field label="Desarrollador:" v-model="desarrollador" required :rules="reglasDesarrollador"></v-text-field>
    <v-text-field label="Precio:" v-model="precio" required :rules="reglasPrecio"></v-text-field>
    <v-text-field label="Plataformas:" v-model="plataformas" multi-line required
      :rules="reglasPlataformas"></v-text-field>
    <v-text-field label="Descripción:" v-model="descripcion" multi-line required
      :rules="reglasDescripcion"></v-text-field>
    <!-- <v-text-field label="Imagen:" v-model="imagen" multi-line></v-text-field> -->
    <v-file-input accept="image/*" label="Sube imagen" v-model="imagen"></v-file-input>
    <v-btn @click="guardar" :disabled="!valido">Guardar</v-btn>
    <v-btn @click="limpiar">Limpiar</v-btn>
  </v-form>
</template>


<script>
/* eslint-disable */
import axios from 'axios';

export default {
  data: () => ({
    valido: true,
    titulo: '',
    genero: '',
    lanzamiento: '',
    desarrollador: '',
    precio: '',
    plataformas: '',
    descripcion: '',
    imagen: '',
    reglasTitulo: [
      v => !!v || 'El título es obligatorio',
    ],
    reglasGenero: [
      v => !!v || 'Selecciona un género para el videojuego',
      v => (v && v.length <= 80) || 'Género debe ser menor o igual a 80 caracteres',
    ],
    reglasLanzamiento: [
      v => !!v || 'Fecha de lanzamiento es requerida',
    ],
    reglasDesarrollador: [
      v => !!v || 'Introduce el desarrollador',
    ],
    reglasPrecio: [
      v => !!v || 'Introduce el precio',
    ],
    reglasPlataformas: [
      v => !!v || 'Introduce las plataformas',
    ],
    reglasDescripcion: [
      v => !!v || 'Introduce una descripcion sobre el juego',
    ],
    select: null,
    generos: [],
  }),
  mounted() {
    axios.get(`http://localhost:8081/generos`)
      .then((response) => {
        console.log(response.data);
        this.generos = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    guardar() {
      if (this.$refs.formulario.validate()) {
        // Realizar siguiente acción
        return axios({
          method: 'post',
          data: {
            titulo: this.titulo,
            genero: this.genero,
            lanzamiento: this.lanzamiento,
            desarrollador: this.desarrollador,
            precio: this.precio,
            plataformas: this.plataformas,
            descripcion: this.descripcion,
            imagen: this.imagen
          },
          url: 'http://localhost:8081/videojuegos',
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then(() => {
            this.$swal(
              'Videojuego guardado exitosamente',
              'success',
            );
            this.$router.push({ name: 'Inicio' });
            location.reload();
            this.$refs.formulario.reset();
          })
          .catch(() => {
            this.$swal(
              '¡¡Oh no!!',
              'Ocurrió un error y no pudimos agregar el videojuego',
              'error',
            );
          });
      }

      return true;
    },
    limpiar() {
      this.$refs.formulario.reset();
    },
  },
};
</script>
