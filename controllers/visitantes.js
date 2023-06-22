const { response } = require('express')
const Visitantes = require('../models/visitantes')
const { json } = require('body-parser')

const get_visitantes = async (req, res = response) => {

    let mensaje = ''

    try {

        const visitantes = await Visitantes.find()
        mensaje = visitantes

    } catch (error) {

        mensaje = error

    }

    res.json({

        visitantes: mensaje

    })

}

const post_visitante = async (req, res = response) => {

    let mensaje = ''
    const body = req.body

    const visitantes = new Visitantes(body)

    try {

        await visitantes.save({})
        mensaje = 'Visitante registrado exitosamente'

    } catch (error) {

        mensaje = error

    }
    res.json({

        visitantes: mensaje

    })

}

const put_visitante = async (req, res = response) => {

    let mensaje = ''
    const body = req.body

    try {

        if (body.tipodemodificacion == 'unitario') {
            await Visitantes.findOneAndUpdate(
                { _id: body._id },
                {
                    tipo_documento_visitante: body.tipo_documento_visitante,
                    numero_documento_visitante: body.numero_documento_visitante,
                    nombre_visitante: body.nombre_visitante,
                    apellido_visitante: body.apellido_visitante,
                    genero_visitante: body.genero_visitante,
                    tipo_visitante: body.tipo_visitante,
                    anfitrion: body.anfitrion,
                    permiso: body.permiso,

                })
            mensaje = 'Visitante actualizado exitosamente. Modificacion simple'
            
        } else {
            await Visitantes.updateMany(
                { _id: body._id },
                {
                    tipo_documento_visitante: body.tipo_documento_visitante,
                    numero_documento_visitante: body.numero_documento_visitante,
                    nombre_visitante: body.nombre_visitante,
                    apellido_visitante: body.apellido_visitante,
                    genero_visitante: body.genero_visitante,
                    tipo_visitante: body.tipo_visitante,
                    anfitrion: body.anfitrion,
                    permiso: body.permiso,
                }
            )

            mensaje = 'Visitante actualizado exitosamente. Modificación: Multiple'
        }

    } catch (error) {

        mensaje = error

    }
    res.json({

        visitantes: mensaje

    })

}

const delete_visitante = async (req, res) => {

    let mensaje = ''
    const body = req.body

    try {

        await Visitantes.findOneAndDelete({ _id: body._id })
        mensaje = 'Visitante eliminado exitosamente'

    } catch (error) {

        mensaje = error

    }
    res.json({

        visitantes: mensaje

    })
}

module.exports = {

    get_visitantes,
    post_visitante,
    put_visitante,
    delete_visitante

}