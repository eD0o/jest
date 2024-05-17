# 2 - Basics

## 2.0 - Why we need tests ?

Peace of mind as a dev/tester:

- Catch bugs early.
- Save time with debugging.
- Unit tests impose high quality code, if an unit test is difficult to test, the code quality should be improved.
- Prevent endless manual tests.

### 2.0.1 - What are software tests ?

- Code that runs other code and `makes assertions and checks`.
- Requirements and/or specifications that will be checked.

## 2.1 - What is Jest ?

JavaScript/TypeScript `testing framework` developed by Facebook. Thus, a `test runner` with a sut of global functions: describe, test, expect and with a powerful set of matchers and assertions.

Nowadays, it's the `most popular and supported` test framework.

## 2.2 - Jest/TypeScript project setup

In a folder, run this command in the terminal:

```npm
npm i -D typescript jest ts-jest @types/jest ts-node
```

Then, initialize jest creating a file jest.config.ts:

```ts
// jest.config.ts
import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  preset: "ts-jest",
  testEnvironment: "node",
  verbose: true,
};

export default config;
```

Also, to avoid this warn message:

```
ts-jest[config] (WARN) message TS151001: If you have issues related to imports, you should consider setting `esModuleInterop` to `true` in your TypeScript configuration file (usually `tsconfig.json`). See https://blogs.msdn.microsoft.com/typescript/2018/01/31/announcing-typescript-2-7/#easier-ecmascript-module-interoperability for more information.
```

`Create a simple tsconfig.json` file with just esModuleInterop for now:

```json
{
  "compilerOptions": {
    "esModuleInterop": true
  }
}
```

In package.json, change the value of the `scripts test to "jest"`:

```ts
{
  "name": "jest-ts-course",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "jest" // <- here
  },
  ...
}
```

And finally, let's create a simple function and its test with this structure:

