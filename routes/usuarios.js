const {Router} = require ('express')
const route = Router()
const { getUsuario, postUsuario, putUsuario, deleteUsuario} = require ('../controllers/usuarios')

route.get('/usuario', getUsuario)
route.post('/usuario', postUsuario)
route.put('/usuario', putUsuario)
route.delete('/usuario', deleteUsuario)

module.exports = route