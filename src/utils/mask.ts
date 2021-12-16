export const monetaryValueMask = (number: string) =>
  number
    .replace(/[^\d]/g, '')
    .replace(/(.{1})(.{8})$/, '$1.$2')
    .replace(/(.{1})(.{5})$/, '$1.$2')
    .replace(/(.{1})(.{2})$/, '$1,$2');

export const numberMask = (number: string) => number.replace(/[^\d]/g, '');
