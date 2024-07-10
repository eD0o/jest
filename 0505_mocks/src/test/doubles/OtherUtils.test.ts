import { calculateComplexity, toUpperCaseWithCb } from "../../app/doubles/OtherUtils"


describe('OtherUtils test suite', () => {


  const callbackMock = jest.fn()

  afterEach(() => {
    jest.clearAllMocks()
  })

  describe.only('Tracking callbacks with Jest mocks', () => {
    it('calls callback for invalid argument - track calls', () => {
      const actual = toUpperCaseWithCb('', callbackMock);
      expect(actual).toBeUndefined();
      expect(callbackMock).toHaveBeenCalledWith('Invalid argument!')
      expect(callbackMock).toHaveBeenCalledTimes(1)
    })

    it('calls callback for valid argument - track calls', () => {
      const actual = toUpperCaseWithCb('abc', callbackMock);
      expect(actual).toBe('ABC');
      expect(callbackMock).toHaveBeenCalledWith('called function with abc')
      expect(callbackMock).toHaveBeenCalledTimes(1)
    })
  })

  describe.only('Tracking callbacks', () => {

    let cbArgs = []
    let timesCalled = 0

    function callbackMock(arg: string) {
      cbArgs.push(arg)
      timesCalled++
    }

    // clearing tracking variables
    afterEach(() => {
      cbArgs = [];
      timesCalled = 0
    })

    it('calls callback for invalid argument - track calls', () => {
      const actual = toUpperCaseWithCb('', callbackMock);
      expect(actual).toBeUndefined();
      expect(cbArgs).toContain('Invalid argument!')
      expect(timesCalled).toBe(1)
    })

    it('calls callback for valid argument - track calls', () => {
      const actual = toUpperCaseWithCb('abc', callbackMock);
      expect(actual).toBe('ABC');
      expect(cbArgs).toContain('called function with abc')
      expect(timesCalled).toBe(1)
    })

  })

  it('ToUpperCase - calls callback for invalid argument', () => {
    const actual = toUpperCaseWithCb('', () => { });
    expect(actual).toBeUndefined();
  })

  it('ToUpperCase - calls callback for valid argument', () => {
    const actual = toUpperCaseWithCb('abc', () => { });
    expect(actual).toBe('ABC');
  })

  it('Calculates complexity', () => {
    const someInfo = {
      length: 5,
      extraInfo: {
        field1: 'someInfo',
        field2: 'someOtherInfo'
      }
    }

    const actual = calculateComplexity(someInfo as any);
    expect(actual).toBe(10);
  })
})