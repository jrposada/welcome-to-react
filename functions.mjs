function namedFunction(...args) {
  console.log("Named function:", ...args);
  // console.trace()
}

const savedNamedFunction = function savedNameFunc(...args) {
  console.log("Saved name function:", ...args);
  // console.trace()
};

const savedAnonFunction = function (...args) {
  console.log("Saved anon function:", ...args);
  //   console.trace();
};

const savedArrowFunction = (...args) => {
  console.log("Saved arrow function:", ...args);
  //   console.trace();
};

const oneLiner = (...args) => console.log("Saved arrow function:", ...args);

const oneLinerReturn = (...args) => ({ name: args });

console.log(namedFunction("Paco", "Juan"));
console.log(savedNamedFunction("Paco", "Juan"));
console.log(savedAnonFunction("Paco", "Juan"));
console.log(savedArrowFunction("Paco", "Juan"));
console.log(oneLiner("Paco", "Juan"));
console.log(oneLinerReturn("Paco", "Juan"));
