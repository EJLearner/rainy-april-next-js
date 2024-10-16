import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const StyledLayout = styled.div`
  .standard-page {
    color: rgb(50, 50, 50);
    line-height: 1.5;
    position: relative;
  }
`;

function Layout(props) {
  return (
    <StyledLayout>
      <div className="standard-page">{props.children}</div>
    </StyledLayout>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
