import { PasswordChecker, PasswordErrors } from "../../app/pass_checker/PasswordChecker"

describe('Password Checker test suite', () => {

  let sut: PasswordChecker;

  beforeEach(() => {
    sut = new PasswordChecker();
  })

  it('Password with less than 8 chars is invalid', () => {
    const actual = sut.checkPassword('12345')
    expect(actual.valid).toBe(false)
    expect(actual.reasons).toContain(PasswordErrors.SHORT)
  })

  it('Password with more than 8 chars is ok', () => {
    const actual = sut.checkPassword('123456789Aa')
    expect(actual.valid).toBe(true)
    expect(actual.reasons).not.toContain(PasswordErrors.SHORT)
  })

  //

  it('Password with no upper case letter is invalid', () => {
    const actual = sut.checkPassword('1234abcd')
    expect(actual.valid).toBe(false)
    expect(actual.reasons).toContain(PasswordErrors.NO_UPPER_CASE)
  })

  it('Password with upper case letter is ok', () => {
    const actual = sut.checkPassword('1234abcdA')
    expect(actual.valid).toBe(true)
    expect(actual.reasons).not.toContain(PasswordErrors.NO_UPPER_CASE)
  })

  //

  it('Password with no lower case letter is invalid', () => {
    const actual = sut.checkPassword('1234ABCD')
    expect(actual.valid).toBe(false)
    expect(actual.reasons).toContain(PasswordErrors.NO_LOWER_CASE)
  })

  it('Complex password is valid', () => {
    const actual = sut.checkPassword('1234ABCDa')
    expect(actual.reasons).toHaveLength(0)
    expect(actual.valid).toBe(true)
  })

})