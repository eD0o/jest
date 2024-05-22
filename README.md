# 3 - Intermediate testing topics

## 3.1 - F.I.R.S.T Principles

The F.I.R.S.T principles are guidelines recommended to follow when writing software tests. These principles are:

- F: Fast
  - Tests `should provide fast feedback`. Quick tests enable rapid identification of issues in the code, speeding up the development cycle and enhancing productivity.
- I: Independent
  - Tests should be independent, meaning they `do not share state` with other tests and `do not rely on the order` in which they are run. Each test should `set up its own context` and not be affected by or affect other tests.
- R: Repeatable
  - Tests should be repeatable and `produce the same results every time given the same input`. This means `tests should clean up after themselves, such as resetting the database to a known state` before and after each test run.
- S: Self-validating
  - Tests `should clearly indicate whether they pass or fail`. The results should be unambiguous, leaving `no room for interpretation`. This typically involves using assertions that automatically verify test outcomes.
- T: Thorough
  - Tests `should cover all relevant cases, paths, and scenarios`. This includes testing happy paths, edge cases, invalid inputs, and large values to ensure comprehensive coverage.

> Fast and Independent/Repeatable sometimes can have some contradiction, because isolated/repeated tests require more time for setup.

## 3.2 - Jest Hooks

Jest have some hooks that are used inside describe blocks. It'll be better explained in the future classes.

Some examples are: beforeEach, afterEach, beforeAll, afterAll, etc.

```ts
import { StringUtils } from "../app/Utils";

describe("Utils test suite", () => {
  describe("StringUtils tests", () => {
    let sut: StringUtils;

    // when testing classes, this way it's assured that tests are independente from one another
    beforeEach(() => {
      sut = new StringUtils();
      console.log("Setup");
    });

    // clearing mocks
    afterEach(() => {
      console.log("Teardown");
    });

    it("Should return correct upperCase", () => {
      const actual = sut.toUppercase("abc");
      expect(actual).toBe("ABC");
      console.log("Actual test");
    });
  });
});
```

## 3.3 - Testing for Errors

When testing to simulate errors, there are two methods to see it:

```ts
import { StringUtils } from "../app/Utils";

describe("Utils test suite", () => {
  describe("StringUtils tests", () => {
    let sut: StringUtils;

    beforeEach(() => {
      sut = new StringUtils();
    });

    it("Should throw error on invalid argument - function", () => {
      function expectError() {
        const actual = sut.toUppercase("");
      }
      expect(expectError).toThrow();
      expect(expectError).toThrowError("Invalid argument"); //deprecated
    });

    it("Should throw error on invalid argument - arrow function", () => {
      expect(() => {
        sut.toUppercase("");
      }).toThrow();
    });
  });
});
```

Output:

![](https://i.imgur.com/714L9uQ.png)