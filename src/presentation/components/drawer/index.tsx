import React, { useCallback } from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  Button,
  DrawerFooter,
  DrawerCloseButton,
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import { DrawerParams } from '../../../domain/components';

import { Product, FooterDrawerContainer } from './styled';
import { formatCash } from '../../../utils';

const DrawerComponent: React.FC<DrawerParams> = ({
  products,
  valueSale,
  limit,
  removeProducts,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const removeProduct = useCallback((id: string) => {
    removeProducts(id);
  }, []);

  return (
    <>
      <Button
        colorScheme="green"
        bgColor="#68D99A"
        fontWeight="bold"
        variant="solid"
        onClick={onOpen}
      >
        Produtos
      </Button>
      <Drawer placement="bottom" size="md" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">
            Produtos adicionados
          </DrawerHeader>
          <DrawerBody bgColor="#cccccc44" display="grid" gap="15px">
            {products.length ? (
              products.map((product) => (
                <Product.Container key={product.id}>
                  <Product.TextContainer>
                    <h3>{product.name}</h3>
                    <p>
                      {product.quantity} (un./kg.) de{' '}
                      {formatCash(product.value)}
                    </p>
                  </Product.TextContainer>
                  <Product.IconContainer>
                    <DeleteIcon
                      color="red"
                      onClick={() => removeProduct(product.id)}
                    />
                  </Product.IconContainer>
                </Product.Container>
              ))
            ) : (
              <Product.Container>
                <h3>Nenhum produto no carrinho</h3>
              </Product.Container>
            )}
          </DrawerBody>
          <DrawerFooter>
            <FooterDrawerContainer color={valueSale > limit ? 'red' : 'green'}>
              <p>Total</p>
              <h2>{formatCash(valueSale)}</h2>
            </FooterDrawerContainer>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DrawerComponent;
