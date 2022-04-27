import { ChakraProvider } from '@chakra-ui/provider';
import theme from './theme';
import React, { StrictMode } from 'react';
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <StrictMode>
    <ChakraProvider theme={theme}> 
    <BrowserRouter>
    <App />
  </BrowserRouter>,
    </ChakraProvider>
  </StrictMode>,
  document.getElementById('root')
);

