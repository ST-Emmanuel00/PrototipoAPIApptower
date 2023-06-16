const {response} = require ('express')
const Vigilante = require ('../models/vigilantes')

const getVigilante = async (req, res = response) => {
    let mensaje = ''
    try{
        const vigilantes = await Vigilante.find()
        mensaje = vigilantes
    }catch(err){
        mensaje = err
    }
    res.json({
        vigilantes:mensaje
    })
}

const postVigilante = async (req, res = response ) => {
    let mensaje = ''
    const body = req.body
    const vigilantes = new Vigilante( body)
    try{
        await vigilantes.save({})
        mensaje = 'Vigilante Registrado Exitosamente'
    }catch(err){
        mensaje = err
    }
    res.json({
        vigilantes
    })
}

const putVigilante = async (req, res) => {
    let mensaje = ''
    const body = req.body
    try{
        if(body.tipodemodificacion == 'unitaria'){
            await Vigilante.findOneAndUpdate({documento: body.documento}, {tipo_documento: body.tipo_documento, nombre: body.nombre,
            apellido: body.apellido, correo: body.correo, telefono: body.telefono,fechaNacimiento: body.fechaNacimiento, estado: body.estado})
            mensaje = 'Vigilante modificado exitosamente. Modificación: Sencilla'
        }else{
            await Vigilante.updateMany({nombre: body.nombre},{tipo_documento: body.tipo_documento,apellido: body.apellido, 
            correo: body.correo, telefono: body.telefono,fechaNacimiento: body.fechaNacimiento, estado: body.estado} )
            mensaje = 'Vigilante modificado exitosamente. Modificación: Múltiple'
        }
    }catch(e){
        mensaje = e
    }
    res.json({
        vigilantes: mensaje
    })
}

const deleteVigilante = async (req, res) => {
    let mensaje = ''
    const body = req.query
    try{
        await Vigilante.findOneAndDelete({documento: body.documento})
        mensaje = 'Eliminado Exitosamente'

    }catch(e){
        mensaje = e
    }
    res.json({
        vigilantes: mensaje
    })
}

module.exports ={
    deleteVigilante,
    getVigilante,
    postVigilante,
    putVigilante
}