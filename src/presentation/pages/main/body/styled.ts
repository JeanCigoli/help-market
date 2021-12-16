import styled from 'styled-components';

export const Body = {
  Main: styled.section`
    grid-area: 'body';
    padding: ${({ theme }) => theme.styles.spacing.base};
  `,
  Container: styled.form`
    width: 100%;
    height: 100%;

    border-radius: ${({ theme }) => theme.styles.spacing.base};
    background-color: #ffffff;
    padding: ${({ theme }) => theme.styles.spacing.base};

    box-shadow: 5px 5px 10px #cccccc55;

    display: flex;
    justify-content: space-between;

    flex-direction: column;

    h2 {
      font-size: ${({ theme }) => theme.styles.font.medium};
      font-weight: bold;
    }
  `,
  Flex: styled.div`
    width: 100%;

    display: flex;
    justify-content: flex-end;
    gap: 10px;
  `,
};
