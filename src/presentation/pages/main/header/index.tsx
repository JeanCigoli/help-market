import { Button, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import React, { useCallback, useEffect, useState } from 'react';

import { HeaderParams } from '../../../../domain/pages';
import { clearNumber } from '../../../../utils';
import { monetaryValueMask } from '../../../../utils/mask';

import marketImage from '../../../../assets/market.png';

import { Header } from './styled';

const HeaderComponent: React.FC<HeaderParams> = ({ limit, setLimit }) => {
  const [inputLimit, setInputLimit] = useState<string>('');

  useEffect(() => {
    setInputLimit(monetaryValueMask((limit * 100).toString()));
  }, [limit]);

  const clearLimit = useCallback(() => {
    setLimit(0);
    setInputLimit(() => monetaryValueMask('0'));
  }, []);

  const saveLimit = useCallback(() => {
    if (inputLimit) {
      setLimit(+clearNumber(inputLimit));
    } else {
      clearLimit();
    }
  }, [inputLimit]);

  const setLimitInput = useCallback((number: string) => {
    setInputLimit(monetaryValueMask(number));
  }, []);

  return (
    <Header.Main>
      <Header.Container>
        <img src={marketImage} alt="Banner - imagem do mercado" />

        <p>Coloque o limite que deseja:</p>

        <InputGroup fontSize="25px" width="80%">
          <InputLeftElement
            pointerEvents="none"
            textColor="white"
            fontWeight="bold"
            fontSize="1.2em"
            children="R$"
          />
          <Input
            fontSize="27px"
            borderColor="transparent"
            paddingLeft="45px"
            textColor="white"
            fontWeight="bold"
            value={inputLimit}
            onChange={(event) => setLimitInput(event.target.value)}
          />
        </InputGroup>

        <div className="display">
          <Button
            width="100px"
            colorScheme="green"
            bgColor="#68D99A"
            fontWeight="bold"
            variant="solid"
            onClick={saveLimit}
          >
            Salvar
          </Button>
          <Button
            width="100px"
            colorScheme="whiteAlpha"
            textColor="white"
            fontWeight="bold"
            variant="outline"
            onClick={clearLimit}
          >
            Limpar
          </Button>
        </div>
      </Header.Container>
    </Header.Main>
  );
};

export default HeaderComponent;
