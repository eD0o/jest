import { toUppercase } from "../app/Utils"

describe('Utils test suite', () => {

  /**
   * it's interesting to change the alias of the test function 
   * from "test" to "it", to better coincide with the description.
   */
  it('should return uppercase of valid string', () => {
    // principle 1 - arrange:

    // sut: unit testing convention
    const sut = toUppercase;
    const expected = 'ABC'

    // -------------------------------------

    // principle 2 - act

    // actual: what actually happens to the code
    const actual = sut('abc')

    // -------------------------------------

    // principle 3 - assert
    expect(actual).toBe(expected)
  })
})