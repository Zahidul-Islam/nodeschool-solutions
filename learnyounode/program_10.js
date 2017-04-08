const net = require('net');
const server = net.createServer(socket => {
    const pad = (n) => n < 10 ? '0' + n : n; 

    const currentDate = new Date();
    const format = `${currentDate.getFullYear()}-${pad(currentDate.getMonth() + 1)}-${pad(currentDate.getDate())} ${pad(currentDate.getHours())}:${pad(currentDate.getMinutes())}\n`;
    socket.end(format);
});

server.listen(process.argv[2]);