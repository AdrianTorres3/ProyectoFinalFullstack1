const Usuario = require('../modelos/Usuario');

const passport = require('passport');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
//const ExtractJwt = passportJWT.ExtractJwt;
const key = require('../config/keys').secret;
//const jwtOptions = {};
//jwtOptions.jswtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
//jwtOptions.secretOrKey = 'estoeslaclavesecreta';

module.exports.controller = (app) => {
    // Registrar a un usuario
    app.post('/usuarios/registro', (req, res) => {
        const nombre = req.body.nombre;
        const email = req.body.email;
        const contrasenha = req.body.contrasenha;
        const confirmar_contrasenha = req.body.confirmar_contrasenha;

        // if(contrasenha!=confirmar_contrasenha){
        //     return res.status(400).json({
        //         mensaje: "Contraseña no coincide",
        //         succes:false
        //     })
        //     return
        // }

        Usuario.findOne({
            nombre:nombre,
            email:email
        }).then(user=>{
            if(user || contrasenha!=confirmar_contrasenha){
                return res.status(400).json({
                    mensaje: "Ese nombre de usuario o email ya han sido registrados, verifica que la contraseña coincida",
                    succes:false
                });
                return
            }else{
                const nuevoUsuario = new Usuario({
                    nombre,
                    email,
                    contrasenha,
                });
                
                //encriptar contraseña
                bcrypt.genSalt(10,(err,salt)=>{
                    bcrypt.hash(nuevoUsuario.contrasenha, salt, (err,hash)=>{
                        if(err) throw err;
                        nuevoUsuario.contrasenha = hash;
                        nuevoUsuario.save().then(user=>{
                            return res.status(201).json({
                                succes: true,
                                mensaje: "Usuario creado con exito"
                            })
                        })
                    })
                })
            }
        })

        
    });

    // Iniciar sesion
    app.post('/usuarios/login', (req, res) => {
        Usuario.findOne({nombre:req.body.nombre}).then(user=>{
            if(!user){
                return res.status(404).json({
                    mensaje:"usuario no encontrado",
                    succes:false
                });
            }
            bcrypt.compare(req.body.contrasenha, user.contrasenha).then(isMatch=>{
                if(isMatch){
                    const payload = {
                        _id : user._id,
                        nombre:user.nombre,
                        email:user.email
                    }
                    jwt.sign(payload,key,{
                        expiresIn:604800
                    }, (err,token)=>{
                        res.status(200).json({
                            succes:true,
                            token: `Bearer ${token}`,
                            nombre:user.nombre,
                            mensaje: "Has iniciado sesion con exito"
                        })
                    })
                }else{
                    return res.status(404).json({
                        mensaje:"Contraseña incorrecta",
                        succes:false
                    });
                }
            })
        })
        // if (req.body.email && req.body.password) {
        //     const email = req.body.email;
        //     const contrasenha = req.body.contrasenha;
        //     Usuario.obtenerUsuarioPorEmail(email, (err, usuario) => {
        //         if (!usuario) {
        //             res.status(404).json({ mensaje: 'El usuario no existe' });
        //         } else {
        //             Usuario.compararContrasenha(contrasenha, usuario.contrasenha, (error, coincide) => {
        //                 if (error) throw error;
        //                 if (coincide) {
        //                     const payload = { id: usuario.id };
        //                     const token = jwt.sign(payload, jwtOptions.secretOrKey);
        //                     res.json({ mensaje: 'Ok', token });
        //                 } else {
        //                     res.status(401).json({ mensaje: 'La contraseña es incorrecta' });
        //                 }
        //             });
        //         }
        //     });
        // }
    });
    app.post('/logout', function(req, res, next){
        req.logout(function(err) {
          if (err) { return next(err); }
          res.redirect('/');
        });
      });
    app.get('/perfil',passport.authenticate('jwt',{
        session:false
    }), (req,res)=>{
        return res.json({
            user: req.user
        });
    })
};