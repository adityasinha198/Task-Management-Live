const app = require('../app') 
const http = require('http')

let port = 3000
app.set("port",port)

const server = http.createServer(app)

server.listen(port)