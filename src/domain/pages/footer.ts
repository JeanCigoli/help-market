import { Product } from '../entities';

export type FooterParams = {
  limit: number;
  valueSale: number;
  products: Product[];
  removeProducts: (id: string) => void;
};
