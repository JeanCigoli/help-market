import { Product } from '../entities';

export type BodyParams = {
  createProduct: (product: Omit<Product, 'id'>) => void;
};
