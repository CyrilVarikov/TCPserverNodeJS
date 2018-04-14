const net = require('net');

const HOST = '127.0.0.1';
const PORT = 1300;

const client = new net.Socket();
client.connect(PORT, HOST, () => {

    console.log(`CONNECTED TO:  ${HOST}:${PORT}`);
    let date = new Date();
    client.write(date.toString());

});


client.on('data', (data) => {
    console.log('DATA: ' + data);
    client.destroy();
});

client.on('close', () => {
    console.log('Connection closed');
});