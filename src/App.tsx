import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Products } from './pages/Products';
import { GlobalStyle } from './styles/global';
import theme from './styles/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Products />
    </ThemeProvider>
  );
}

export default App;
