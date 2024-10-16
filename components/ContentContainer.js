import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const StyledContentContainer = styled.div`
  padding: 2em var(--gutter-width);
`;

function ContentContainer({children}) {
  return <StyledContentContainer>{children}</StyledContentContainer>;
}

export default ContentContainer;

ContentContainer.propTypes = {
  children: PropTypes.any.isRequired,
};
