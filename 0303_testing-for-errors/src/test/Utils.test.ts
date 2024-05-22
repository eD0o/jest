import { StringUtils } from "../app/Utils"

describe('Utils test suite', () => {

  describe('StringUtils tests', () => {

    let sut: StringUtils

    // when testing classes, this way it's assured that tests are independente from one another
    beforeEach(() => {
      sut = new StringUtils()
      console.log('Setup');
    })

    // clearing mocks
    afterEach(() => {
      console.log('Teardown');
    })

    it('Should return correct upperCase', () => {
      const actual = sut.toUppercase('abc')
      expect(actual).toBe('ABC')
      console.log('Actual test');
    })
  })
})