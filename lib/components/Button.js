import React from 'react';
import styled from 'styled-components';

// Define our button, but with the use of props.theme this time
const Button = styled.button`
  color: ${props => props.theme.fg};
  border: 2px solid ${props => props.theme.fg};
  background: ${props => props.theme.bg};

  font-size: 1em;
  font-family: SF;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
`;

export default Button;
