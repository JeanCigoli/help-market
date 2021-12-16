import { Product } from '../../entities';

export type CreateProduct = (product: Omit<Product, 'id'>) => Product[];
