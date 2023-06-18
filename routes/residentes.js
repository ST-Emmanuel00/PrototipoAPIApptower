const {Router} = require('express')

const route = Router()

const {get_residentes, post_residente, put_residente, delete_residente} = require('../controllers/residentes')

route.get('/', get_residentes)
route.post('/', post_residente)
route.put('/', put_residente)
route.delete('/', delete_residente)

module.exports = route