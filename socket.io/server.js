console.log("servidor iniciado");

const express = require("express");
const app = express();

const http = require("http");

const server = http.createServer(app);


app.use(express.static('public'))

const io= require("socket.io")(server);
server.listen(3000);
/*
const io = socketIo.listen(server);
*/
io.on("connect", (socket)=>{

   // console.log("nueva conexion id: " + socket.id);

    /*
    io.on('evento', ()=>{}); // on :recibe info del cliente y lo procesa en el server

    io.emit('evento2', datos);//emit: emite info del server para utilizar en el cliente (html)
   */
    socket.on('datos_usuarios', function(datos){

        console.log('correo: '+datos.correo +' usuario: '+datos.usuario);
        
        //io.emit('nuevo_usuario', {user: datos.usuario});

    });

}); 