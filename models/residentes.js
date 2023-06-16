const {Schema, model} = require('mongoose')

const schema_residente = Schema ({

    tipo_documento_residente: {

        type: String,
        enum: ['CC', 'CE'],
        // required: [true, 'El tipo de documento del residente es obligatorio']

    },

    numero_documento_residente: {

        type: String,
        // required: [true, 'El numero de documento del residente es obligatorio']

    },

    nombre_residente: {

        type: String,
        // required: [true, 'El nombre del residente es obligatorio']

    },

    apellido_residente: {

        type: String,
        // required: [true, 'El apellido del residente es obligatorio']
        
    },

    telefono_residente: {

        type: String,
        // required: [true, 'El numemero de telefono del residente es obligatorio']
        
    },

    fecha_nacimiento: {

        type: Date,
        // required: [true, 'La edad del residente es obligatorio'],
        min: [0, 'No hay edades menores a cero']
        
    },

    correo: {

        type: String,
        required: [true, 'El correo es obligatorio']

    },


    genero_residente: {

        type: String,
        enum: ['M', 'F', 'OTRO'],
        // required: [true, 'El genero residente es obligatorio']
        
    },
    
    tipo_residente: {

        type: String,
        enum:['PROPIETARIO', 'ARRENDATARIO '],
        // required: [true, 'El tipo de residente es obligatorio']

    },

    residencia: {

        type: String,
        // required: [true, 'La residencia es obligatorio']
        
    },

    habita: {

        type: Boolean,
        // required: [true, 'El estado de habita es obligatorio']
        
    },

    fecha_inicio: {

        type: Date,
        // required: [true, 'La fecha de inicio es obligatorio']
        
    },

    fecha_fin: {

        type: Date,

    },

    estado: {

        type: String,
        enum: ['ACTIVO', 'INACTIVO'],
        // required: [true, 'El estado del residente es obligatorio']
        
    }
})

module.exports = model('Residentes', schema_residente) 