# 4 - Test Driven Development with Jest

## 4.1 - TDD Introduction

**Test First Development**:

- The primary principle of TDD is to `write tests before writing the actual implementation` code.
- This ensures that you `define clear requirements and expectations` for your code from the outset.

**The TDD Cycle**:

- The TDD process follows a simple, repetitive cycle often summarized as **Red-Green-Refactor**:
  1.  **Red**: `Write a test for a new functionality. Initially, this test will fail` because the functionality is not yet implemented.
  2.  **Green**: `Write the minimum amount of code necessary` to make the test pass.
  3.  **Refactor**: `Clean up the code while ensuring that all tests still pass`. Refactoring can involve improving code structure, optimizing performance, or making the code more readable.

**Benefits of TDD**:

- **Improved Design**: Writing tests first helps in defining clear and concise requirements, leading to a better-designed system.
- **Less Debugging**: Since tests are written first, many bugs are caught early in the development process.
- **Easier Maintenance**: With a comprehensive test suite, making changes to the code becomes less risky because you can quickly verify that existing functionality is not broken.

**Gradual Test Development**:

- For larger projects, `achieving a basic working state first and then gradually writing tests helps in managing complexity`.
- This approach allows for incremental improvements and ensures that the project remains manageable and testable at each stage.

### 4.1.2 - Illustration with the TDD Cycle Image

![](https://i.imgur.com/I338nsI.png)

This image effectively illustrates the TDD cycle:

1. **Tests Fail**: Initially, tests are written without any implementation, so they fail.
2. **Implement Code**: Code is written to pass the tests.
3. **Add Logic and Tests**: After the initial implementation, additional logic and corresponding tests are added.

By following this cycle, TDD helps in developing reliable, maintainable, and well-tested software.

## 4.2 - Coding Katas

Are `practice exercises` for improving coding skills. There are some platforms and examples of katas with Test-Driven Development (TDD):

### 4.2.1 - Platforms

- **Codewars**: [Codewars](https://www.codewars.com/)
- **LeetCode**: [LeetCode](https://leetcode.com/)
- **HackerRank**: [HackerRank](https://www.hackerrank.com/)
- **Exercism**: [Exercism](https://exercism.io/)

### 4.2.2 - Examples of Katas with TDD

- FizzBuzz:

  - Write a program that prints numbers from 1 to 100.
  - For multiples of three, print "Fizz" instead of the number.
  - For multiples of five, print "Buzz".
  - For numbers which are multiples of both three and five, print "FizzBuzz".

- String Calculator:

  - Create a function add(numbers: string) -> int.
  - The function takes a string of comma-separated numbers and returns their sum.
  - Handle new lines as separators and support different delimiters.

- Roman Numerals:
  - Write a function to convert from normal numbers to Roman numerals.
  - Implement the reverse conversion: Roman numerals to normal numbers.

So, basically:

1. Write a test for a small part of the functionality.
2. Run the test (it should fail).
3. Write the minimum code necessary to make the test pass.
4. Refactor the code while keeping all tests green.
5. Repeat.

These examples help `practice TDD by focusing on writing tests first and then implementing the solution` to ensure correctness.

### 4.2.3 - Kata: Password Checker

Password Checker will be the "kata project" of this chapter.

- Iteration 1:
  A password is invalid if:

  - Length is less than 8 chars.
  - Has no upper case letter.
  - Has no lower case letter.

- Iteration 2: returns the reasons of invalidity.

- Iteration 3: admin password should contain a number.

## 4.3 - PassChecker setup

```ts
// ./jest.config.ts
import type { Config } from "@jest/types";

const baseDir = "<rootDir>/src/app/pass_checker"; // source code
const baseTestDir = "<rootDir>/src/test/pass_checker"; // test code

const config: Config.InitialOptions = {
  preset: "ts-jest",
  testEnvironment: "node",
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: [`${baseDir}/**/*.ts`],
  testMatch: [
    `${baseTestDir}/**/*.ts`, // Define the pattern to find the tests file
  ],
};

export default config;
```

Folders Structure:

![](https://i.imgur.com/qO7wbg0.png)

## 4.4 - Iterations
