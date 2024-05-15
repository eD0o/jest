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
    expect(actual.characters).toContain<string>('M'); // making sure that will look for a 'm' string
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