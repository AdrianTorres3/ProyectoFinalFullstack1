const mongoose = require('mongoose');
const { Schema } = mongoose;

const generoSchema = new Schema({
    nombre:String,
});

module.exports = mongoose.model('Genero',generoSchema);