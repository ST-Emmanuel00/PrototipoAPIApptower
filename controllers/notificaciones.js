const {response} = require('express');
const notificaciones = require('../models/notificaciones');
const { json } = require('body-parser');


const get_notificaciones = async (req, res = response) => {

    let mensaje = '';

    try {
        const notificacion = await notificaciones.find();
        mensaje = notificacion
    } catch (error) {
        mensaje = error
    }

    res.json({
        notificacion: mensaje
    })
}

const post_notificaciones = async (req, res=response) => {
    const body= req.body
    let = mensaje = ''
    const notifi = new notificaciones(body)
    console.log(body)
    try {
        await notifi.save()
        mensaje = 'success'
    } catch (error) {
        mensaje = error
    }

    res.json({
        mensaje
    })
}

module.exports = {get_notificaciones,post_notificaciones}