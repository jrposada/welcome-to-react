var myGlobal = "I'm global... am I?"
var myVar = "I'm a var"

if (false) {
    var myVar = 'intercepted'
}

function What() {
    console.log(`What? Global: ${myGlobal}`)
    console.log(`What? Before: ${myVar}`)
    var myVar = 'what is this?'
    console.log(`What? After: ${myVar}`)
}

console.log(`Before myVar: ${myVar}`)
What()
console.log(`After myVar: ${myVar}`)

console.log(`Before myHoistedVar: ${myHoistedVar}`)
var myHoistedVar = "I'been hoisted!"
console.log(`After myHoistedVar: ${myHoistedVar}`)