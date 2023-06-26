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
        unique: true,
        validate: {
            validator: value => {

                const ER_nombre_espacio = /^[A-Z0-9]+$/
                return ER_nombre_espacio.test(value)
            },

            message: value => 'Revisa el nombre del espacio'
        }

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