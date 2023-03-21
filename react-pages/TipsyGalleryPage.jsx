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
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;

  .content {
  }

  .image-wrapper {
    height: 300px;

    img {
      object-fit: contain;
      max-width: 100%;
      max-height: 100%;
    }
  }

  .thumbnails {
    position: absolute;
    bottom: 20px;
    display: flex;
    padding-left: 32px;
    padding-right: 32px;
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
    <StyledTipsyGalleryPage>
      <SEO pageTitle="Donate" />
      <TopLinks />
      <div className="content">
        <div className="image-wrapper">
          <Image alt={selectedPicture.alt} className="main-image" src={selectedPicture.picReference} />
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
      </div>
    </StyledTipsyGalleryPage>
  );
}
