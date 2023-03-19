// import {graphql, Link, useStaticQuery} from 'gatsby';
// import {GatsbyImage, getImage} from 'gatsby-plugin-image';
import Image from 'next/image';
import Link from 'next/link';
import propTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import lightImage from '../images/rainy-april-day-logo-inverted.png';
import darkImage from '../images/rainy-april-day-logo.png';
import routePaths from '../utils/routePaths';

const pageTypes = {
  DARK: 'dark',
  LIGHT: 'light'
};

const StyledTopLinks = styled.div`
  font-family: 'Avant Garde', Avantgarde, 'Century Gothic', CenturyGothic, AppleGothic, sans-serif;
  text-transform: uppercase;
  justify-content: space-between;
  display: flex;
  gap: 16px;
  align-items: center;
  padding: 10px var(--gutter-width);

  .links-array-wrapper {
    display: flex;
    justify-content: space-between;
    width: 30vw;
    min-width: 260px;
    max-width: 360px;
  }

  .links-array-wrapper a {
    border-radius: 6px;
    padding: 0.3em 0.5em;
    text-decoration: none;
  }

  &.dark {
    .links-array-wrapper a {
      color: var(--white);
    }
  }

  &.light {
    .links-array-wrapper a {
      color: var(--black);
    }
  }

  a:hover {
    text-decoration: underline;
  }

  a.current-page-link {
    color: rgb(120, 120, 120);
  }

  &.home-top-links {
    color: white;
  }

  .site-logo-link {
    display: block;
    flex-shrink: 0;

    &:hover {
      opacity: 0.8;
    }
  }

  .site-logo {
    min-width: 40px;
    width: 10vw;
    max-width: 80px;
    height: auto;
  }

  .yellow-button a {
    background-color: var(--accent-yellow);
    padding: 6px 20px;
  }
`;

function renderLinksArray(linksInfo) {
  return linksInfo.map(({label, path, className}) => {
    return (
      <div className={['top-link-div', className].join(' ')} key={path}>
        <Link data-label={label} href={path}>
          {label}
        </Link>
      </div>
    );
  });
}

function TopLinks(props) {
  const {isHome = false, pageType = pageTypes.LIGHT} = props;

  const linksInfo = [
    {path: routePaths.ABOUT, label: 'About'},
    {path: routePaths.CONTACT, label: 'Contact'},
    {path: routePaths.DONATE, label: 'Donate', className: 'yellow-button'}
  ];

  const className = ['top-links', isHome && 'home-top-links', pageType === pageTypes.DARK ? 'dark' : 'light']
    .filter((name) => name)
    .join(' ');

  return (
    <StyledTopLinks className={className}>
      <Link className="site-logo-link" href={routePaths.MAIN}>
        <Image alt="Site Logo" className="site-logo" src={pageType === pageTypes.DARK ? lightImage : darkImage} />
      </Link>
      <div className="links-array-wrapper">{renderLinksArray(linksInfo)}</div>
    </StyledTopLinks>
  );
}

TopLinks.propTypes = {
  isHome: propTypes.bool,
  pageType: propTypes.string
};

TopLinks.defaultProps = {
  isHome: false
};

export {pageTypes};

export default TopLinks;
