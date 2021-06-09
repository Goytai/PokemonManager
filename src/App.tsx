import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ApolloProvider } from '@apollo/client';

import Routes from './routes';

import GlobalStyles from './styles/globals';
import light from './styles/themes/default';
import client from './services/client';
import { PokeProvider } from './hooks/poke';

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <PokeProvider>
        <ThemeProvider theme={light}>
          <BrowserRouter>
            <Routes />
            <GlobalStyles />
          </BrowserRouter>
        </ThemeProvider>
      </PokeProvider>
    </ApolloProvider>
  );
};

export default App;
