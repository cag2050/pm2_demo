let http = require('http')

let data = {'name': 'cag', "sex": 'male'}
http
    .createServer((req, res) => {
        res.writeHead(200)
        res.end(JSON.stringify(data))
    })
    .listen(11111)