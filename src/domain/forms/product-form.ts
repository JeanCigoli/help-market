import { Product } from '../entities';

export type ProductForm = Omit<Product, 'id'>;
