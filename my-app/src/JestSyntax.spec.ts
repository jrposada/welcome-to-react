import sayHi from "./JestSyntax";

describe("Given a module", () => {
  describe("when invoking 'SayHi'", () => {
    describe("and name is 'Paco'", () => {
      it("then result is 'Hi Paco!'", () => {
        const result = sayHi("Paco");
        expect(result).toBe("Hi Paco!");
      });
    });

    const nameCases = [
      { name: "Paco", expectedResult: "Hi Paco!" },
      { name: "Juan", expectedResult: "Hi Juan!" },
      { name: "Alberto", expectedResult: "Hi Albaro!" },
    ];
    nameCases.forEach(({ name, expectedResult }) => {
      describe(`(with test cases) and name is '${name}'`, () => {
        it(`then result is '${expectedResult}'`, () => {
          const result = sayHi(name);
          expect(result).toBe(expectedResult);
        });
      });
    });
  });
});
