const {Schema, model} = require ('mongoose')

const usuario_schema = Schema ({
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
    rol:{
        type: String,
        enum: ['Administrador', 'Vigilante', 'Residente']
    }, 
    // fechaCreacion:{
    //     type: Date,
    //     required: [true, 'La fecha es obligatoria']
    // },
    password: {
        type: String,
        required: [true, 'El password es obligatorio'],
        minlength: [8, 'Mínimo debe digitar 8 caracteres'],
        maxlength: [10, 'Máximo debe digitar 10 caracteres']
    },
   })

module.exports = model('Usuario', usuario_schema)