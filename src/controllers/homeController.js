const mongoose = require('mongoose');
const db = require('../db');

var User = require('../models/user.model');
var Contacto = require('../models/contacto.model');

const controller = {};

controller.render = (req,res)=>{

    res.render('home')

}

controller.save = (req, res)=>{
    var newUser = User({
        nombre: req.body.nombre,
        contrasena: req.body.contrasena
    });


    newUser.save((err,usersaved)=>{
        if(err) console.log(err);
        console.log('Guardado con exito!.. ',usersaved);
        res.redirect('/');
    })
}

controller.verificar = (req, res)=>{
    User.find({$and: [ { nombre: { $eq: req.body.nombre } }, { contrasena: { $eq: req.body.contrasena } } ]}, (err,user)=>{

        if(err) console.log('Error: '+err);
    if (user.length==0) {
            console.log("no existe")
            res.redirect('/?error');
        }else{
            console.log("si existe")
            res.redirect('/principal?nombre='+req.body.nombre);
        }
        //Modificar el usuario
    });
}

controller.registro = (req,res)=>{

    res.render('registro')

}

controller.principal = (req,res)=>{

    Contacto.find((err,contactos)=>{
        if(err) console.log('Error: '+err);

        res.render('principal',{
            conts: contactos
        });

    })

}

controller.falloinicio = (req,res)=>{

    res.render('fallosesion')
    

}




module.exports = controller;