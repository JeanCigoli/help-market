import { ListProduct } from '../../../domain/usecases';
import { LocalStorage } from '../../../infra/storage';
import { STORAGE_PRODUCTS } from '../../../main/config/constants';

export const listProduct: ListProduct = () => {
  const products = LocalStorage.getItem(STORAGE_PRODUCTS);

  return products || [];
};
