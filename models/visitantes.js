const {Schema, model} = require('mongoose')

const schema_visitante = Schema ({

    tipo_documento_visitante: {

        type: String,
        enum: ['CC', 'CE'],
        required: [true, 'El tipo de documento del residente es obligatorio']

    },

    numero_documento_visitante: {

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

    nombre_visitante: {

        type: String,
        validate: {
            validator: value => {
                const ER_nombre = /^[A-Za-z\s]+$/
                return ER_nombre.test(value)
            },
        },
        required: [true, 'El nombre del residente es obligatorio']

    },

    apellido_visitante: {

        type: String,
        validate: {
            validator: value => {
                const ER_apellido = /^[A-Za-z\s]+$/
                return ER_apellido.test(value)
            },
        },
        required: [true, 'El apellido del residente es obligatorio']
        
    },


    genero_visitante: {

        type: String,
        enum: ['M', 'F', 'OTRO'],
        required: [true, 'El genero visitante es obligatorio']
        
    },

    tipo_visitante: {

        type: String,
        enum: ['OCASIONAL', 'FRECUENTE'],
        required: [true, 'El tipo de visitante es obligatorio']
        
    },


    anfitrion: {

        type: String,
        default: null,
        required: [true, 'El anfitrion es obligatorio']
        
    },


    permiso: {

        type: String,
        enum: ['PERMITIDO', 'NO PERMITIDO'],
        default: 'NO PERMITIDO' ,
        required: [true, 'El permiso del visitante es obligatorio']
        
    }
})

module.exports = model('Visitantes', schema_visitante) 