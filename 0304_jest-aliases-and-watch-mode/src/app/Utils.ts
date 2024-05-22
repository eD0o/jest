export class StringUtils {
  public toUppercase(arg: string) {
    if (!arg) {
      throw new Error("Invalid argument")
    }
    return toUppercase(arg)
  }
}

export function toUppercase(str: string) {
  return str.toUpperCase();
}

export type stringInfo = {
  lowerCase: string,
  upperCase: string,
  characters: string[],
  length: number,
  extraInfo: Object | undefined
}

export function getStringInfo(arg: string): stringInfo {
  return {
    lowerCase: arg.toLowerCase(),
    upperCase: arg.toUpperCase(),
    characters: Array.from(arg),
    length: arg.length,
    extraInfo: {}
  }
}