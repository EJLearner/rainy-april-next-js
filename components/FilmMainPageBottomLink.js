import Image from 'next/image';
import Link from 'next/link';
import propTypes from 'prop-types';
import * as React from 'react';
import styled from 'styled-components';

import {misc} from '../utils/constants';

const StyledFilmMainPageBottomLink = styled.div`
  margin-top: 16px;
  flex: 1 1 300px;
  min-width: 300px;
  max-width: 600px;

  .bottom-link {
    color: var(--white);

    img {
      transition: all 0.2s ease-out;
      transform-origin: bottom;
      height: auto;
    }

    &:hover {
      color: var(--accent-yellow);
      text-decoration: none;

      img {
        transform: scale(1.1);
      }
    }

    .title {
      margin-top: 12px;
      font-size: 14px;
    }

    .subtitle {
      font-size: 16px;
      text-transform: uppercase;
    }
  }
`;

function FilmMainPageBottomLink({
  imageSource,
  subtitle,
  title,
  linkTo,
  external,
  isFile,
}) {
  const contents = (
    <>
      <Image alt={misc.PRESENTATIONAL_IMAGE} src={imageSource} width={600} />
      <div className="title">{title}</div>
      <div className="subtitle">{subtitle}</div>
    </>
  );

  if (isFile || external) {
    return (
      <StyledFilmMainPageBottomLink>
        <a
          className="bottom-link"
          href={linkTo}
          rel="noreferrer"
          target="_blank"
        >
          {contents}
        </a>
      </StyledFilmMainPageBottomLink>
    );
  }

  return (
    <StyledFilmMainPageBottomLink>
      <Link className="bottom-link" href={linkTo}>
        {contents}
      </Link>
    </StyledFilmMainPageBottomLink>
  );
}

FilmMainPageBottomLink.propTypes = {
  external: propTypes.bool,
  imageSource: propTypes.object.isRequired,
  isFile: propTypes.bool,
  linkTo: propTypes.string.isRequired,
  subtitle: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
};

export default FilmMainPageBottomLink;
