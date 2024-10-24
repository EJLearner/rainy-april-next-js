import Image from 'next/image';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import propTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import lightImage from '../images/rainy-april-day-logo-inverted.png';
import darkImage from '../images/rainy-april-day-logo.png';
import routePaths from '../utils/routePaths';

const pageTypes = {
  DARK: 'dark',
  LIGHT: 'light',
};

// TODO: undo justify-content comment out when donate page is back

const StyledTopLinks = styled.div`
  font-family: 'Avant Garde', Avantgarde, 'Century Gothic', CenturyGothic,
    AppleGothic, sans-serif;
  text-transform: uppercase;
  justify-content: space-between;
  display: flex;
  gap: 16px;
  align-items: center;
  padding: 10px var(--gutter-width);

  .links-array-wrapper {
    display: flex;
    width: 30vw;
    min-width: 260px;
    max-width: 360px;
  }

  .links-array-wrapper a,
  .links-array-wrapper .current-page {
    border-radius: 6px;
    padding: 0.3em 0.5em;
    text-decoration: none;
  }

  .current-page {
    font-weight: bold;
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

  .yellow-button a,
  .yellow-button .current-page {
    background-color: var(--accent-yellow);
    padding: 6px 20px;
  }
`;

function renderLinksArray(linksInfo, currentPath) {
  return linksInfo.map(({label, path: linkPath, className}) => {
    const currentPage = linkPath === currentPath;

    return (
      <div className={className} key={linkPath}>
        {currentPage && <span className="current-page">{label}</span>}
        {!currentPage && <Link href={linkPath}>{label}</Link>}
      </div>
    );
  });
}

function TopLinks(props) {
  const {isHome = false, pageType = pageTypes.LIGHT} = props;
  const pathname = usePathname();

  const linksInfo = [
    {path: routePaths.ABOUT, label: 'About'},
    {path: routePaths.CONTACT, label: 'Contact'},
    {path: routePaths.DONATE, label: 'Donate', className: 'yellow-button'},
  ];

  const className = [
    'top-links',
    isHome && 'home-top-links',
    pageType === pageTypes.DARK ? 'dark' : 'light',
  ]
    .filter((name) => name)
    .join(' ');

  return (
    <StyledTopLinks className={className}>
      <Link className="site-logo-link" href={routePaths.MAIN}>
        <Image
          alt="Site Logo"
          className="site-logo"
          src={pageType === pageTypes.DARK ? lightImage : darkImage}
        />
      </Link>
      <div className="links-array-wrapper">
        {renderLinksArray(linksInfo, pathname)}
      </div>
    </StyledTopLinks>
  );
}

TopLinks.propTypes = {
  isHome: propTypes.bool,
  pageType: propTypes.string,
};

export {pageTypes};

export default TopLinks;
