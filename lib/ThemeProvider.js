import React from 'react';
import { base } from './theme';
import { ThemeProvider as Root } from 'styled-components';

const ThemeProvider = (props) => {
	const theme = {
		...base,
		...props.theme
	};

	return (
	  <Root theme={theme}>
	    {props.children}
	  </Root>
	);
};

ThemeProvider.defaultProps = {
  theme: base
};

export default ThemeProvider;
