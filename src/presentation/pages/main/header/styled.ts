import styled from 'styled-components';

export const ContainerDefault = styled.div`
  width: 100%;
  height: 100%;

  border-radius: ${({ theme }) => theme.styles.spacing.base};

  box-shadow: 5px 5px 10px #cccccc55;
`;

export const Header = {
  Main: styled.section`
    grid-area: 'header';
    padding: ${({ theme }) => theme.styles.spacing.base};
  `,
  Container: styled(ContainerDefault)`
    background-color: #020c16;
    padding-left: ${({ theme }) => theme.styles.spacing.base};
    position: relative;

    display: flex;
    align-items: flex-start;
    justify-content: space-evenly;

    flex-direction: column;

    p {
      color: #ffffffbb;
      font-size: 16px;
    }

    h2 {
      color: #ffffff;
      font-weight: bold;
      font-size: 30px;
    }

    img {
      position: absolute;
      right: 15px;
      top: 15px;

      width: 75px;
      object-fit: contain;
    }

    .display {
      width: 70%;
      display: flex;

      justify-content: space-between;
    }
  `,
};
