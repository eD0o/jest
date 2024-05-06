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
import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true
}

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
import { toUppercase } from "../app/Utils"

describe('Utils test suite', () => {
  test('should return uppercase', () => {
    const result = toUppercase('abc')
    expect(result).toBe('ABC')
  })
})
```

In the example provided:

- The `describe block is used to group tests` related to the toUppercase function in the Utils.ts file.
- The `test block defines a specific test`, which checks whether the toUppercase function correctly transforms a string into uppercase.
- Inside the test block, `expect is used to set the expectation` that the toUppercase('abc') function `should return 'ABC'`.
- The `toBe method is used to compare the result returned` by the toUppercase('abc') function with the string 'ABC', `ensuring that they are strictly equal`.

To see the results, use ```npm test``` as configured in the package.json:

![](https://i.imgur.com/Metrnzr.png)