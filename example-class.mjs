class ExampleClass {
    constructor(){
        this.name = 'Paco'
    }

    myMethod() {
        console.log("I'm", this.name)

        let that = this
        let myAnonFunction = function() {
            console.log("I'm anonymus! This", this?.name)
            console.log("I'm anonymus! That", that?.name)
        }
        
        let myNamedFunction = function myName() {
            console.log("I have a name! This", this?.name)
            console.log("I have a name! That", that?.name)
        }
        
        let myArrowFunction = () => {
            console.log("Even better than Legolas!", this.name)
        }

        myAnonFunction()
        myNamedFunction()
        myArrowFunction()
        
        myAnonFunction.bind(this)()
        myNamedFunction.bind(this)()
    }
}

let example = new ExampleClass()
example.myMethod()

////////////
// Output //
////////////

// I'm 
// I'm anonymus! This 
// I'm anonymus! That 
// I have a name! This 
// I have a name! That 
// Even better than Legolas! 
// I'm anonymus! This 
// I'm anonymus! That 
// I have a name! This 
// I have a name! That 
