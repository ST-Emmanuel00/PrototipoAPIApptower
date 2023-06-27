const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const db_connection = require('../data_base/config');

class Server {
    
    constructor () {
        
        this.app = express()

        this.port = process.env.PORT

        this.usuarioPath = '/api/usuario' 
        this.rolesPath = '/api/roles'
        this.vigilantesPath = '/api/vigilantes'

        this.residentesPath = '/api/residentes'

        this.notificacionPath = '/api/notificacion' 
        this.vehiculoPath = '/api/vehiculo'
        this.reservasPath = '/api/reservas'

        this.middlewares()

        this.routes()

        this.db_connect()

    }

    middlewares() 
    {
        this.app.use(express.static(__dirname + "/public"));
        this.app.use( cors() );
        this.app.use(bodyParser.json()) // for parsing application/json
        this.app.use(bodyParser.urlencoded({ extended: true }))
    }

    routes()
    {

        this.app.use(this.usuarioPath, require('../routes/usuarios'))
        this.app.use(this.vigilantesPath, require('../routes/vigilantes'))
        this.app.use(this.rolesPath, require ('../routes/roles'))
        this.app.use(this.notificacionPath, require('../routes/notificaciones'))
        this.app.use(this.reservasPath, require('../routes/reservas'))
        this.app.use(this.vehiculoPath, require('../routes/vehiculos'))
        this.app.use(this.residentesPath, require ('../routes/residentes'))

        
          
    }

    async db_connect(){

        await db_connection(mongoose)

    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Escuchando el puerto ${this.port}`)
        })
    }
}

module.exports = Server