import React, { useCallback, useEffect, useState } from 'react';
import {
  createLimit,
  createProduct,
  listAllValues,
  listLimit,
  listProduct,
  replaceProduct,
} from '../../../data/usecases';
import { Product } from '../../../domain/entities';

import Footer from './footer';
import Header from './header';
import Body from './body';
import { Container } from './styled';

const PrincipalPage: React.FC = () => {
  const [limit, setLimit] = useState<number>(listLimit());
  const [valueSale, setValueSale] = useState<number>(listAllValues());
  const [products, setProduct] = useState<Product[]>(listProduct());

  useEffect(() => {
    setValueSale(() => listAllValues());
  }, [products]);

  const setLimitAction = useCallback((limitNumber: number) => {
    setLimit(limitNumber);
    createLimit(limitNumber);
  }, []);

  const removeProductsAction = useCallback((id: string) => {
    const allProducts = listProduct();

    const filteredProducts = allProducts.filter((product) => product.id !== id);

    replaceProduct(filteredProducts);
    setProduct(filteredProducts);
  }, []);

  const createProductAction = useCallback((product) => {
    const allProducts = createProduct(product);

    setProduct(allProducts);
  }, []);

  return (
    <Container>
      <Header limit={limit} setLimit={setLimitAction} />

      <Body createProduct={createProductAction} />

      <Footer
        limit={limit}
        valueSale={valueSale}
        products={products}
        removeProducts={removeProductsAction}
      />
    </Container>
  );
};

export default PrincipalPage;
