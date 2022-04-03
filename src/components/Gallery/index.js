import React from 'react'; 
import images from './../../data/images';
import Card from './../Card';
import ParallaxScroll from './../ParallaxScroll';
import {
  GalleryContainer,
  GalleryGrid,
  GalleryRow,
  CardWrapper,
} from './GalleryStyles';

const Gallery = ({ id }) => {
  return (
    <GalleryContainer id={id}>
      <GalleryGrid>
        {images && images.map((image, index) => {
          return index % 2 === 0 ?
            <GalleryRow key={index}>
              <CardWrapper>
                <ParallaxScroll parallaxY={image.parallaxY}>
                  <Card
                    image={image.link}
                  />
                </ParallaxScroll>
              </CardWrapper>
            </GalleryRow>
          :
            <GalleryRow key={index}>
              <CardWrapper reverse={true}>
                <ParallaxScroll parallaxY={image.parallaxY}>
                  <Card
                    image={image.link}
                  />
                </ParallaxScroll>
              </CardWrapper>
            </GalleryRow>
        })}
      </GalleryGrid>
    </GalleryContainer>
  )
}

export default Gallery;