const {Schema, model} = require('mongoose')

const schema_espacios = Schema ({

    tipo_espacio: {

        type: String,
        enum: ['APARTAMENTO', 'PARQUEADERO', 'SALON SOCIAL', 'ZONA HUMEDA'],
        required: [true, 'El tipo espacio es obligatorio']

    },

    nombre_espacio: {

        type: String,
        required: [true, 'El numero el nombre del es obligatorio'],
        unique: true

    },

    area: {

        type: Number,
        default: null ,
        min: [0, "No puede haber area inferior a cero"]


    },

    capacidad: {

        type: Number,
        default: null,
        min: [0, "No puede haber capacidad inferior a cero"]
        
    },

    estado: {

        type: String,
        default: 'ACTIVO',
        enum: ['ACTIVO', 'INACTIVO'],
        required: [true, 'El estado del residente es obligatorio']
        
    }
})

module.exports = model('Espacios', schema_espacios) 