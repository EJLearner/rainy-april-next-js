import React from 'react';

import ContentContainer from '../../components/ContentContainer';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import TopLinks from '../../components/TopLinks';

import DonateBase from './DonateBase';

function DonateThankYouPage() {
  return (
    <Layout>
      <SEO pageTitle="Thank You" />
      <TopLinks />
      <ContentContainer>
        <DonateBase hasDonated />
      </ContentContainer>
    </Layout>
  );
}

export default DonateThankYouPage;
