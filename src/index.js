import React from 'react';
import {ThemeProvider} from 'styled-components';
import {theme} from './services';
import {Carousel} from './screens';

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <Carousel />
    </ThemeProvider>
  );
};

export default Root;
