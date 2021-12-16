import { ReplaceProduct } from '../../../domain/usecases';
import { LocalStorage } from '../../../infra/storage';
import { STORAGE_PRODUCTS } from '../../../main/config/constants';

export const replaceProduct: ReplaceProduct = (products) => {
  LocalStorage.create(STORAGE_PRODUCTS, products);

  return products;
};
