import React from 'react';
import base from './theme';
import { ThemeProvider as Root } from 'styled-components';

const ThemeProvider = (props) => {
	const theme = {
		base,
		...props.theme
	};

	return (
	  <ThemeProvider theme={theme}>
	    {props.children}
	  </ThemeProvider>
	);
};

ThemeProvider.defaultProps = {
  theme: base
};

export default ThemeProvider;
