const { Schema, model } = require('mongoose')

const vigilanteSchema = Schema({
    tipo_documento:{
        type: String,
        enum :['CC', 'CE'],
        required : [true, 'El tipo de documeto es obligatorio']
    },
    documento:{
        type: Number,
        required: [true, 'El documento es obligatorio'],
        maxlength:[10, 'Maximo debe digitar 10 numeros']
    },
    nombre:{
        type: String,
        required: [true, 'El nombre es obligatorio']
    }, 
    apellido:{
        type: String,
        required: [true, 'El apellido es obligatorio']
    },
    correo:{
        type: String,
        required:[true, 'El correo es obligatorio']
    },
   
    telefono:{
        type:Number,
        maxlength:[10, 'Maximo debe digitar 10 numeros']
    },
    fechaNacimiento: {
        type: Date,
        required:[true, 'La fecha de nacimiento es obligatorio']
    },
    estado: {
        type: Boolean,
        default: true,
        required: [true, 'El estado es obigatorio']
    }
})

module.exports = model ('Vigilante', vigilanteSchema)