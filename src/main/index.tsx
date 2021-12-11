import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

import GlobalStyle from './style/global-styled';
import { props } from './style/theme';
import Routes from './routes';

const App: React.FC = () => (
  <ThemeProvider theme={props}>
    <ChakraProvider>
      <Router>
        <GlobalStyle />
        <Routes />
      </Router>
    </ChakraProvider>
  </ThemeProvider>
);

export default App;
