import React from 'react';
import { theme as base } from './theme';
import { ThemeProvider as Root } from 'styled-components';

const ThemeProvider = (props) => {
	return (
	  <ThemeProvider theme={props.theme}>
	    {props.children}
	  </ThemeProvider>
	);
};

ThemeProvider.defaultProps = {
  theme: base
};

export default ThemeProvider;
