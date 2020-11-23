const mongoose = require('mongoose');


const contactoSchema = new mongoose.Schema({
    nombre: {type: String, required:true},
    puesto: {type: String, required: false},
    organizacion: {type: String, required: false},
    telefono: {type: String, required: false},
    email: {type: String, required: false},
    horario: {type: String, required: false},
    direccion: {type: String, required: false},
    notas: {type: String, required: false}
});


module.exports = mongoose.model('Contacto',contactoSchema);