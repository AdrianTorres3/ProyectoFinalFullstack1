
<template>
    <v-form v-model="valido" ref="formulario" lazy-validation>
        <v-text-field label="Videojuego:" v-model="this.$route.params.nombre_videojuego" required disabled>
            hola </v-text-field>
        <v-text-field label="Nombre usuario:" v-model="usuario" disabled></v-text-field>
        <v-text-field label="Comentario:" v-model="comentario" multi-line required></v-text-field>

        <v-btn @click="guardar" :disabled="!valido">Guardar</v-btn>
        <v-btn @click="limpiar">Limpiar</v-btn>

    </v-form>
</template>

<script>
/* eslint-disable */
import axios from 'axios';

export default {

    data: () => ({

        usuario: window.localStorage.getItem('nombreUsuario'),
        valido: true,
        comentario: '',

        reglasVideojuego: [
            v => !!v || 'Selecciona un videojuego',
            v => (v && v.length <= 80) || 'Género debe ser menor o igual a 80 caracteres',
        ],

        select: null,
        videojuegos: [],

    }),
    mounted() {

    },

    methods: {
        guardar() {
            if (this.$refs.formulario.validate()) {
                // Realizar siguiente acción
                return axios({
                    method: 'post',
                    data: {
                        nombre_usuario: this.usuario,
                        nombre_videojuego: this.$route.params.nombre_videojuego,
                        comentario: this.comentario,

                    },
                    url: 'http://localhost:8081/comentarios',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                    .then(() => {
                        this.$swal(
                            'Comentario guardado con exito',
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

