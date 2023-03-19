import {useRouter} from 'next/router';
import PropTypes from 'prop-types';
import * as React from 'react';
import styled from 'styled-components';

import Button from './Button';

const StyledPrevNextPageButton = styled(Button)`
  color: var(--white);
  position: absolute;
  top: 40vh;
  font-size: clamp(32px, 6vw, 60px);

  &:hover {
    color: var(--accent-yellow);
  }

  &.right {
    right: var(--arrow-space-from-edge);
  }

  &.left {
    left: var(--arrow-space-from-edge);
  }
`;

function PrevNextPageButton({path, title, type}) {
  const router = useRouter();

  const rightOrLeft = type === 'previous' ? 'left' : 'right';

  return (
    <StyledPrevNextPageButton className={rightOrLeft} onClick={() => router.push(path)} title={title}>
      <i className={`bi bi-chevron-${rightOrLeft}`} />
    </StyledPrevNextPageButton>
  );
}

PrevNextPageButton.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

export default PrevNextPageButton;
