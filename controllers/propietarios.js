const { response } = require('express')
const Propietarios = require('../models/propietarios')
const { json } = require('body-parser')

const get_propietarios = async (req, res = response) => {

    let mensaje = ''

    try {

        const propietarios = await Propietarios.find()
        mensaje = propietarios

    } catch (error) {

        mensaje = error

    }

    res.json({

        propietarios: mensaje

    })

}

const post_propietario = async (req, res = response) => {

    let mensaje = ''
    const body = req.body

    const propietario = new Propietarios(body)

    try {

        await propietario.save({})
        mensaje = 'propietario registrado exitosamente'

    } catch (error) {

        mensaje = error

    }
    res.json({

        propietarios: mensaje

    })

}

const put_propietario = async (req, res = response) => {

    let mensaje = ''
    const body = req.body

    try {

        if (body.tipodemodificacion == 'unitario') {
            await Propietarios.findOneAndUpdate(
                { _id: body._id },
                {
                    tipo_documento_propietario: body.tipo_documento_propietario,
                    numero_documento_propietario: body.numero_documento_propietario,
                    nombre_propietario: body.nombre_propietario,
                    apellido_propietario: body.apellido_propietario,
                    fecha_nacimiento: body.fecha_nacimiento,
                    genero_propietario: body.genero_propietario,
                    telefono_propietario: body.telefono_propietario,
                    correo: body.correo,
                    propiedad: body.propiedad,
                    estado: body.estado,

                })
            mensaje = 'propietario actualizado exitosamente. Modificacion simple'
            
        } else {
            await Propietarios.updateMany(
                { _id: body._id },
                {
                    tipo_documento_propietario: body.tipo_documento_propietario,
                    numero_documento_propietario: body.numero_documento_propietario,
                    nombre_propietario: body.nombre_propietario,
                    apellido_propietario: body.apellido_propietario,
                    fecha_nacimiento: body.fecha_nacimiento,
                    genero_propietario: body.genero_propietario,
                    telefono_propietario: body.telefono_propietario,
                    correo: body.correo,
                    propiedad: body.propiedad,
                    estado: body.estado,
                }
            )

            mensaje = 'propietario actualizado exitosamente. Modificación: Multiple'
        }

    } catch (error) {

        mensaje = error

    }
    res.json({

        propietarios: mensaje

    })

}

const delete_propietario = async (req, res) => {

    let mensaje = ''
    const body = req.body

    try {

        await Propietarios.findOneAndDelete({ _id: body._id })
        mensaje = 'propietario eliminado exitosamente'

    } catch (error) {

        mensaje = error

    }
    res.json({

        propietarios: mensaje

    })
}

module.exports = {

    get_propietarios,
    post_propietario,
    put_propietario,
    delete_propietario

}