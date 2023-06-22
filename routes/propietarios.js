const {Router} = require('express')

const route = Router()

const {get_propietarios, post_propietario, put_propietario, delete_propietario} = require('../controllers/propietarios')

route.get('/', get_propietarios)
route.post('/', post_propietario)
route.put('/', put_propietario)
route.delete('/', delete_propietario)

module.exports = route