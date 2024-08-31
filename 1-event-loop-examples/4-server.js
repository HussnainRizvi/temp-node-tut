const { log } = require("console")
const http = require(`http`)

const server = http.createServer((req, res) => {
    log(`request event`)
    res.end(`Hello World`)
})

server.listen(5000, () => {
    log(`Server listening on port : 5000.....`)
})