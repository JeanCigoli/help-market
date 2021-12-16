import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  max-width: 500px;
  height: 100vh;

  display: grid;

  grid-template-columns: 1fr;
  grid-template-rows: 2fr 4fr 1fr;
  grid-template-areas:
    'header'
    'body'
    'footer';
`;
