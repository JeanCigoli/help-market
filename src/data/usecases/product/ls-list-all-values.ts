import { listProduct } from '..';
import { ListAllValues } from '../../../domain/usecases';

export const listAllValues: ListAllValues = () => {
  const products = listProduct();

  const value =
    products.reduce(
      (accumulator, current) => accumulator + current.value * current.quantity,
      0
    ) || 0;

  return value;
};
