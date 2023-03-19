import * as React from 'react';
import styled from 'styled-components';

import FilmMainPageBottomLink from '../components/FilmMainPageBottomLink';
import Layout from '../components/Layout';
import PrevNextPageButton from '../components/PrevNextPageButton';
import SEO from '../components/SEO';
import TopLinks, {pageTypes} from '../components/TopLinks';
import crewBiosPicture from '../images/crew-bios-thumb.jpg';
import proposalAndMarketingPicture from '../images/tmitw-pre-production-artifacts-thumbnail.png';
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
    background: linear-gradient(rgba(0, 0, 0, 255) 0%, rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0) 100%);
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

  .trailer-link {
    color: var(--accent-yellow);
    display: block;
    letter-spacing: 2px;
    margin-top: 1em;
    text-decoration: none;
    text-transform: uppercase;
  }

  .trailer-link:hover {
    text-decoration: underline;
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
    display: flex;
    flex-flow: row wrap;
    gap: 32px;
    justify-content: space-between;
  }

  @media screen and (max-width: 800px) {
    h1 {
      font-weight: bold;
    }

    .blurb {
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
                <PrevNextPageButton path={routePaths.TIPSY} title="Tipsy Movie" type="Next" />
                <div className="top-content">
                  <h1>
                    <div className="subheading">Coming Fall 2023</div>
                    The Man In The Window
                  </h1>
                  <p className="blurb">
                    When a Black man is falsely accused by his White neighbors of a crime he did not commit, he receives
                    help from an unlikely ally. But should he bet his life on this new ally?
                  </p>
                  <a
                    className="trailer-link"
                    href="https://www.youtube.com/watch?v=IfCTqClezmM"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Watch Teaser Here
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="join-action">
            <div className="more-info-headers">
              <h2>Join The Action</h2>
              <h3>
                Follow the Production of <span className="movie-title">The Man in the Window</span>
              </h3>
            </div>
            <div className="bottom-links">
              <FilmMainPageBottomLink
                imageSource={crewBiosPicture}
                linkTo={routePaths.TMITW_FILMMAKERS}
                subtitle="Crew Biographies"
                title="Filmmakers"
              />
              {/* <FilmMainPageBottomLink
              imageSource={testPicture}
              linkTo={routePaths.FILMMAKERS}
              subtitle="2/15 Pre Production Meeting"
              title="Stay in the Loop"
            /> */}
              <FilmMainPageBottomLink
                imageSource={proposalAndMarketingPicture}
                linkTo={routePaths.TMITW_PRE_PRODUCTION_ARTIFACTS}
                subtitle="Pre-Production Artifacts"
                title="Learn More"
              />
            </div>
          </div>
        </StyledManInPageWindow>
      </Layout>
    </>
  );
};

export default ManInWindowPage;
