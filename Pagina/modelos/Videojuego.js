const mongoose = require('mongoose');
const { Schema } = mongoose;

const videojuegoSchema = new Schema({
    titulo:String,
    genero:String,
    lanzamiento:String,
    desarrollador:String,
    precio:String,
    plataformas:String,
    descripcion:String


});

module.exports = mongoose.model('Videojuego',videojuegoSchema);