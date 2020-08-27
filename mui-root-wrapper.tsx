import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';

export default ({ element }: any) => <ThemeProvider theme={theme}>{element}</ThemeProvider>;