![](https://i.imgur.com/JE5t69Z.png)

```ts
// src/app/Utils.ts
export function toUppercase(str: string) {
  return str.toUpperCase();
}
```

```ts
// src/test/Utils.test.ts
import { toUppercase } from "../app/Utils";

describe("Utils test suite", () => {
  test("should return uppercase", () => {
    const result = toUppercase("abc");
    expect(result).toBe("ABC");
  });
});
```

In the example provided:

- The `describe block is used to group tests` related to the toUppercase function in the Utils.ts file.
- The `test block defines a specific test`, which checks whether the toUppercase function correctly transforms a string into uppercase.
- Inside the test block, `expect is used to set the expectation` that the toUppercase('abc') function `should return 'ABC'`.
- The `toBe method is used to compare the result returned` by the toUppercase('abc') function with the string 'ABC', `ensuring that they are strictly equal`.

To see the results, use `npm test` as configured in the package.json:

![](https://i.imgur.com/Metrnzr.png)

## 2.3 - Unit Test Structure

### 2.3.1 - AAA (Triple-A) Principle

This principle is an universal convention and consists in a structure based on:

- Arrange: Prepares the test environment, defining variables and configuring the initial state.
- Act: Performs the operation to be tested.
- Assert: Checks whether the result of the operation matches what was expected.

```ts
// src/test/Utils.test.ts (REFACTORED)
import { toUppercase } from "../app/Utils";

describe("Utils test suite", () => {
  /**
   * it's interesting to change the alias of the test function
   * from "test" to "it", to better coincide with the description.
   */
  it("should return uppercase of valid string", () => {
    // principle 1 - arrange:

    // sut: unit testing convention
    const sut = toUppercase;
    const expected = "ABC";

    // -------------------------------------
    // principle 2 - act

    // actual: what actually happens to the code
    const actual = sut("abc");

    // -------------------------------------
    // principle 3 - assert

    expect(actual).toBe(expected);
  });
});
```

## 2.4 - Jest assertions and matchers

- Assertions: function to state that a value needs to be tested.
- Matchers: defines the specific condition or criteria the value should meet.

```ts
expect(actual).toBe(expected); // expect() is the assertion, .toBe() is the matcher
```

`Matchers can check for equality, containment, truthiness, and more`, making the tests expressive and readable.

Therefore, there are methods to compare and check: toBe (values), toEqual (primitive types), toHaveLength, toContain, etc.

Some Jest matchers example:

```ts
// src/test/Utils.test.ts
import { getStringInfo, toUppercase } from "../app/Utils"

describe('Utils test suite', () => {

  it('should return uppercase of valid string', () => {
    const sut = toUppercase;
    const expected = 'ABC'

    const actual = sut('abc')

    expect(actual).toBe(expected)
  })

  it.only('should return info for valid string', () => {
    const actual = getStringInfo('My-String')

    expect(actual.lowerCase).toBe('my-string');
    expect(actual.extraInfo).toEqual({});

    expect(actual.characters.length).toBe(9);
    expect(actual.characters).toHaveLength(9);

    expect(actual.characters).toEqual(['M', 'y', '-', 'S', 't', 'r', 'i', 'n', 'g']);
    expect(actual.characters).toContain<string>('M'); // assure that will check the type
    expect(actual.characters).toEqual(
      expect.arrayContaining(['S', 't', 'r', 'i', 'n', 'g', 'M', 'y', '-'])
    )

    // check for var/object definition
    expect(actual.extraInfo).not.toBe(undefined);
    expect(actual.extraInfo).not.toBeUndefined();
    expect(actual.extraInfo).toBeDefined();
    expect(actual.extraInfo).toBeTruthy();
  })
})
```

## 2.5 - Multiple Tests Structure

- To `avoid difficulty to debug` and spot where a possible error is, besides to better organize it, it's `recommended to create multiple tests and put them in a separate suite`.

- Each test should be independent from other tests, so `avoid using the same variable 'actual'` for other tests.

```ts
import { getStringInfo, toUppercase } from "../app/Utils"

describe('Utils test suite', () => {

  it('should return uppercase of valid string', () => {
    const sut = toUppercase;
    const expected = 'ABC'

    const actual = sut('abc')

    expect(actual).toBe(expected)
  })

  describe('getStringInfo for arg My-String should', () => {

    test('return right length', () => {
      const actual = getStringInfo('My-String');
      expect(actual.characters).toHaveLength(9);
    })
    test('return right lower case', () => {
      const actual = getStringInfo('My-String');
      expect(actual.lowerCase).toBe('my-string');
    })
    test('return right upper case', () => {
      const actual = getStringInfo('My-String');
      expect(actual.upperCase).toBe('MY-STRING');
    })
    test('return right characters', () => {
      const actual = getStringInfo('My-String');
      expect(actual.characters).toEqual(['M', 'y', '-', 'S', 't', 'r', 'i', 'n', 'g']);
      expect(actual.characters).toContain<string>('M');
      expect(actual.characters).toEqual(
        expect.arrayContaining(['S', 't', 'r', 'i', 'n', 'g', 'M', 'y', '-'])
      )
    })
    test('return defined extra info', () => {
      const actual = getStringInfo('My-String');
      expect(actual.extraInfo).toBeDefined();
    })
    test('return right extra info', () => {
      const actual = getStringInfo('My-String');
      expect(actual.extraInfo).toEqual({})
    })
  })
})
```

Output:

![](https://i.imgur.com/bIr9luN.png)

## 2.X - Observations

- use .only will help to isolate the test.

```ts
// src/test/Utils.test.ts
import { getStringInfo, toUppercase } from "../app/Utils";

describe("Utils test suite", () => {
  it("should return uppercase of valid string", () => {
    ...
  });


  // just this one will run
  it.only("should return info for valid string", () => {
    const actual = getStringInfo("My-String");

    expect(actual.lowerCase).toBe("my-string");
    expect(actual.extraInfo).toBe({});
  });
});
```