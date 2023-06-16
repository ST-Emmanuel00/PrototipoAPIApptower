const {response} = require('express');
const Usuario = require ('../models/usuarios')

const getUsuario = async(req, res=response) => {
    let mensaje = ''
    try {
        const usuarios = await Usuario.find()
        mensaje = usuarios
    } catch (error) {
        mensaje = error
    }

  
    res.json({
        roles: mensaje
    })
}

const postUsuario = async(req, res = response) =>{ 
    const body = req.body 
    let mensaje = ''
    const usuario = new Usuario(body)
    console.log(body)
    try {
        await usuario.save({})
        mensaje = 'Usuario registrado exitosamente'
    } catch (error) {
        mensaje = error
    }

    res.json({
        roles: mensaje
    })
   
}

const putUsuario = async(req, res = response) =>{
      const body = req.body
    
    let mensaje = ''

    try {
        if(body.tipoModificacion == 'Unitaria'){
            await Usuario.findOneAndUpdate({documento: body.documento}, {tipo_documento: body.tipo_documento, nombre: body.nombre,
                apellido: body.apellido, correo: body.correo, telefono: body.telefono, rol: body.rol,password: body.password})
            mensaje = 'Usuario modificado exitosamente. Modificación: Sencilla'
        }
        else{
            await Usuario.updateMany({password:body.password}, {tipo_documento: body.tipo_documento, nombre: body.nombre,
                apellido: body.apellido, correo: body.correo, telefono: body.telefono, rol: body.rol})
            mensaje = 'Usuario modificado exitosamente. Modificación: Múltiple'
        }


    } catch (error) {
        mensaje = error
    }
    res.json({
        roles: mensaje
    })
   
}


const deleteUsuario = async(req, res = response) =>{
    //Actualización de datos
    const body = req.query //Desestructuración
    let mensaje = ''

    try {
        await Usuario.findOneAndDelete({nombre:body.nombre})
        mensaje = 'Eliminado exitosamente'
    } catch (error) {
        mensaje = error
    }
    res.json({
        roles: mensaje
    })
   
}

module.exports = {
    getUsuario,
    postUsuario,
    putUsuario,
    deleteUsuario
}
