const { response } = require('express');
const vehiculo = require('../models/vehiculo');

const get_vehiculo = async (req, res = response) => {
    let mensaje = '';
    try {
        const vehiculo = await vehiculo.find();
        mensaje = vehiculo
    } catch (error) {
        mensaje = error
    }
    res.json({
        vehiculo: mensaje
    })
}

const post_vehiculo = async (req, res = response) => {
    let mensaje = ''
    const body = req.body
    const vehiculo = new vehiculo(body)

    try {

        await vehiculo.save();
        mensaje = 'Creado exitosamente'

    } catch (error) {
        mensaje = error
    }
    res.json({
        vehiculo: mensaje
    })
}

const put_vehiculo = async (req, res) => {
    let mensaje = '';
    const body = req.body;
    try {
        await
            vehiculo.FindOneAndUpdate({
                _id: body._id
            }, {
                placa: body.placa,
                tipo_dueño: body.tipo_dueño,
                dueño: body.dueño,
                espacio: body.espacio,
                estado: body.estado
            })
    } catch (error) {
        mensaje = error
    }
    res.json({
        vehiculo: mensaje
    })
}

const delete_vehiculo = async (req, res) => {
    const body = req.body
    let mensaje = '';
    try {
        await
            vehiculo.FindOneAndDelete({
                _id: body._id,
            })
        mensaje = 'Eliminado exitosamente'
    } catch (error) {
        mensaje = error
    }
    res.json({ vehiculo: mensaje });
}

module.exports = {
    get_vehiculo,
    post_vehiculo,
    put_vehiculo,
    delete_vehiculo
}