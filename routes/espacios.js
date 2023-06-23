const {Router} = require('express')

const route = Router()

const {get_espacios, post_espacio, put_espacio, delete_espacio} = require('../controllers/espacios')

route.get('/', get_espacios)
route.post('/', post_espacio)
route.put('/', put_espacio)
route.delete('/', delete_espacio)

module.exports = route