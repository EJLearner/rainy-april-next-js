import propTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const StyledFilmmaker = styled.div`
  display: flex;
  margin-bottom: 2em;

  .headshot-and-name-column {
    width: 25%;
    max-width: 400px;
  }

  .headshot-and-name {
    color: white;
    position: relative;
  }

  img {
    display: block;
    width: 100%;
    height: auto;
  }

  .behind-text-mask {
    background: linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.95) 100%);
    position: absolute;
    bottom: 0;
    width: 100%;
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
  }

  .filmmaker-bio {
    margin-left: 2em;
    width: 50%;
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
  // TODO find out how to pass in image location properly
  // gatsby StaticImage passed in so that optimization can be used
  imageRender: propTypes.node.isRequired,
  name: propTypes.string.isRequired
};

export default Filmmaker;
