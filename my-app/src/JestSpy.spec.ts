import sayHi from "./JestSpy";

describe("Given a jest.Spy", () => {
  describe("when using an spy and invoking the method", () => {
    const exampleObject = {
      sayHi: sayHi,
    };

    let spy: jest.SpyInstance;
    let result: string;

    beforeEach(() => {
      spy = jest.spyOn(exampleObject, "sayHi");
      result = exampleObject.sayHi("Paco");
    });

    afterEach(() => {
      spy.mockReset();
      spy.mockRestore();
    });

    it("spy is called", () => {
      expect(spy).toHaveBeenCalled();
    });
    it("spy is called 1 time", () => {
      expect(spy).toHaveBeenCalledTimes(1);
    });
    it("spy is called with expected arguments", () => {
      expect(spy).toHaveBeenCalledWith("Paco");
    });
    it("result is as expected", () => {
      expect(result).toBe("Hi Paco!");
    });
  });
});

describe("Given a jest.Mock", () => {
  describe("when using an jest.Mock and invoking the method", () => {
    let mock: jest.Mock;
    let result: string;

    beforeEach(() => {
      // <TResult = any, TArgs extends any[] = any>
      mock = jest.fn<string, [string]>((name) => {
        console.log(`In mocked with ${name}`);
        return `Hi mocked ${name}!`;
      });
      result = mock("Paco");
    });

    afterEach(() => {
      mock.mockReset();
      mock.mockRestore();
    });

    it("mock is called", () => {
      expect(mock).toHaveBeenCalled();
    });
    it("mock is called 1 time", () => {
      expect(mock).toHaveBeenCalledTimes(1);
    });
    it("mock is called with expected arguments", () => {
      expect(mock).toHaveBeenCalledWith("Paco");
    });
    it("result is as expected", () => {
      expect(result).toBe("Hi mocked Paco!");
    });
  });
});
