import React from 'react';
import styled from 'styled-components';

import ContentContainer from '../components/ContentContainer';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import TopLinks from '../components/TopLinks';

const StyledAboutPage = styled.div`
  line-height: 1.5em;

  h1 {
    font-size: 44px;
    font-weight: normal;
  }

  .about-paragraph {
    margin-top: 32px;
  }

  .about-paragraph .person {
    text-align: center;
    margin-bottom: 1.5em;
  }

  .about-paragraph .person p {
    margin: 0.1em;
  }

  .about-paragraph .title {
    font-weight: bolder;
  }
`;

function AboutPage() {
  return (
    <Layout>
      <SEO pageTitle="About" />
      <TopLinks />
      <ContentContainer>
        <StyledAboutPage>
          <h1>About</h1>
          <div className="about-paragraph">
            <p>
              Founded in 2019 by April Day, Rainy April Day Productions aspires to have fun telling stories we find
              entertaining and thought-provoking without pretense or pretention. Our company is committed to developing
              stories using experimental and traditional filmmaking methods, while championing the traditionally
              underrepresented filmmaker and providing a platform to produce quality film and television projects. Rainy
              April Day upholds that genre storytelling, particularly horror, has a place in cinematic expression. Our
              work embraces the belief that even the most ordinary experiences can become unique and powerful stories
              when told from our diverse perspectives.
            </p>
            <div className="person">
              <p className="title accent-text">Founder and CEO</p>
              <p className="name">April Day</p>
            </div>
            <div className="person">
              <p className="title accent-text">President</p>
              <p className="name">Earl Jones</p>
            </div>
          </div>
        </StyledAboutPage>
      </ContentContainer>
    </Layout>
  );
}

export default AboutPage;
