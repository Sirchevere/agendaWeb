const mongoose = require('mongoose');
const db = require('../db');

var Contacto = require('../models/contacto.model');

const controller = {};



controller.save = (req, res)=>{
    var newContacto = Contacto({
        nombre: req.body.nombre,
        puesto: req.body.puesto,
        organizacion: req.body.organizacion,
        telefono: req.body.telefono,
        email: req.body.email,
        horario: req.body.horario,
        direccion: req.body.direccion,
        notas: req.body.notas
    });


    newContacto.save((err,contactosaved)=>{
        
        if (err) {
            console.log(err)
            res.redirect('/principal?error');
        }else{
            console.log('Guardado con exito!.. ',contactosaved);
        
        res.redirect('/principal?correcto');
        }
        
    })

}

controller.editar = (req, res)=>{
    Contacto.findById({_id: req.params.id }, (err, contacto)=>{
        if(err) console.log(err);
        //Modificar el usuario
        contacto.nombre = req.body.nombreEd;
        contacto.puesto = req.body.puestoEd;
        contacto.organizacion = req.body.organizacionEd;
        contacto.telefono = req.body.telefonoEd;
        contacto.email = req.body.emailEd;
        contacto.horario = req.body.horarioEd;
        contacto.direccion = req.body.direccionEd;
        contacto.notas = req.body.notasEd;


        contacto.save((err,contactosaved)=>{
            if(err) console.log(err);
            res.redirect('/principal?editado');
        })
    });
}
module.exports = controller;