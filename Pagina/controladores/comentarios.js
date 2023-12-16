const EsquemaComentario = require('../modelos/Comentario');
const Calificacion = require('../modelos/Calificacion');
const passport = require('passport')

module.exports.controller = (app) => {
    //Agregar un genero
    app.post('/comentarios', (req, res) => {
        const nuevoComentario = new EsquemaComentario({
           nombre_usuario: req.body.nombre_usuario,
           nombre_videojuego: req.body.nombre_videojuego,
           comentario : req.body.comentario
        });

        nuevoComentario.save()
        .then((comentario) => {
            res.send(comentario)
        })
        .catch((error)=>{
            console.log(error)   
        });
    });

    // Obtener todos los generos
    app.get('/comentarios:nombre_videojuego', (req, res) => {
        EsquemaComentario.find({}, 'nombre_usuario nombre_videojuego comentario')
        .then((comentarios) => {
             res.send(comentarios);
             console.log(comentarios);
        }).catch((error)=>{
            console.log(error);
        });
    });

    app.get('/comentarios', (req, res) => {
        EsquemaComentario.find({}, 'nombre_usuario nombre_videojuego comentario')
        .then((comentarios) => {
             res.send(comentarios);
             console.log(comentarios);
        }).catch((error)=>{
            console.log(error);
        });
    });

    
};