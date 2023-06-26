const { response } = require('express')
const Espacios = require('../models/espacios')
const { json } = require('body-parser')

const get_espacios = async (req, res = response) => {

    let mensaje = ''

    try {

        const espacios = await Espacios.find()
        mensaje = espacios

    } catch (error) {

        mensaje = error

    }

    res.json({

        espacios: mensaje

    })

}

const post_espacio = async (req, res = response) => {

    let mensaje = ''
    const body = req.body

    const espacios = new Espacios(body)

    console.log(espacios);

    try {

        await espacios.save({})
        mensaje = 'Espacio registrado exitosamente'

    } catch (error) {

        mensaje = error

    }
    res.json({

        espacios: mensaje

    })

}

const put_espacio = async (req, res = response) => {

    let mensaje = ''
    const body = req.body

    try {

        if (body.tipodemodificacion == 'unitario') {
            await Espacios.findOneAndUpdate(

                { _id: body._id },
                {

                    tipo_espacio: body.tipo_espacio,
                    nombre_espacio: body.nombre_espacio,
                    area: body.area,
                    capacidad: body.capacidad,
                    estado: body.estado

                })
                
            mensaje = 'Espacio actualizado exitosamente.'
            
        } else {
            await Espacios.updateMany(
                { _id: body._id },
                {
                    tipo_espacio: body.tipo_espacio,
                    nombre_espacio: body.nombre_espacio,
                    area: body.area,
                    capacidad: body.capacidad,
                    estado: body.estado
                }
            )

            mensaje = 'Espacio actualizado exitosamente.'
        }

    } catch (error) {

        mensaje = error

    }
    res.json({

        espacios: mensaje

    })

}

const delete_espacio = async (req, res) => {

    let mensaje = ''
    const body = req.body

    try {

        await Espacios.findOneAndDelete({ _id: body._id })
        mensaje = 'Espacio eliminado exitosamente'

    } catch (error) {

        mensaje = error

    }
    res.json({

        espacios: mensaje

    })
}

module.exports = {

    get_espacios,
    post_espacio,
    put_espacio,
    delete_espacio

}