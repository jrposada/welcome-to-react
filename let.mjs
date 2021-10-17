let myGlobal = "I'm global... am I?"
let myVar = "I'm a var"

if (true) {
    let myVar = 'intercepted'
}

function What() {
    console.log(`What? Global: ${myGlobal}`)
    console.log(`What? Before: ${myVar}`)
    let myVar = 'what is this?'
    console.log(`What? After: ${myVar}`)
}

console.log(`Before myVar: ${myVar}`)
What()
console.log(`After myVar: ${myVar}`)

console.log(`Before myHoistedVar: ${myHoistedVar}`)
let myHoistedVar = "I'been hoisted!"
console.log(`After myHoistedVar: ${myHoistedVar}`)

////////////
// Output //
////////////

// Before myVar: 
// What? Global: 
// What? Before: 
// What? After: 
// After myVar: 
// Before myHoistedVar: 
// After myHoistedVar: 