class ExampleClass {
    constructor(public name: string, private surname: string, age?: number) {}

    sayHi() {
        console.log("Hi! I'm", this.name, this.surname)
    }
}

const example = new ExampleClass('Paco', 'Piernas')
example.sayHi()

export default ExampleClass