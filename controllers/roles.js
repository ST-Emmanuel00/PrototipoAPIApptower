const {response} = require('express');
const Roles = require('../models/roles')

const getRoles = async (req, res = response) =>{
    let mensaje = ''
    try{
        const roles = await Roles.find()
        mensaje = roles
    }catch(e){
        mensaje = e
    }
    res.json({
        roles : mensaje
    })
}

const postRoles = async (req, res) =>{
    let mensaje = ''
    const body = req.body
    const roles = new Roles(body)
    try{
        await roles.save({})
        mensaje = 'Rol Registrado Exitosamente'
    }catch(e){
        mensaje = e
    }
    res.json({
        roles: mensaje
    })
}

const putRoles = async (req, res) => {
    let mensaje = ''
    const body = req.body
    try{
        if (body.tipodemodificacion == 'unitario'){
            await Roles.findOneAndUpdate({nombreRol: body.nombreRol}, {descripcionRol: body.descripcionRol, permisos: body.permisos, estado: body.estado})
            mensaje = 'Rol modificado exitosamente. Modificación: Sencilla'
        }else{
            await Roles.updateMany({estado: body.estado}, {descripcionRol: body.descripcionRol, permisos: body.permisos})
            mensaje = 'Rol modificado exitosamente. Modificación: Multiple'
        }

    }catch(e){
        mensaje = e
    }
    req.json({
        roles: mensaje
    })

}

const deleteRoles = async(req, res) => {
    let mensaje = ''
    const body = req.query
    try{
        await Roles.findOneAndDelete({nombreRol: body.nombreRol})
        mensaje = 'Eliminado Exitosamente'
    }catch(e){
        mensaje = e
    }
    res.json({
        roles: mensaje
    })
}

module.exports = {
    deleteRoles,
    postRoles,
    putRoles,
    getRoles
}