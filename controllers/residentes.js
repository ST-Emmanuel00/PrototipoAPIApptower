const {response} = require('express') 
const Residentes = require('../models/residentes')
const { json } = require('body-parser')

const getResidentes = async(req, res = response) => {

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

const postResidentes =  async (req, res = response) => {

    let mensaje = ''
    const body = req.body
    
    const residente =  new Residentes(body)

    try{

        await residente.save({})
        mensaje = 'Residente registrado exitosamente'

    } catch(error){

        mensaje = error

    }
    res.json({

        residentes: mensaje

    })

}

const putResidente =  async (req, res = response) => {

    let mensaje = ''
    const body = req.body

    try{

        if (body.tipodemodificacion == 'unitario'){
            await Residentes.findOneAndUpdate({numero_documento_residente: body.numero_documento_residente})
            mensaje = 'Residente actualizado exitosamente. Modificacion simple'
        }else{
            await Residentes.updateMany({numero_documento_residente: body.numero_documento_residente})
            mensaje = 'Residente actualizado exitosamente. Modificación: Multiple'
        }

    }catch(error){

        mensaje = error

    }
    req.json({

        mensaje: mensaje

    })

}

const deleteResidente = async (req, res) => {

    let mensaje = ''
    const body = req.query

    try{

        await Residentes.findOneAndDelete({numero_documento_residente: body.numero_documento_residente})
        mensaje = 'Residente eliminado exitosamente'

    }catch(error){

        mensaje = error

    }
    res.json({

        mensaje: mensaje

    })
}

module.exports = {

    getResidentes,
    postResidentes,
    putResidente,
    deleteResidente

}