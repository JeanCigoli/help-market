import React from 'react';

import { FooterParams } from '../../../../domain/pages';
import { formatCash } from '../../../../utils';
import { Drawer } from '../../../components';
import { Footer } from './styled';

const FooterComponent: React.FC<FooterParams> = ({
  limit,
  valueSale,
  products,
  removeProducts,
}) => (
  <Footer.Main>
    <Drawer
      products={products}
      valueSale={valueSale}
      limit={limit}
      removeProducts={removeProducts}
    />
    <Footer.TotalContainer color={valueSale > limit ? 'red' : 'green'}>
      <p>Total</p>
      <h2>{formatCash(valueSale)}</h2>
    </Footer.TotalContainer>
  </Footer.Main>
);

export default FooterComponent;
