const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/agendaWeb',{
    useNewUrlParser:true,
    useCreateIndex: true,
    useUnifiedTopology: true
}, (err)=>{
    if(!err) console.log('Se ha conectado a Mongo DB!');
    else console.log('Error de conexion '+err);
})


module.exports = mongoose;