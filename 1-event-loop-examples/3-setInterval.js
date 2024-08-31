const { log } = require("console");

setInterval(() => {
    log('hello world')
}, 2000)

log(`I will run first`)
// process stays alive unless
// Kill the process ctrl + c
// unexpected error