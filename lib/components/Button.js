import React from 'react';
import styled, { withTheme } from 'styled-components';

// Define our button, but with the use of props.theme this time
const Button = styled.button`
  color: ${props => {console.log("blah", props); return props.theme.fg}};
  border: 2px solid ${props => props.theme.fg};
  background: ${props => props.theme.bg};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
`;

export default Button;
