const EsquemaGenero = require('../modelos/Genero');
const Calificacion = require('../modelos/Calificacion');
const passport = require('passport')

module.exports.controller = (app) => {
    //Agregar un genero
    app.post('/generos', (req, res) => {
        const nuevoGenero = new EsquemaGenero({
           nombre: req.body.nombre
        });

        nuevoGenero.save()
        .then((genero) => {
            res.send(genero)
        })
        .catch((error)=>{
            console.log(error)   
        });
    });

    // Obtener todos los generos
    app.get('/generos', (req, res) => {
        EsquemaGenero.find({}, 'nombre')
        .then((generos) => {
             res.send(generos);
             console.log(generos);
        }).catch((error)=>{
            console.log(error);
        });
    });

    // Eliminar un videojuego por su id
    app.delete('/generos/:id', (req, res) => {
        EsquemaGenero.deleteOne({_id: req.params.id})
        .then((error, genero) => {
            if(error) {
                console.error(error);
                res.send(error);
            } else {
                res.end({estado: eliminado});
            }
        });
    });

    // Borrar todos los generos
    app.delete('/generos', (req, res) => {
        EsquemaGenero.deleteMany({})
        .then((error) => {
            if(error) {
                console.error(error);
                res.send(error);
            } else {
                res.end({estado: eliminado});
            }
        });
    });

    app.put('/generos/:id', async (req, res) => {
        const _id = req.params.id;
        const body = req.body;
        console.log(_id, body);
        try {
            EsquemaGenero.findByIdAndUpdate(_id, body);
            res.json({
                status: "genero actualizado"
            });
        } catch (error) {
            return res.status(400).json({
                mesnaje: "ocurrio un error",
                error
            })
        }
    });
};