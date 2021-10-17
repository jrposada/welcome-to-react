let example = {
    name: 'paco',
    myAnonFunction: function() {
        console.log("I'm anonymus!", this?.human)
    },
    myNamedFunction: function myName() {
        console.log("I have a name!",this?.human)
    },
    myArrowFunction: () => {
        console.log("Even better than Legolas!", this?.human)
    },

    oneLiner: () => console.log("One liner", this?.human),
    iief:
    (function (){
        console.log("I'm an anonymus IIFE", this?.human)
    })(),
    namedIief: (function namedIife(){
        console.log("I'm a named IIFE", this?.human)
    })()
};

console.log("I'm", example.name)
example.myAnonFunction()
example.myNamedFunction()
example.myArrowFunction()
example.oneLiner()

////////////
// Output //
////////////

// I'm an anonymus IIFE 
// I'm a named IIFE 
// I'm 
// I'm anonymus! 
// I have a name! 
// Even better than Legolas! 
// One liner 
