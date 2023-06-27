const { Schema, model } = require('mongoose')

const schema_residente = Schema({

    tipo_documento_residente: {

        type: String,
        enum: ['CC', 'CE'],
        required: [true, 'El tipo de documento del residente es obligatorio']

    },

    numero_documento_residente: {

        type: String,
        validate: {
            validator: value => {
                const ER_tipo_documento = /^[0-9]+$/
                return ER_tipo_documento.test(value)
            },
        },
        required: [true, 'El numero de documento del residente es obligatorio'],
        unique: true

    },

    nombre_residente: {

        type: String,
        validate: {
            validator: value => {
                const ER_nombre = /^[A-Za-z\s]+$/
                return ER_nombre.test(value)
            },
        },
        required: [true, 'El nombre del residente es obligatorio']

    },

    apellido_residente: {

        type: String,
        validate: {
            validator: value => {
                const ER_apellido = /^[A-Za-z\s]+$/
                return ER_apellido.test(value)
            },
        },
        required: [true, 'El apellido del residente es obligatorio']

    },


    fecha_nacimiento: {

        type: Date,
        validate: {

            validator: value => {

                return new Date(value)

            },

        },
        required: [true, 'La edad del residente es obligatorio'],

    },


    genero_residente: {

        type: String,
        enum: ['M', 'F', 'OTRO'],
        required: [true, 'El genero residente es obligatorio']

    },

    telefono_residente: {

        type: String,
        validate:{

            validator: value => {

                const ER_telefono = /^[0-9]{10}$/
                return ER_telefono.test(value)
            },

        },
        required: [true, 'El numemero de telefono del residente es obligatorio']

    },


    correo: {

        type: String,

        validate:{
            validator: value => {

                const ER_correo = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
                return ER_correo.test(value)
            },
        },

        required: [true, 'El correo es obligatorio']

    },


    tipo_residente: {

        type: String,
        enum: ['PROPIETARIO', 'ARRENDATARIO'],
        required: [true, 'El tipo de residente es obligatorio']

    },

    residencia: {

        type: String,
        default: null,
        required: [true, 'La residencia es obligatorio']

    },

    habita: {

        type: Boolean,
        default: true,
        enum: [true, false],
        required: [true, 'El estado de habita es obligatorio']

    },

    fecha_inicio: {

        type: Date,
        required: [true, 'La fecha de inicio es obligatorio']

    },

    fecha_fin: {

        type: Date,
        default: null

    },

    estado: {

        type: String,
        enum: ['ACTIVO', 'INACTIVO'],
        required: [true, 'El estado del residente es obligatorio']

    }
})

module.exports = model('Residentes', schema_residente) 