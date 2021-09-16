let myAnonFunction = function() {
    console.log("I'm saved anonymus!")
    console.trace()
}

let myNamedFunction = function myName() {
    console.log("I saved have a name!")
    console.trace()
}

let myArrowFunction = () => {
    console.log("Event better than Legolas!")
    console.trace()
}

let oneLiner = () => console.log("One liner");

(function (){
    console.log("I'm an anonymus IIFE")
    console.trace()
})();

(function namedIife(){
    console.log("I'm a named IIFE ")
    console.trace()
})();

myAnonFunction()
myNamedFunction()
myArrowFunction()
oneLiner()
hoistedFunction()

function hoistedFunction() {
    console.log('Hoisted!')
}