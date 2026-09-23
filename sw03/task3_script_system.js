require('./scripts.js')

function oldAndLiving(SCRIPT) {
    let result = []
    for (let i = 0; i < SCRIPT.length; i++) {
        if(SCRIPT[i].year < 0 && SCRIPT[i].living) {
            result.push(SCRIPT[i].name)
        }
    }

    return result
}

function numberOfCodes(script) {
    return script.ranges.reduce((count, [from, to]) => count + (to - from), 0)
}

console.log(oldAndLiving(SCRIPTS))
console.log("Script name: " + SCRIPTS[0].name + ", Code length: " + numberOfCodes(SCRIPTS[0]))

