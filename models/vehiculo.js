const {Schema, model} = require('mongoose');

const schema_vehiculo = Schema({
    placa:{
        type: String,
        required: [true,'Se requiere ingresar una placa']
    },
    tipo_dueño:{
        type: String,
        required: [true,'Se requiere ingresar un dueño del vehiculo'],
        anum: ['visitante','propietario','administrador']
    },
    dueño:{
        type: String,
        required: [true,'Se requiere ingresar un dueño del vehiculo']
    },
    espacio:{
        type: String,
        required: [true,'Se requiere un espacio para poder designarle al vehiculo']
    },
    estado:{
        type: Boolean,
        default: true,
        required: [true,'el estado es obligatorio']
    }

})

module.exports = model('vehiculo', schema_vehiculo)