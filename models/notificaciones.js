const {Schema, model} = require('mongoose');

const notificaciones_schemma = Schema({
    apartamento:{
        type: Number,
        required: [true, 'El apartamento es obligatorio'],
        minlength: [4,'Ese numero de apartamento no es valido'],
        maxlength: [4,'Ese numero de apartamento no es valido']
    },
    propietario:{
        type: String,
        required: [true, 'El propietario es obligatorio']
    },
    motivo:{
        type: String,
        required: [true, 'El motivo es obligatorio']
    },
    descripcion:{
        type: String,
        required: [true, 'La descripcion es obligatoria']
    }
})

module.exports = model('notificaciones',notificaciones_schemma)