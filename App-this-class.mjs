class Human {
    constructor(){
        this.name = 'Paco'
    }

    myMethod() {
        console.log(this.name)

        let that = this
        let myAnonFunction = function() {
            console.log("I'm saved anonymus! This", this?.name)
            console.log("I'm saved anonymus! That", that?.name)
        }
        
        let myNamedFunction = function myName() {
            console.log("I saved have a name! This", this?.name)
            console.log("I saved have a name! That", that?.name)
        }
        
        let myArrowFunction = () => {
            console.log("Event better than Legolas!", this.name)
        }

        myAnonFunction()
        myNamedFunction()
        myArrowFunction()
        
        myAnonFunction.bind(this)()
        myNamedFunction.bind(this)()
    }
}

let human = new Human()
human.myMethod()
