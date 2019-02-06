var http = require("http");

var data = require('./data.json')

var server = http.createServer(function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.write(JSON.stringify(data))
    res.end();
})

server.listen(1234);