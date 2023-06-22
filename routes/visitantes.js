const {Router} = require('express')

const route = Router()

const {get_visitantes, post_visitante, put_visitante, delete_visitante} = require('../controllers/visitantes')

route.get('/', get_visitantes)
route.post('/', post_visitante)
route.put('/', put_visitante)
route.delete('/', delete_visitante)

module.exports = route