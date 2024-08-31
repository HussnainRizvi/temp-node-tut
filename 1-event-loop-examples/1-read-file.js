const { log } = require("console")
const { readFile } = require(`fs`)

log(`started a first task`)

readFile(`./content/first.txt`, `utf8`, (err, result) => {
    if (err) {
        log(err)
        return
    }
    log(result)
    log(`completed first task`)
})

log(`starting next task`)