const express = require('express');
const cors = require('cors');

class Server {

    constructor () {
        this.app = express();
        this.port = process.env.PORT;
        //Middlewares
        this.middlewares();
        //Rutas de mi app
        this.routes();
    };

    middlewares() {
        //Cors
        this.app.use(cors());
        // Lectura y parseo del body
        this.app.use( express.json() );
        //Carpeta publica
        this.app.use(express.static('public'));
    }

    routes() {
        
        this.app.use('/api/usuarios', require('../routes/usuarios'));

    };

    listen() {
        this.app.listen(this.port,()=> {
            console.log(`Servidor funcionando en el puerto: ${ this.port }`);
        });
    }

};

module.exports = Server;