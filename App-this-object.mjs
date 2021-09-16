let myObject = {
    human: 'paco',
    myAnonFunction: function() {
        console.log("I'm saved anonymus!", this?.human)
    },
    myNamedFunction: function myName() {
        console.log("I saved have a name!",this?.human)
    },
    myArrowFunction: () => {
        console.log("Event better than Legolas!", this?.human)
    },
    oneLiner: () => console.log("One liner", this?.human),
    iief:
    (function (){
        console.log("I'm an anonymus IIFE", this?.human)
    })(),
    namedIief: (function namedIife(){
        console.log("I'm a named IIFE ", this?.human)
    })()
};

myObject.myAnonFunction()
myObject.myNamedFunction()
myObject.myArrowFunction()
myObject.oneLiner()
