export enum E_testTypes {
  none,
  quick,
  normal,
  thorough,
}

export const isValidTestType = (
  value: string
): value is keyof typeof E_testTypes =>
  Object.keys(E_testTypes).includes(value);
