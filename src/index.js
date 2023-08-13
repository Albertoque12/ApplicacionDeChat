const realTimeServer = require('./realTimeServer')
const app = require('./server')

const port = 3000

const httpServer = app.listen(port, ()=> {
    console.log(port)
})

realTimeServer(httpServer)