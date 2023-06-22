const {Schema, model} = require('mongoose')

const schema_propietario = Schema ({

    tipo_documento_propietario: {

        type: String,
        enum: ['CC', 'CE'],
        required: [true, 'El tipo de documento del residente es obligatorio']

    },

    numero_documento_propietario: {

        type: String,
        required: [true, 'El numero de documento del residente es obligatorio'],
        unique: true

    },

    nombre_propietario: {

        type: String,
        required: [true, 'El nombre del residente es obligatorio']

    },

    apellido_propietario: {

        type: String,
        required: [true, 'El apellido del residente es obligatorio']
        
    },


    fecha_nacimiento: {

        type: Date,
        required: [true, 'La edad del propietario es obligatorio'],
        
    },


    genero_propietario: {

        type: String,
        enum: ['M', 'F', 'OTRO'],
        required: [true, 'El genero propietario es obligatorio']
        
    },

    telefono_propietario: {

        type: String,
        required: [true, 'El numemero de telefono del propietario es obligatorio']
        
    },

    
    correo: {

        type: String,
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