import Image from 'next/image';
import React from 'react';

import ContentContainer from '../../components/ContentContainer';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import TopLinks from '../../components/TopLinks';
import topImage from '../../images/donate-top.png';
import blueLogo from '../../images/rainy-logo-blue.png';
import supportPicture from '../../images/support-picture.png';
import {misc} from '../../utils/constants';
import {useScreenWidthCheck} from '../../utils/useScreenWidthCheck';

import StyledDonatePage from './StyledDonatePage';

function DonatePage() {
  const screenIsSmall = useScreenWidthCheck({max: 800});

  return (
    <Layout>
      <SEO pageTitle="Donate" />
      <TopLinks />
      <ContentContainer>
        <StyledDonatePage>
          {!screenIsSmall && <Image alt={misc.PRESENTATIONAL_IMAGE} className="top-image" src={topImage} />}
          <div className="content-wrapper">
            <div className="content">
              <div className="image-thanks-wrapper">
                {/* TODO - low priority - figure out why I get Image component warning here */}
                {!screenIsSmall && <Image alt="film crew" className="support-image" src={supportPicture} width={400} />}
                <div className="logo-and-text">
                  {!screenIsSmall && <Image alt="company logo" className="logo" src={blueLogo} width={50} />}
                  <h2>Your Support Means The World</h2>
                  <p>
                    Thank you so very much for your donation—and even more special—thank you for your support of this
                    project. Your donation helps us to create quality, impactful films that emphasize underrepresented
                    perspectives and experiences.
                  </p>

                  <a href="https://www.gofundme.com/f/help-fund-film-production">Donate Now</a>
                </div>
              </div>
            </div>
          </div>
        </StyledDonatePage>
      </ContentContainer>
    </Layout>
  );
}

export default DonatePage;
