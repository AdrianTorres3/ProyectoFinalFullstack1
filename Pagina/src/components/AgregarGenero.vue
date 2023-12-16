
<template>
    <v-form v-model="valido" ref="formulario" lazy-validation>
        <v-text-field label="Nombre del género:" v-model="nombre" :rules="reglasNombre" required></v-text-field>
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
        nombre: '',
        reglasGenero: [
            v => !!v || 'El nombre es obligatorio',
        ],
        select: null,

    }),

    methods: {
        guardar() {
            if (this.$refs.formulario.validate()) {
                // Realizar siguiente acción
                return axios({
                    method: 'post',
                    data: {
                        nombre: this.nombre,
                    },
                    url: 'http://localhost:8081/generos',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                    .then(() => {
                        this.$swal(
                            'Genero guardado exitosamente',
                            'success',
                        );
                        this.$router.push({ name: 'Inicio' });
                        this.$refs.formulario.reset();
                        location.reload();
                    })
                    .catch(() => {
                        this.$swal(
                            '¡¡Oh no!!',
                            'Ocurrió un error y no pudimos agregar el genero',
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
  