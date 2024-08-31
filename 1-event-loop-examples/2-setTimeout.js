const { log } = require("console");

//started operating system process
log(`first`)

setTimeout(() => {
    log('second')
}, 0)

log(`third`)
// completed and executed operating system process