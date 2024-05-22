import { StringUtils } from "../app/Utils"

describe('Utils test suite', () => {

  describe('StringUtils tests', () => {

    let sut: StringUtils

    beforeEach(() => {
      sut = new StringUtils()
    })

    it('Should throw error on invalid argument - function', () => {

      function expectError() {
        const actual = sut.toUppercase('')

      }
      expect(expectError).toThrow();
      expect(expectError).toThrowError('Invalid argument'); //deprecated
    })

    it('Should throw error on invalid argument - arrow function', () => {
      expect(() => {
        sut.toUppercase('')
      }).toThrow();
    })
  })
})