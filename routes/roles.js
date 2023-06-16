const {Router} = require ('express')
const route = Router()
const {getRoles, deleteRoles,postRoles, putRoles} = require ('../controllers/roles')

route.get('/', getRoles)
route.post('/', postRoles)
route.put('/', putRoles)
route.delete('/', deleteRoles)

module.exports = route