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
              entertaining and thought-provoking without pretense or pretension. Our company is committed to developing
              stories using experimental and traditional filmmaking methods, while championing the traditionally
              underrepresented filmmaker and providing a platform to produce quality film and television projects. Rainy
              April Day upholds that genre storytelling, particularly horror, has a place in cinematic expression. Our
              work embraces the belief that even the most ordinary experiences can become unique and powerful stories
              when told from our diverse perspectives.
            </p>
            <p>
              Our first film release, The Man in the Window, was selected and debuted at two international film
              festivals in October 2024--the Baltimore International Black Film Festival and the Twin Cities Black
              International Film Festival. In addition to being the launching pad for future filmmaking opportunities,
              The Man in the Window and its accompanying curriculum will be screened by educators around the country.
              The curriculum uses the film as a basis for discussing current race relations and to encourage and remove
              the discomfort for having important conversations about improving racial equity and helping others
              recognize the humanity of black and brown people.
            </p>
            <p>
              Amid the success of our first release, we are now raising funds for our second film production. There is
              so much more to come!
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
