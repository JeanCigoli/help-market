import styled from 'styled-components';

export const Footer = {
  Main: styled.section`
    background-color: #ffffff;
    box-shadow: 5px 5px 10px #cccccc55;

    grid-area: 'footer';

    display: flex;
    align-items: center;
    justify-content: space-around;
  `,
  TotalContainer: styled.div<{ color: string }>`
    width: 50%;
    height: 80%;

    display: flex;
    flex-direction: column;

    align-items: flex-end;
    justify-content: center;

    p {
      font-size: 14px;
      color: #00000099;
    }

    h2 {
      font-size: 26px;
      font-weight: bold;
      color: ${({ color }) => color};
    }
  `,
};
