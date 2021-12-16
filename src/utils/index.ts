// import { cpf as validCpf, cnpj as validCnpj } from 'cpf-cnpj-validator';
// import { SessionStorage } from './storage/session';

// export function getToken() {
//   const token = SessionStorage.getItem(TOKEN);

//   return token;
// }

export const formatDate = (timestamp: string) => {
  const date = new Date(timestamp);

  return date.toLocaleString('pt-BR');
};

export const formatCash = (value: number) =>
  value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

export const transformObjectToQueryParams = (object: any) =>
  Object.entries(object)
    .map(([key, value]) => `${key}=${value}`)
    .join('&');

export const clearNumber = (number: string) =>
  +number.replace(/[^\d]/g, '') / 100;
