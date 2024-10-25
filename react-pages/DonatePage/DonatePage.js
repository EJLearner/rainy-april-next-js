import React from 'react';

import ContentContainer from '../../components/ContentContainer';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import TopLinks from '../../components/TopLinks';

import DonateBase from './DonateBase';

function DonationThanksPage() {
  return (
    <Layout>
      <SEO pageTitle="Donate" />
      <TopLinks />
      <ContentContainer>
        <DonateBase />
      </ContentContainer>
    </Layout>
  );
}

export default DonationThanksPage;
