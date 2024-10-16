import propTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const StyledFilmmaker = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 2em;
  gap: 32px;

  .headshot-and-name-column {
    width: 25%;
    min-width: 200px;
    max-width: 400px;
  }

  .headshot-and-name {
    color: white;
    position: relative;
  }

  img {
    display: block;
    width: 100%;
    min-width: 200px;
    height: auto;
  }

  .behind-text-mask {
    background: linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.95) 100%);
    position: absolute;
    bottom: 0;
    width: 100%;
    min-width: 200px;
    height: 30%;
  }

  .filmmaker-name {
    position: absolute;
    color: white;
    bottom: 15px;
    left: 15px;
    font-size: 110%;
    font-weight: 600;
    text-transform: uppercase;
    width: calc(100% - 15px);
    min-width: calc(200px - 15px);
  }

  .filmmaker-bio {
    max-width: 400px;
  }

  .filmmaker-bio p:first-child {
    margin-top: 0;
    padding-top: 0;
  }
`;

function Filmmaker(props) {
  return (
    <StyledFilmmaker className="name-and-bio">
      <div className="headshot-and-name-column">
        <div className="headshot-and-name">
          {/* bit of a hack so that the image can be passed in and still take
          advantage of gatsby image optimization */}
          {props.imageRender}
          <div className="behind-text-mask" />
          <div className="filmmaker-name">{props.name}</div>
        </div>
      </div>
      <div className="filmmaker-bio">{props.children}</div>
    </StyledFilmmaker>
  );
}

Filmmaker.propTypes = {
  children: propTypes.node.isRequired,
  imageRender: propTypes.node.isRequired,
  name: propTypes.string.isRequired,
};

export default Filmmaker;
