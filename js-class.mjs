class ExampleClass {
    constructor(name, surname) {
        this.name = name
        this.surname = surname
    }

    sayHi() {
        console.log("Hi! I'm", this.name, this.surname)
    }
}

const example = new ExampleClass('Paco', 'Piernas')
example.sayHi()
