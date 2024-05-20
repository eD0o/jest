import { toUppercase } from "../app/Utils"

describe('toUpperCase examples', () => {
  it.each([
    { input: 'abc', expected: 'ABC' },
    { input: 'My-String', expected: 'MY-STRING' },
    { input: 'def', expected: 'DEF' },
  ])('$input toUpperCase should be $expected', ({ input, expected }) => {
    const actual = toUppercase(input);
    expect(actual).toBe(expected);
  })
})
