import React from 'react';
import { Button } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Body } from './styled';
import { ProductForm } from '../../../../domain/forms';
import { productSchema } from '../../../../validation/forms';
import { Input } from '../../../components';
import { BodyParams } from '../../../../domain/pages';

const BodyComponent: React.FC<BodyParams> = ({ createProduct }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProductForm>({
    resolver: yupResolver(productSchema),
  });

  const onSubmit = (params: ProductForm) => {
    createProduct({
      name: params.name,
      value: +params.value,
      quantity: +params.quantity,
    });
    reset();
  };

  return (
    <Body.Main>
      <Body.Container onSubmit={handleSubmit(onSubmit)}>
        <h2>Novo produto</h2>

        <div>
          <Input
            label="Produto"
            type="text"
            placeholder="Digite o nome"
            {...register('name')}
            error={errors.name}
          />

          <Body.Flex>
            <Input
              label="Valor"
              type="text"
              placeholder="R$"
              {...register('value')}
              error={errors.value}
            />

            <Input
              label="Quantidade"
              type="text"
              placeholder="Em un. ou kg."
              {...register('quantity')}
              error={errors.quantity}
            />
          </Body.Flex>
        </div>

        <Body.Flex>
          <Button
            width="50%"
            colorScheme="green"
            bgColor="#68D99A"
            fontWeight="bold"
            variant="solid"
            type="submit"
          >
            Adicionar
          </Button>
        </Body.Flex>
      </Body.Container>
    </Body.Main>
  );
};

export default BodyComponent;
