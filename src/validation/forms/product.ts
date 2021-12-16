import * as yup from 'yup';
import { string, number } from '..';

const productSchema = yup.object().shape({
  name: string('O nome').required('O nome é obrigatório'),
  value: number('O valor').required('O valor é obrigatório'),
  quantity: number('A quantidade').required('A quantidade é obrigatória'),
});

export { productSchema };
