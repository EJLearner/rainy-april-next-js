import * as React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  box-shadow: none;
  border: none;
  background-color: transparent;

  &:hover {
    cursor: pointer;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

const Button = (props) => {
  return <StyledButton {...props} />;
};

export default Button;
