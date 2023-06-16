const {Router} = require ('express')
const route = Router()
const {getVigilante, putVigilante, postVigilante, deleteVigilante}= require ('../controllers/vigilantes')

route.get('/', getVigilante)
route.put('/', putVigilante)
route.post('/', postVigilante)
route.delete('/', deleteVigilante)

module.exports = route