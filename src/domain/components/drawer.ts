import { Product } from '../entities';

export type DrawerParams = {
  products: Product[];
  valueSale: number;
  limit: number;
  removeProducts: (id: string) => void;
};
