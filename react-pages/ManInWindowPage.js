import Image from 'next/image';
import * as React from 'react';
import styled from 'styled-components';

import FilmMainPageBottomLink from '../components/FilmMainPageBottomLink';
import Layout from '../components/Layout';
import PrevNextPageButton from '../components/PrevNextPageButton';
import SEO from '../components/SEO';
import TopLinks, {pageTypes} from '../components/TopLinks';
import auditionsPicture from '../images/auditions.png';
import crewBiosPicture from '../images/crew-bios-thumb.jpg';
import crewFilmTalkPicture from '../images/crew-film-talk.png';
import msacLogo from '../images/msac-logo.png';
import stayInTheLoopPicture from '../images/tmitw-post-production-meeting-thumbnail.png';
import proposalAndMarketingPicture from '../images/tmitw-pre-production-artifacts-thumbnail.png';
import donorsStore from '../stores/donorsStore';
import routePaths from '../utils/routePaths';

const tmitwBackgroundPublicSource = '/tmitw-background.jpg';

const StyledManInPageWindow = styled.div`
  color: var(--white);
  letter-spacing: 1.5px;

  .main-page-and-background {
    background-color: black;
    min-height: 100vh;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(${tmitwBackgroundPublicSource});
  }

  .gradient-mask {
    background: linear-gradient(
      rgba(0, 0, 0, 255) 0%,
      rgba(0, 0, 0, 0) 30%,
      rgba(0, 0, 0, 0) 100%
    );
    min-height: 100vh;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .content-and-arrow-wrapper {
    position: relative;
    flex-grow: 3;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  .top-content {
    padding-left: var(--gutter-width);
    padding-right: var(--gutter-width);
    padding-bottom: 64px;
    color: var(--white);
  }

  h1 {
    font-weight: normal;
    font-size: clamp(20px, 4vw, 44px);
  }

  .subheading {
    font-size: clamp(16px, 3vw, 24px);
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  .blurb {
    font-size: clamp(16px, 3vw, 20px);
    width: 60%;
  }

  .movie-trailer-links {
    display: flex;
    font-weight: 500;
    gap: 2em;
    margin-top: 1em;
    text-shadow: 0.5px 0.5px;

    a {
      letter-spacing: 2px;
      text-decoration: none;
      text-transform: uppercase;
    }

    a:hover {
      text-decoration: underline;
    }
  }

  .movie-link {
    color: var(--accent-yellow);
  }

  .join-action {
    background-color: var(--black);
    padding: 1em var(--gutter-width);
  }

  h2 {
    text-transform: uppercase;
    font-size: 22px;
    text-align: center;
    line-height: 1.8;
  }

  h3 {
    text-align: center;
  }

  .movie-title {
    font-style: italic;
  }

  .bottom-links {
    display: grid;
    justify-items: center;
    // should be no more than three columns
    --max-columns: 3;
    --links-grid-width: (100% - (var(--gutter-width) * 2));
    --min-column-width: var(--links-grid-width) / var(--max-columns);
    grid-template-columns: repeat(
      auto-fit,
      minmax(max(300px, var(--min-column-width)), 1fr)
    );
    grid-auto-rows: min-content;
    gap: 32px;
  }

  .thank-yous {
    background-color: var(--black);
    display: flex;
    flex-direction: column;
    padding: 2em var(--gutter-width);

    li {
      text-align: center;
      list-style-type: none;
    }
  }

  .msac-thanks {
    margin-top: 32px;
    align-self: center;
    width: 80%;
    text-align: center;
  }

  .msac-link {
    background-color: white;
    display: block;
    align-self: center;
    padding-right: 8px;
    margin-top: 10px;

    &:hover {
      opacity: 0.8;
    }
  }

  @media screen and (max-width: 800px) {
    h1 {
      font-weight: bold;
    }

    .blurb {
      width: 100%;
    }

    .msac-thanks {
      width: 100%;
    }

    .main-page-and-background {
      background-image: none;
    }
  }
`;

const ManInWindowPage = () => {
  return (
    <>
      <SEO pageTitle="The Man in the Window" />
      <Layout>
        <StyledManInPageWindow>
          <div className="main-page-and-background">
            <div className="gradient-mask">
              <TopLinks isHome pageType={pageTypes.DARK} />
              <div className="content-and-arrow-wrapper">
                <PrevNextPageButton
                  path={routePaths.TIPSY}
                  title="Tipsy Movie"
                  type="Next"
                />
                <div className="top-content">
                  <h1>The Man In The Window</h1>
                  <p className="blurb">
                    When a Black man is falsely accused by his White neighbors
                    of a crime he did not commit, he receives help from an
                    unlikely ally. But should he bet his life on this new ally?
                  </p>
                  <div className="movie-trailer-links">
                    <a
                      className="movie-link"
                      href="https://youtu.be/ZIwbVnfYcow"
                      rel="noreferrer"
                      target="_blank"
                    >
                      Watch Movie
                    </a>
                    <a
                      className="trailer-link"
                      href="https://www.youtube.com/watch?v=5kPMryUaLmY"
                      rel="noreferrer"
                      target="_blank"
                    >
                      Watch Trailer
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="join-action">
            <div className="more-info-headers">
              <h2>Join The Action</h2>
              <h3>
                Follow the Production of{' '}
                <span className="movie-title">The Man in the Window</span>
              </h3>
            </div>
            <div className="bottom-links">
              <FilmMainPageBottomLink
                external
                imageSource={stayInTheLoopPicture}
                linkTo="https://vimeo.com/884576556/4fbd15830c"
                subtitle="Post Production Meeting With Editor, VFX Editor, And Sound Designer"
                title="Stay in the Loop"
              />
              <FilmMainPageBottomLink
                external
                imageSource={auditionsPicture}
                linkTo="https://vimeo.com/824595454/5dd487d1b2"
                subtitle="5/6 Auditions"
                title="Stay in the Loop"
              />
              <FilmMainPageBottomLink
                imageSource={crewBiosPicture}
                linkTo={routePaths.TMITW_FILMMAKERS}
                subtitle="Crew Biographies"
                title="Filmmakers"
              />
              <FilmMainPageBottomLink
                external
                imageSource={crewFilmTalkPicture}
                linkTo="https://youtu.be/fUuw_YPiwbU"
                subtitle="3/19 Pre Production Meeting"
                title="Stay in the Loop"
              />
              <FilmMainPageBottomLink
                external
                imageSource={proposalAndMarketingPicture}
                linkTo={routePaths.TMITW_PRE_PRODUCTION_ARTIFACTS}
                subtitle="Pre-Production Artifacts"
                title="Learn More"
              />
            </div>
          </div>
          <div className="thank-yous">
            <h2>The filmmakers wish to thank</h2>
            {donorsStore.donors.map((name) => (
              <li key={name}>{name}</li>
            ))}
            <p className="msac-thanks">
              This film project is supported in part by the Maryland State Arts
              Council (MSAC). To discover more about the MSAC and how they
              impact Maryland, visit{' '}
              <a href="https://www.msac.org/" rel="noreferrer" target="_blank">
                msac.org
              </a>
              .
            </p>
            <a
              className="msac-link"
              href="https://www.msac.org/"
              rel="noreferrer"
              target="_blank"
            >
              <Image alt="MSAC Logo" src={msacLogo} width={180} />
            </a>
          </div>
        </StyledManInPageWindow>
      </Layout>
    </>
  );
};

export default ManInWindowPage;
