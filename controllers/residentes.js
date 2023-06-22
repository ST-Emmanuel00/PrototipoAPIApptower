const { response } = require('express')
const Residentes = require('../models/residentes')
const { json } = require('body-parser')

const get_residentes = async (req, res = response) => {

    let mensaje = ''

    try {

        const residentes = await Residentes.find()
        mensaje = residentes

    } catch (error) {

        mensaje = error

    }

    res.json({

        residentes: mensaje

    })

}

const post_residente = async (req, res = response) => {

    let mensaje = ''
    const body = req.body

    const residente = new Residentes(body)

    try {

        await residente.save({})
        mensaje = 'Residente registrado exitosamente'

    } catch (error) {

        mensaje = error

    }
    res.json({

        residentes: mensaje

    })

}

const put_residente = async (req, res = response) => {

    let mensaje = ''
    const body = req.body

    try {

        if (body.tipodemodificacion == 'unitario') {
            await Residentes.findOneAndUpdate(
                { _id: body._id },
                {
                    tipo_documento_residente: body.tipo_documento_residente,
                    numero_documento_residente: body.numero_documento_residente,
                    nombre_residente: body.nombre_residente,
                    apellido_residente: body.apellido_residente,
                    fecha_nacimiento: body.fecha_nacimiento,
                    genero_residente: body.genero_residente,
                    telefono_residente: body.telefono_residente,
                    correo: body.correo,
                    tipo_residente: body.tipo_residente,
                    residencia: body.residencia,
                    habita: body.habita,
                    // fecha_inicio: body.fecha_inicio esta dato no se edita
                    fecha_fin: body.fecha_fin,
                    estado: body.estado,

                })
            mensaje = 'Residente actualizado exitosamente. Modificacion simple'
            
        } else {
            await Residentes.updateMany(
                { _id: body._id },
                {
                    tipo_documento_residente: body.tipo_documento_residente,
                    numero_documento_residente: body.numero_documento_residente,
                    nombre_residente: body.nombre_residente,
                    apellido_residente: body.apellido_residente,
                    fecha_nacimiento: body.fecha_nacimiento,
                    genero_residente: body.genero_residente,
                    telefono_residente: body.telefono_residente,
                    correo: body.correo,
                    tipo_residente: body.tipo_residente,
                    residencia: body.residencia,
                    habita: body.habita,

                    // fecha_inicio: body.fecha_inicio esta dato no se edita
                    fecha_fin: body.fecha_fin,
                    estado: body.estado,
                }
            )

            mensaje = 'Residente actualizado exitosamente. Modificación: Multiple'
        }

    } catch (error) {

        mensaje = error

    }
    res.json({

        residentes: mensaje

    })

}

const delete_residente = async (req, res) => {

    let mensaje = ''
    const body = req.body

    try {

        await Residentes.findOneAndDelete({ _id: body._id })
        mensaje = 'Residente eliminado exitosamente'

    } catch (error) {

        mensaje = error

    }
    res.json({

        residentes: mensaje

    })
}

module.exports = {

    get_residentes,
    post_residente,
    put_residente,
    delete_residente

}