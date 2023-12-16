
const EsquemaVideojuego = require('../modelos/Videojuego');
const Calificacion = require('../modelos/Calificacion');
const passport = require('passport')

module.exports.controller = (app) => {
    //Agregar un videojuego
    app.post('/videojuegos', (req, res) => {
        const nuevoVideojuego = new EsquemaVideojuego({
            titulo: req.body.titulo,
            genero: req.body.genero,
            lanzamiento: req.body.lanzamiento,
            desarrollador: req.body.desarrollador,
            precio: req.body.precio,
            plataformas: req.body.plataformas,
            descripcion: req.body.descripcion,
        });

        nuevoVideojuego.save()
        .then((error, videojuego) => {
            if (error) {
                console.log(error);
            }
            res.send(videojuego);
        });
    });

    // Obtener todos los videojuegos
    app.get('/videojuegos', (req, res) => {
        EsquemaVideojuego.find({}, 'titulo genero lanzamiento desarrollador precio plataformas descripcion')
        .then((videojuegos) => {
             res.send(videojuegos);
             console.log(videojuegos);
        }).catch((error)=>{
            console.log(error);
        });
    });

    // Obtener un videojuego por id
    app.get('/videojuegos/:id', (req, res) => {
        
        EsquemaVideojuego.findById(req.params.id, 'titulo genero lanzamiento desarrollador precio plataformas descripcion')
        .then((videojuego) => {
            res.send(videojuego);
            console.log(videojuego);
        })
        .catch((error)=>{
            console.log(error);
        });
    })

    // Obtener un videojuego por genero
    app.get('/videojuegos/genero/:genero', (req, res) => {
        console.log(req.params.genero);
        EsquemaVideojuego.find({"genero":req.params.genero}, 'titulo genero lanzamiento desarrollador precio plataformas descripcion')
        .then((videojuego) => {
            res.send(videojuego);
        })
        .catch((error)=>{
            console.log(error);
        });
    })

    

   // Calififcar una pelicula
    app.post('/peliculas/calif/:id', (req, res) => {
        const calificacion = new Rating({
            pelicula_id: req.params.id,
            user_id: req.body.user_id,
            calif: requ.body.calif,
        });

        calificacion.save(function (error, calif) {
            if (error) {
                console.log(error);
            }
            res.send({
                pelicula_id: calificacion.pelicula_id,
                user_id: calificacion.user_id,
                calif: calificacion.calif,
            });
        });
    });

    // Eliminar un videojuego por su id
    app.delete('/videojuegos/:id', (req, res) => {
        EsquemaVideojuego.deleteOne({_id: req.params.id})
        .then((error, videojuego) => {
            if(error) {
                console.error(error);
                res.send(error);
            } else {
                res.end({estado: eliminado});
            }
        });
    });

    // Borrar todos los videojuegos
    app.delete('/videojuegos', (req, res) => {
        EsquemaVideojuego.deleteMany({})
        .then((error) => {
            if(error) {
                console.error(error);
                res.send(error);
            } else {
                res.end({estado: eliminado});
            }
        });
    });
    
};
