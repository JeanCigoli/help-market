import styled from 'styled-components';

export const Product = {
  Container: styled.div`
    width: 100%;
    height: 100%;

    background-color: #ffffff;
    border-radius: ${({ theme }) => theme.styles.spacing.short};
    padding: ${({ theme }) => theme.styles.spacing.short};

    display: flex;
    justify-content: center;
  `,
  TextContainer: styled.div`
    width: 80%;

    display: flex;
    align-items: flex-start;

    flex-direction: column;

    h3 {
      width: 80%;
      font-size: 17px;
      font-weight: bold;
    }

    p {
      font-size: 14px;
      font-weight: bold;
      color: #00000088;
    }
  `,
  IconContainer: styled.div`
    width: 20%;

    display: flex;
    align-items: center;
    justify-content: center;
  `,
};

export const FooterDrawerContainer = styled.div<{ color: string }>`
  width: 100%;
  height: 80%;

  display: flex;

  align-items: flex-end;
  justify-content: space-between;

  p {
    font-size: 20px;
    color: #000000;
    font-weight: bold;
  }

  h2 {
    font-size: 20px;
    font-weight: bold;
    color: ${({ color }) => color};
  }
`;
