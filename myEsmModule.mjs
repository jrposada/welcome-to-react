function Hello() {
    console.log('Hello from ESM modules!');
}

function DefaultHello() {
    console.log('Is this a DEFAULT?')
}

export { Hello }
export default DefaultHello
