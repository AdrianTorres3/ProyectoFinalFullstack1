
const EsquemaVideojuego = require('../modelos/Videojuego');
const Calificacion = require('../modelos/Calificacion');
const passport = require('passport')
// const multer = require('multer');
// const storage = multer.diskStorage({
//     destination: (req,file,cb) =>{
//         cb(null,'/src/Images')
//     },
//     filename: (req,file,cb)=>{
//         console.log(file)
//         cb(null,Date.now()+ path.extname(file.originalname))
//     }
// })
// const upload = multer({storage:storage});
module.exports.controller = (app) => {
    //Agregar un videojuego
    app.post('/videojuegos',(req, res) => {
        const nuevoVideojuego = new EsquemaVideojuego({
            titulo: req.body.titulo,
            genero: req.body.genero,
            lanzamiento: req.body.lanzamiento,
            desarrollador: req.body.desarrollador,
            precio: req.body.precio,
            plataformas: req.body.plataformas,
            descripcion: req.body.descripcion,
            imagen:req.body.imagen
            
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
        EsquemaVideojuego.find({}, 'titulo genero lanzamiento desarrollador precio plataformas descripcion imagen')
        .then((videojuegos) => {
             res.send(videojuegos);
             console.log(videojuegos);
        }).catch((error)=>{
            console.log(error);
        });
    });

    // Obtener un videojuego por id
    app.get('/videojuegos/:id', (req, res) => {
        
        EsquemaVideojuego.findById(req.params.id, 'titulo genero lanzamiento desarrollador precio plataformas descripcion imagen')
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
        EsquemaVideojuego.find({"genero":req.params.genero}, 'titulo genero lanzamiento desarrollador precio plataformas descripcion imagen')
        .then((videojuego) => {
            res.send(videojuego);
        })
        .catch((error)=>{
            console.log(error);
        });
    })

    app.get('/videojuegos/categoria/:genero', (req, res) => {
        console.log(req.params.genero);
        EsquemaVideojuego.find({"genero":req.params.genero}, 'titulo genero lanzamiento desarrollador precio plataformas descripcion imagen')
        .then((videojuego) => {
            res.send(videojuego);
        })
        .catch((error)=>{
            console.log(error);
        });
    })

    

   

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
