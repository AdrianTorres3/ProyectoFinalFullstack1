<template>
    <div>
        <v-data-table :headers="headers" :items="generos" sort-by="nombre" class="elevation-1">
            <template v-slot:top>
                <v-toolbar flat>
                    <v-toolbar-title>Géneros</v-toolbar-title>
                    <v-divider class="mx-4" inset vertical></v-divider>
                    <v-spacer></v-spacer>
                    <v-dialog v-model="dialog" max-width="500px">
                        <template v-slot:activator="{ on, attrs }">

                        </template>
                        <v-card>
                            <v-card-title>
                                <span class="text-h5">{{ formTitle }}</span>
                            </v-card-title>

                            <v-card-text>
                                <v-container>
                                    <v-row>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedItem.nombre"
                                                label="Nombre de género"></v-text-field>
                                        </v-col>

                                    </v-row>
                                </v-container>
                            </v-card-text>

                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue darken-1" text @click="close">
                                    Cancelar
                                </v-btn>
                                <v-btn color="blue darken-1" text @click="save">
                                    Guardar
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                    <v-dialog v-model="dialogDelete" max-width="500px">
                        <v-card>
                            <v-card-title class="text-h5">¿Estas seguro de querer eliminar este genero? </v-card-title>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                                <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                                <v-spacer></v-spacer>
                            </v-card-actions>
                        </v-card>

                    </v-dialog>
                    <v-dialog v-model="dialogDeleteAll" max-width="500px">
                        <v-card>
                            <v-card-title class="text-h5">¿Estas seguro de querer eliminar TODO? </v-card-title>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                                <v-btn color="blue darken-1" text @click="deleteAllConfirm">OK</v-btn>
                                <v-spacer></v-spacer>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                    <v-dialog v-model="dialogError" max-width="800px">
                        <v-card>
                            <v-card-title class="text-h5"> La categoria o categorias que desas eliminar contienen
                                videojuegos </v-card-title>
                            <v-card-actions>
                                <v-spacer></v-spacer>

                                <v-btn color="blue darken-1" text @click="errorConfirm">OK</v-btn>
                                <v-spacer></v-spacer>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </v-toolbar>
            </template>
            <template v-slot:item.actions="{ item }">

                <v-icon small @click="deleteItem(item)">
                    mdi-delete
                </v-icon>
            </template>

        </v-data-table>
        <div class="mt-7">
            <v-btn color="error" @click="deleteAll">Eliminar todos</v-btn>
        </div>
    </div>
</template>
<script>
/* eslint-disable */
import axios from 'axios'
export default {
    data: () => ({
        dialog: false,
        dialogDelete: false,
        dialogDeleteAll: false,
        dialogError: false,
        headers: [
            {
                text: 'Nombre',
                align: 'start',
                sortable: true,
                value: 'nombre',
            },

            { text: 'Actions', value: 'actions', sortable: false },
        ],
        generos: [],
        editedIndex: -1,
        editedItem: {
            nombre: '',

        },
        defaultItem: {
            nombre: '',

        },
        videojuegos: [],
    }),

    computed: {
        formTitle() {
            return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
        },
    },

    watch: {
        dialog(val) {
            val || this.close()
        },
        dialogDelete(val) {
            val || this.closeDelete()
        },
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
        axios.get(`http://localhost:8081/videojuegos`)
            .then((response) => {
                console.log(response.data);
                this.videojuegos = response.data;
            })
            .catch((error) => {
                console.log(error);
            });
    },


    methods: {
        obtenerGeneros() {


        },
        editItem(item) {
            this.editedIndex = this.generos.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialog = true
            axios.put(`http://localhost:8081/generos/${item._id}`, {
                nombre: `${item.nombre}`
            })
                .then(() => {
                    this.obtenerGeneros();

                })
                .catch((error) => {
                    console.log(error);
                    this.obtenerGeneros();
                });
        },

        deleteItem(item) {
            this.editedIndex = this.generos.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialogDelete = true
            for (const genero in this.generos) {
                for (const videojuego in this.videojuegos) {
                    let generoVideojuego = videojuego.genero;
                    let nombreGenero = genero.nombre;
                    if (generoVideojuego == nombreGenero) {
                        this.dialogError = true
                        console.log('NO PUEDES')
                        return
                    }
                }

            }
            axios.delete(`http://localhost:8081/generos/${item._id}`)
                .then(() => {
                    this.obtenerGeneros();

                })
                .catch((error) => {
                    console.log(error);
                    this.obtenerGeneros();
                });
        },
        deleteAll() {
            for (const genero in this.generos) {
                for (const videojuego in this.videojuegos) {
                    let generoVideojuego = videojuego.genero;
                    let nombreGenero = genero.nombre;
                    if (generoVideojuego == nombreGenero) {
                        this.dialogError = true
                        console.log('NO PUEDES')
                        return
                    }
                }

            }

            this.dialogDeleteAll = true
        },
        deleteAllConfirm() {
            
            axios.delete(`http://localhost:8081/generos`)
                .then(() => {
                    this.obtenerGeneros();

                })
                .catch((error) => {
                    console.log(error);
                    this.obtenerGeneros();
                });
        },
        deleteItemConfirm() {
            
            this.generos.splice(this.editedIndex, 1)
            this.closeDelete()
        },
        errorConfirm() {

            this.closeDelete()
        },
        close() {
            this.dialog = false
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        },

        closeDelete() {
            this.dialogDelete = false
            this.dialogDeleteAll = false
            this.dialogError = false
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        },

        save() {
            if (this.editedIndex > -1) {
                Object.assign(this.generos[this.editedIndex], this.editedItem)
            } else {
                this.desserts.push(this.editedItem)
            }
            this.close()
        },
    },
}
</script>