const mongoose = require('mongoose');
const Esquema = mongoose.Schema;
const EsquemaComentario = new Esquema ({
    nombre_usuario: String,
    nombre_videojuego: String,
    comentario: String,
});

const Comentario = mongoose.model('Comentario', EsquemaComentario);
module.exports = Comentario;