import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

import ContentContainer from '../../components/ContentContainer';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import TopLinks from '../../components/TopLinks';
import topImage from '../../images/donate-top.png';
import blueLogo from '../../images/rainy-logo-blue.png';
import supportPicture from '../../images/support-picture.png';
import {misc} from '../../utils/constants';
import {useScreenWidthCheck} from '../../utils/useScreenWidthCheck';

/* TODO: whole [disabled] block can be removed when donate page is back */
const StyledDonatePage = styled.div`
  --gray-background: rgb(222, 222, 222);
  position: relative;

  * {
    border-radius: 8px;
  }

  img {
    border-radius: 0px;
    height: auto;
  }

  .top-image {
    width: 100%;
    position: absolute;
  }

  .content-wrapper {
    position: absolute;
    width: 100%;
  }

  .content {
    margin: 32px 128px;
    display: flex;
    gap: 32px;
    justify-content: center;
  }

  .image-thanks-wrapper {
    background-color: var(--gray-background);
    width: 400px;
    font-size: 16px;

    .logo-and-text {
      display: flex;
      flex-direction: column;
      padding: 16px 32px;
    }

    .logo {
      margin-left: -10px;
      width: 50px;
    }

    h2 {
      margin-top: 8px;
      font-size: 21px;
    }
  }

  a {
    &[disabled] {
      background-color: grey;

      &:hover {
        text-decoration: none;
        cursor: default;
      }
    }

    background-color: var(--accent-yellow);
    color: var(--black);
    margin-top: 1em;
    padding: 4px 8px;
    text-align: center;
    display: inline-block;
    align-self: center;
  }

  @media screen and (max-width: 800px) {
    .content {
      flex-direction: column;
      margin: 16px;
      gap: 0;
    }

    .image-thanks-wrapper {
      width: 100%;
    }
  }
`;

function DonatePage() {
  const screenIsSmall = useScreenWidthCheck({max: 800});

  return (
    <Layout>
      <SEO pageTitle="Donate" />
      <TopLinks />
      <ContentContainer>
        <StyledDonatePage>
          {!screenIsSmall && (
            <Image
              alt={misc.PRESENTATIONAL_IMAGE}
              className="top-image"
              src={topImage}
            />
          )}
          <div className="content-wrapper">
            <div className="content">
              <div className="image-thanks-wrapper">
                {!screenIsSmall && (
                  <Image
                    alt="film crew"
                    className="support-image"
                    src={supportPicture}
                    width={400}
                  />
                )}
                <div className="logo-and-text">
                  {!screenIsSmall && (
                    <Image
                      alt="company logo"
                      className="logo"
                      src={blueLogo}
                      width={50}
                    />
                  )}
                  <h2>Your Support Means The World</h2>
                  <p>
                    Your donation amplifies and supports the perspectives,
                    stories, and contributions of Black filmmakers. We create
                    spaces where these voices are heard, respected, and
                    celebrated, while also addressing the systemic inequalities
                    that have historically marginalized them.
                  </p>
                  <p>
                    By uplifting these voices, we can foster greater
                    understanding, inclusivity, and social change.
                  </p>
                  <p>
                    Thank you so very much for your donation. You’re helping us
                    to create quality, impactful films that emphasize
                    underrepresented perspectives and experiences!
                  </p>

                  <a
                    disabled
                    href=""
                    onClick={(event) => {
                      // TODO: remove prevent default when donate page is back
                      return event.preventDefault();
                    }}
                  >
                    {/* Donate Now */}
                    {/* TODO: update text when donate page is back */}
                    Donation Available Soon
                  </a>
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
