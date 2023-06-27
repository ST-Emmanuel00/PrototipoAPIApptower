const {Router} = require('express')

const route = Router()

const{get_vehiculo, post_vehiculo, put_vehiculo, delete_vehiculo} = require('../controllers/vehiculo')

route.get  ('/', get_vehiculo)
route.post  ('/', post_vehiculo)
route.put  ('/', put_vehiculo)
route.delete  ('/', delete_vehiculo)
module.exports = route
