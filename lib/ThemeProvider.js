import React from 'react';
import theme from './theme';
import { ThemeProvider as Root } from 'styled-components';

const ThemeProvider = (props) => {
	return (
	  <ThemeProvider {...props}>
	    {props.children}
	  </ThemeProvider>
	);
};

ThemeProvider.defaultProps = {
  theme
};

export default ThemeProvider;
