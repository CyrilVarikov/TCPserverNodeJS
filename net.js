const net = require('net');

const HOST = '127.0.0.1';
const PORT = 1300;


net.createServer((socket) =>{
    console.log(`CONNECTED:  ${socket.remoteAddress} : ${socket.remotePort}`);
    socket.on('data', (data) =>{
        
      console.log(`Data from ${socket.remoteAddress} is: ${data}`);
      socket.write(data);

    });
    
    socket.on('close', (data) => {
        console.log(`CLOSED:  ${socket.remoteAddress}  ${socket.remotePort}`);
    });
    
}).listen(PORT, HOST);

console.log('Server listening on ' + HOST +':'+ PORT);