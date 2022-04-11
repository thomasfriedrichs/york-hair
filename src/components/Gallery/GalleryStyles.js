import styled from 'styled-components';

export const GalleryContainer = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em 0;
`;

export const GalleryGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const GalleryRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;  

export const GalleryRowWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  @media screen and (min-width: 600px) {
    justify-content: ${props => props.reverse ? 'flex-end' : 'flex-start' };
  }
`

export const GalleryImage = styled.figure`
  flex: 1;

  > img {
    width: 100%;
  }

  @media screen and (min-width: 600px) {
    flex: 0.5;
  }
`;