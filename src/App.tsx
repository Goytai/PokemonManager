import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Routes from './routes';

import GlobalStyles from './styles/globals';
import light from './styles/themes/default';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={light}>
      <BrowserRouter>
        <Routes />
        <GlobalStyles />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
