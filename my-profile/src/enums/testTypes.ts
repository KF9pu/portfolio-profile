export enum E_testTypes {
  none = "none",
  quick = "quick",
  normal = "normal",
  thorough = "thorough",
}

export const isValidTestType = (
  value: string
): value is keyof typeof E_testTypes =>
  Object.keys(E_testTypes).includes(value);
