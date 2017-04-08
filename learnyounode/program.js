const http = require('http');
const url = require('url');
const map = require('through2-map');

http.createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'application/json'});
    
    const parsedUrl = url.parse(req.url, true);
    const queryString = parsedUrl.query.iso;
    const date = new Date(queryString);

    if(parsedUrl.pathname === '/api/parsetime') {
        res.end(JSON.stringify({
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds()
        }));
    } 

    if (parsedUrl.pathname === '/api/unixtime') {
        res.end(JSON.stringify({
            unixtime: date.getTime()
        }))
    } 

    res.writeHead(404);
    res.end();
    
}).listen(process.argv[2]);