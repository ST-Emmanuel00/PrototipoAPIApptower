const {Schema, model} = require('mongoose')

const schema_propietario = Schema ({

    tipo_documento_propietario: {

        type: String,
        enum: ['CC', 'CE'],
        required: [true, 'El tipo de documento del residente es obligatorio']

    },

    numero_documento_propietario: {

        type: String,
        unique: true,

        validate:{
            validator: value => {
                const ER_tipo_documento = /^[0-9]+$/
                return ER_tipo_documento.test(value)
            },
        },
        required: [true, 'El numero de documento obligatorio']

    },

    nombre_propietario: {

        type: String,
        validate:{
            validator: value => {
                const ER_nombre = /^[A-Za-z\s]+$/
                return ER_nombre.test(value)
            },
        },
        required: [true, 'El nombre del propietario es obligatorio']

    },

    apellido_propietario: {

        type: String,
        validate:{
            validator: value => {
                const ER_apellido = /^[A-Za-z\s]+$/
                return ER_apellido.test(value)
            },
        },

        required: [true, 'El apellido del propietario es obligatorio']
        
    },


    fecha_nacimiento: {

        type: Date,
        validate:{
            validator: value => {

                return new Date (value)

            },
        },
        required: [true, 'La fecha nacimiento es obligatorio'],
        
    },


    genero_propietario: {

        type: String,
        enum: ['M', 'F', 'OTRO'],
        required: [true, 'El genero propietario es obligatorio']
        
    },

    telefono_propietario: {

        type: String,
        validate:{

            validator: value => {

                const ER_telefono = /^[0-9]{10}$/
                return ER_telefono.test(value)
            },

        },
        required: [true, 'El numemero de telefono del propietario es obligatorio']
        
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

    

    propiedad: {

        type: String,
        required: [true, 'La residencia es obligatorio']
        
    },


    estado: {

        type: String,
        enum: ['ACTIVO', 'INACTIVO'],
        default: 'ACTIVO' ,
        required: [true, 'El estado del residente es obligatorio']
        
    }
})

module.exports = model('Propietarios', schema_propietario) 