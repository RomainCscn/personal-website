import React from 'react';

import { ThemeProvider } from './src/context/theme';
import './src/styles/main.css';

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
);
