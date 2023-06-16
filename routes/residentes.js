const {Router} = require('express')

const route = Router()

const {getResidentes, postResidentes, putResidente, deleteResidente} = require('../controllers/residentes')

route.get('/', getResidentes)
route.post('/', postResidentes)
route.put('/', putResidente)
route.delete('/', deleteResidente)

module.exports = route