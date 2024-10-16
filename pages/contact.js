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

  .content {
    margin-top: 32px;
  }
`;

function Contact() {
  return (
    <Layout>
      <SEO pageTitle="Contact" />
      <TopLinks />
      <ContentContainer>
        <StyledAboutPage>
          <h1>Contact</h1>
          <div className="content">
            Rainy April Day Productions
            <br />
            14114 Woodens Lane
            <br />
            Reisterstown, MD 21136
            <br />
            <a href="mailto:contact-me@rainyaprilday.com">
              contact-me@rainyaprilday.com
            </a>
          </div>
        </StyledAboutPage>
      </ContentContainer>
    </Layout>
  );
}

export default Contact;
