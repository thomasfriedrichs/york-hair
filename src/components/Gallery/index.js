import React from 'react'; 

import images from './../../data/images';
import {
  GalleryContainer,
  GalleryGrid,
  GalleryRow,
  GalleryRowWrapper,
  GalleryImage,
} from './GalleryStyles';

const Gallery = ({ id }) => {
  return (
    <GalleryContainer id={id}>
      <GalleryGrid>
        {images && images.map((image, index) => {
          return index % 2 === 0 ?
            <GalleryRow key={index}>
              <GalleryRowWrapper>
                <GalleryImage>
                  <img src={image.link} />
                </GalleryImage>
              </GalleryRowWrapper>
            </GalleryRow>
          :
            <GalleryRow key={index}>
              <GalleryRowWrapper reverse={true}>
                <GalleryImage>
                  <img src={image.link} />               
                </GalleryImage>
              </GalleryRowWrapper>
            </GalleryRow>
        })}
      </GalleryGrid>
    </GalleryContainer>
  )
}

export default Gallery;