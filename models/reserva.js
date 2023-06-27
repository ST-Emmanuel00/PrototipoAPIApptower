const { Schema, model } = require('mongoose');

const reservaSchema = Schema({
  tipo_espacio: {
    type: String,
    required: [true, 'El tipo de espacio es requerido'],
    enum: ['ZONA HUMEDA', 'SALON SOCIAL', 'PARQUEADERO']
  },

  espacio: {
    type: String,
    required: [true, 'El espacio es requerido'],
    enum: ['PISCINA', 'ZAUNA', 'SALON SOCIAL', 'PARQUEADERO']
  },

  propietario: {
    type: String,
    required: [true, 'El nombre es requerido']
  },

  fecha_Peticion: {
    type: Date,
    required: [true, 'La fecha inicial es requerida']
  },

  fecha_Reserva: {
    type: Date,
    required: [true, 'La fecha inicial es requerida']
  },

  vehiculo: {
    type: String,
    default: 'N/A'
  },

  parqueadero: {
    type: String,
    default: 'N/A'
  },

  estado: {
    type: String,
    default: 'Pendiente'
  },

  personas: {
    type: Number,
    required: [true, 'Debes ingresar al menos 1 persona']
  }
});

module.exports = model('Reservas', reservaSchema);
