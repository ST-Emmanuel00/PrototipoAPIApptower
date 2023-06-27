const { response } = require('express');
const Reservas = require('../models/reserva');

const getReservas = async (req, res = response) => {
  let mensaje = ''
    try{
        const reservas = await Reservas.find()
        mensaje = reservas
    }catch(e){
        mensaje = e
    }
    res.json({
        reservas : mensaje
    })
};

const createReserva = async (req, res = response) => {
  let mensaje = ''
  const body = req.body
  const reservas = new Reservas(body)
  console.log(body)
  try {
    await reservas.save()
    mensaje = 'Reserva Registrada Exitosamente'
  } catch (e) {
    mensaje = e
  }
  res.json({
    reservas: mensaje
  })
  console.log(mensaje)
};

const updateReserva = async (req, res = response) => {
  let mensaje = ''
  const body = req.body
  try {
    if (body.tipoModificacion == 'Unitaria') {
      await Reservas.findOneAndUpdate({ _id: body._id }, { tipo_espacio: body.tipo_espacio, espacio: body.espacio, propietario: body.propietario, fecha_Reserva: body.fecha_Reserva, vehiculo: body.vehiculo, parqueadero: body.parqueadero, personas: body.personas, estado: body.estado})
      mensaje = 'Reserva modificada exitosamente.'
    } else {
      await Reservas.updateMany({ _id: body._id }, { tipo_espacio: body.tipo_espacio, espacio: body.espacio, propietario: body.propietario, fecha_Reserva: body.fecha_Reserva, vehiculo: body.vehiculo, parqueadero: body.parqueadero, personas: body.personas, estado: body.estado })
      mensaje = 'Reserva modificada exitosamente.'
    }

  } catch (e) {
    mensaje = e
  }
  res.json({
    reservas: mensaje
  });
};

const deleteReserva = async (req, res = response) => {
  let mensaje = ''
  const body = req.body
  try{
      await Reservas.findOneAndDelete({_id: body._id})
      mensaje = 'Eliminado Exitosamente'
  }catch(e){
      mensaje = e
  }
  res.json({
      reservas: mensaje
  })
};

module.exports = {
  getReservas,
  createReserva,
  updateReserva,
  deleteReserva
};
