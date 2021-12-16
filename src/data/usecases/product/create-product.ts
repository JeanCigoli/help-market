import { v4 as uuidv4 } from 'uuid';
import { listProduct } from '..';
import { CreateProduct } from '../../../domain/usecases';
import { LocalStorage } from '../../../infra/storage';
import { STORAGE_PRODUCTS } from '../../../main/config/constants';

export const createProduct: CreateProduct = (product) => {
  const allProducts = listProduct();

  allProducts.push({
    ...product,
    id: uuidv4(),
  });

  LocalStorage.create(STORAGE_PRODUCTS, allProducts);

  return allProducts;
};
