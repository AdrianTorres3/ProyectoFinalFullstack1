// const express = require('express');
// //Objeto encargado de almacenar las rutas
// const router = express.Router();

// const Videojuego = require('../modelos/Videojuego');

// //Get con todos los documentos de la BD
// router.get('/', async (req, res) => {

//     try {
//         const videojuegos = await Videojuego.find();
//         console.log(videojuegos);
//         res.json(videojuegos);
//     } catch (error) {
//         return res.status(400).json({
//             mensaje: "Ocurrio un error",
//             error
//         })
//     }
// });

// //Get con parametros
// router.get('/:id', async (req, res) => {
//     const _id = req.params.id;
//     try {
//         const videojuego = await Videojuego.findOne({ _id });
//         res.json(videojuego);

//     } catch (error) {
//         return res.status(400).json({
//             mensaje: "ocurrio un error",
//             error
//         })

//     }
// });

// router.post('/', async (req, res) => {
//     const videojuego = new Videojuego(req.body);
//     console.log(req.body);
//     try {
//         await videojuego.save();
//         res.status(200).json({
//             mensaje: 'Videojuego guardado exitosamente',

//         });
//     } catch (error) {
//         return res.status(500).json({
//             mensaje: "Ocurrio un error",
//             error
//         })
//     }
// });

// router.put('/:id', async (req, res) => {
//     const _id = req.params.id;
//     const body = req.body;
//     console.log(_id, body);
//     try {
//         await Videojuego.findByIdAndUpdate(_id, body);
//         res.json({
//             status: "Videojuego updated"
//         });
//     } catch (error) {
//         return res.status(400).json({
//             mesnaje: "ocurrio un error",
//             error
//         })
//     }
// });

// router.delete('/:id', async (req, res) => {
//     const _id = req.params.id;
//     try{
//     await Videojuego.findByIdAndDelete(_id);
//     res.json({
//         status: 'videojuego deleted'
//     })
//     }catch(error){
//         res.status(400).json({
//             mensaje:"Ocurrio un error",
//             error
//         })
//     }
// })

// module.exports = router;


 const EsquemaVideojuego = require('../modelos/Videojuego');
const Calificacion = require('../modelos/Calificacion');
const passport = require('passport')

module.exports.controller = (app) => {
    //Agregar una pelicula 
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

    // Obtener todas las peliculas
    app.get('/peliculas', passport.authenticate('jwt', { session: false }), (req, res) => {
        EsquemaPelicula.find({}, 'nombre sinopsis anhopub genero')
        .then((error, peliculas) => {
            if (error) { 
                console.log(error);
                res.send(error);
            } else {
                res.send({peliculas});
            }
        });
    });

    // Obtener una pelicula
    app.get('/api/peliculas/:id', (req, res) => {
        EsquemaPelicula.findById(req.params.id, 'nombre sinopsis anhopub genero')
        .then((error, pelicula) => {
            if (error) {
                console.error(error);
            } else {
                res.send(pelicula);
            }
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

    // Eliminar una película por su id
    app.delete('/peliculas/:id', (req, res) => {
        EsquemaPelicula.deleteOne({_id: req.params.id})
        .then((error, pelicula) => {
            if(error) {
                console.error(error);
                res.send(error);
            } else {
                res.end({estado: eliminado});
            }
        });
    });

    // Borrar todas las películas
    app.delete('/peliculas', (req, res) => {
        EsquemaPelicula.deleteMany({})
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
