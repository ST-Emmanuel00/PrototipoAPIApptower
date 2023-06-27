const {Router} = require('express')

const routes = Router()

const {get_notificaciones,post_notificaciones} = require('../controllers/notificaciones');





routes.post('/', (req,res)=>{
    post_notificaciones
})
routes.get('/',get_notificaciones)
module.exports = routes

