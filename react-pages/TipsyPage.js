import * as React from 'react';
import styled from 'styled-components';

import FilmMainPageBottomLink from '../components/FilmMainPageBottomLink';
import Layout from '../components/Layout';
import PrevNextPageButton from '../components/PrevNextPageButton';
import TopLinks, {pageTypes} from '../components/TopLinks';
import ajInterViewPicture from '../images/aj-tipsy-interview.jpg';
import tipsyPpa from '../images/tipsyppa.png';
import routePaths from '../utils/routePaths';
const tipsyBackgroundPublicSource = '/tipsy-background.png';

const StyledTipsyPage = styled.div`
  color: var(--white);
  letter-spacing: 1.5px;

  .main-page-and-background {
    min-height: 100vh;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
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
    width: 80%;
  }

  h1 {
    font-weight: normal;
    font-size: 44px;
  }

  .subheading {
    font-size: 24px;
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  .blurb {
    font-size: 20px;
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
`;

const TipsyPage = () => {
  const backgroundStyle = {backgroundImage: `url(${tipsyBackgroundPublicSource})`};

  return (
    <Layout>
      <StyledTipsyPage>
        <div className="main-page-and-background" style={backgroundStyle}>
          <div className="gradient-mask">
            <TopLinks isHome pageType={pageTypes.DARK} />
            <div className="content-and-arrow-wrapper">
              <PrevNextPageButton path={routePaths.MAIN} title="The Man In The Window Movie" type="previous" />
              <div className="top-content">
                <h1>Tipsy</h1>
                <p className="blurb">
                  High school teacher Shawna is young, carefree, and fun. She likes to go out and party on the weekends
                  with her friends and hookup with men in a drunken haze of one-night stands. When she gets a
                  threatening note to not say no to a former lover intent on having her to himself, she dismisses it as
                  a prank by one of her students. But soon the threats intensify and strike closer to home. The clock is
                  ticking for Shawna. Will she learn her stalker’s identity before it’s too late?
                </p>
                <a
                  className="trailer-link"
                  href="https://vimeo.com/368163654/ba50ac3309"
                  rel="noreferrer"
                  target="_blank"
                >
                  Watch Trailer Here
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="join-action">
          <div className="more-info-headers">
            <h2>Join The Action</h2>
            <h3>
              Follow the Production of <span className="movie-title">Tipsy</span>
            </h3>
          </div>
          <div className="bottom-links">
            <FilmMainPageBottomLink
              external
              imageSource={ajInterViewPicture}
              linkTo="https://player.vimeo.com/video/368597135"
              subtitle="Filmmaker Interviews"
              title="Learn More"
            />
            {/* TODO make gallery */}
            <FilmMainPageBottomLink
              imageSource={tipsyPpa}
              isFile
              linkTo="/TipsyFilmProposal.pdf"
              subtitle="Pre-Production Artifacts"
              title="Learn More"
            />
          </div>
        </div>
      </StyledTipsyPage>
    </Layout>
  );
};

export default TipsyPage;
