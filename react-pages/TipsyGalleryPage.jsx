import Image from 'next/image';
import React, {useState} from 'react';
import styled from 'styled-components';

import Button from '../components/Button';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import TopLinks from '../components/TopLinks';
import aprilBio from '../images/april-bio.jpg';
import crewBiosPicture from '../images/crew-bios-thumb.jpg';
import jaiBio from '../images/jai-bio.jpg';
import sholaBio from '../images/shola-bio.jpg';

const allPictures = [
  {picReference: aprilBio, alt: 'April Jones Head Shot', file: 'april-bio.jpg'},
  {picReference: jaiBio, alt: 'Jai Head Shot', file: 'jai-bio.jpg'},
  {picReference: sholaBio, alt: 'Shola Head Shot', file: 'shola-bio.jpg'},
  {picReference: crewBiosPicture, alt: 'Crew Shot', file: 'crew-bios.jpg'}
];

const StyledTipsyGalleryPage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  .main-picture {
    align-self: center;
  }

  .main-picture img {
    height: 70vh;
    width: auto;
  }

  .thumbnails {
    display: flex;
    gap: 3px;
  }

  .thumbnail-image-wrapper {
    border: 1px solid transparent;
    cursor: pointer;
    display: flex;

    &:hover {
    }
  }

  .thumbnails img {
    align-self: center;
  }

  .selected {
    border: 1px solid var(--accent-yellow);
  }
`;

export default function TipsyGalleryPage() {
  const [displayPicture, setdisplayPicture] = useState(allPictures[0].file);
  const selectedPicture = allPictures.find((picture) => picture.file === displayPicture);

  return (
    <Layout>
      <SEO pageTitle="Donate" />
      <TopLinks />
      <StyledTipsyGalleryPage>
        <div className="main-picture">
          <Image alt={selectedPicture.alt} src={selectedPicture.picReference} />
        </div>
        <div className="thumbnails">
          {allPictures.map(({picReference, alt, file}) => {
            const isSelected = selectedPicture.file === file;

            return (
              <React.Fragment key={alt}>
                <Button
                  className={[isSelected && 'selected', 'thumbnail-image-wrapper'].join(' ')}
                  onClick={() => setdisplayPicture(file)}
                >
                  <Image alt={`${alt} thumbnail`} key={alt} src={picReference} width={100} />
                </Button>
              </React.Fragment>
            );
          })}
        </div>
      </StyledTipsyGalleryPage>
    </Layout>
  );
}
