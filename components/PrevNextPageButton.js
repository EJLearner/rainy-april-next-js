import PropTypes from 'prop-types';
import {useRouter} from 'next/router';
import * as React from 'react';
// TODO before release - figure this out later
// import {BsChevronRight as RightChevron, BsChevronLeft as LeftChevron} from 'react-icons/bs';
import styled from 'styled-components';

import Button from './Button';

const RightChevron = () => 'Right';
const LeftChevron = () => 'Left';

const StyledPrevNextPageButton = styled(Button)`
  color: var(--white);
  position: absolute;
  top: 40vh;

  &:hover {
    color: var(--accent-yellow);
  }

  &.right-arrow {
    right: var(--arrow-space-from-edge);
  }

  &.left-arrow {
    left: var(--arrow-space-from-edge);
  }
`;

function PrevNextPageButton({path, title, type}) {
  const router = useRouter();
  let Icon = RightChevron;
  let rightOrLeftClass = 'right-arrow';

  if (type === 'previous') {
    Icon = LeftChevron;
    rightOrLeftClass = 'left-arrow';
  }

  const computedClassName = `arrow ${rightOrLeftClass}`;
  return (
    <StyledPrevNextPageButton className={computedClassName} onClick={() => router.push(path)} title={title}>
      <Icon size="60px" />
    </StyledPrevNextPageButton>
  );
}

PrevNextPageButton.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

export default PrevNextPageButton;
