// import {StaticImage} from 'gatsby-plugin-image';
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

import ContentContainer from '../../components/ContentContainer';
import Filmmaker from '../../components/Filmmaker';
import Layout from '../../components/Layout';
import TopLinks, {pageTypes} from '../../components/TopLinks';
import aprilHeadshot from '../../images/april-bio.jpg';
import jaiHeadshot from '../../images/jai-bio.jpg';
import sholaHeadshot from '../../images/shola-bio.jpg';
import {misc} from '../../utils/constants';

const StyledInfoAndInterViews = styled.div`
  display: flex;
  justify-content: space-between;

  & > .filmmakers-info {
    flex: 2 1 0;
  }
`;

function FilmmakersPage() {
  return (
    <Layout>
      <TopLinks pageType={pageTypes.LIGHT} />
      <ContentContainer>
        <StyledInfoAndInterViews>
          <div className="filmmakers-info">
            <Filmmaker imageRender={<Image alt={misc.PRESENTATIONAL_IMAGE} src={aprilHeadshot} />} name="April Day">
              <p>
                April Day attended the UCF Film School and earned a BFA degree in Filmmaking with a concentration in
                screenwriting. Writing scripts and short stories gives her an outlet to pour out her thoughts and
                opinions from her own perspective and experiences and allows her to project herself into situations she
                may never experience otherwise. She has pursued her filmmaking passion because of the brilliant
                opportunity it provides to capture and entertain audiences while visually conveying what is often
                difficult to put into words. April is blessed to have the support and experiences of long-time
                collaborators, Shola Ajayi and Jai Rice. Their vision is to create quality, impactful films that reflect
                the society we would like to see.
              </p>
            </Filmmaker>
            <Filmmaker imageRender={<Image alt={misc.PRESENTATIONAL_IMAGE} src={sholaHeadshot} />} name="Shola Ajayi">
              <p>
                Shola Ajayi is a filmmaker and educator based in NYC and Lagos, Nigeria. Shola’s work has been featured
                on What’s Up Africa! Africa is A Country, African Independent Television, Showmax, Big Hero and Sarasota
                film festivals. When she is not developing projects, she is teaching and working in Lagos with community
                based organizations empowering disenfranchised groups.
              </p>
            </Filmmaker>
            <Filmmaker imageRender={<Image alt={misc.PRESENTATIONAL_IMAGE} src={jaiHeadshot} />} name="Jai Rice">
              <p>
                Jai Rice is an award-winning video producer/editor whose work has been recognized by the Webby Awards
                and the Tellys. Jai has produced a range of projects including an award-winning documentary on
                Philadelphia’s Mazzoni Center and his work has been featured nationally on CBS, Oprah’s Next Chapter and
                NOW with Alex Wagner. Aside from his film work, he is also a published fashion photographer.
              </p>
            </Filmmaker>
          </div>
        </StyledInfoAndInterViews>
      </ContentContainer>
    </Layout>
  );
}

export default FilmmakersPage;
