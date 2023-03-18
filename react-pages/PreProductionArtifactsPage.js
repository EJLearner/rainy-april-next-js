import Image from 'next/image';
import * as React from 'react';
import styled from 'styled-components';

import ContentContainer from '../components/ContentContainer';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import TopLinks from '../components/TopLinks';
import distributionPlanPicture from '../images/distribution-plan.png';
import marketingPlanPicture from '../images/marketing-plan2.png';
import socialMediaPlanPicture from '../images/social-media-plan.png';

const StyledPreProductionArtifactsPage = styled.div`
  h1 {
    font-size: 44px;
    font-weight: normal;
  }

  .wrapper {
    display: inline-block;
    width: 300px;
  }

  .thumbnail-and-title {
    display: flex;
    flex-direction: column;
    margin-top: 32px;
    text-align: center;
  }

  a {
    color: var(--black);
  }

  a:hover picture {
    opacity: 0.7;
  }
`;

const PreProductionArtifactsPage = () => {
  return (
    <Layout>
      <SEO pageTitle="TMITW Pre-Production" />
      <TopLinks />
      <ContentContainer>
        <StyledPreProductionArtifactsPage>
          <h1>Pre-Production Artifacts</h1>
          <div className="wrapper">
            <a className="thumbnail-and-title" href="/Marketing-Plan.pptx">
              <Image alt="Marketing Plan Thumbnail" src={marketingPlanPicture} width={300} />
              Marketing Plan
            </a>
            <a className="thumbnail-and-title" href="/Social-Media-Plan.pptx">
              <Image alt="Social Media Plan Thumbnail" src={socialMediaPlanPicture} width={300} />
              Social Media Plan
            </a>
            <a className="thumbnail-and-title" href="/Distribution-Plan.pptx">
              <Image alt="Distribution Plan Thumbnail" src={distributionPlanPicture} width={300} />
              Distribution Plan
            </a>
          </div>
        </StyledPreProductionArtifactsPage>
      </ContentContainer>
    </Layout>
  );
};

export default PreProductionArtifactsPage;
