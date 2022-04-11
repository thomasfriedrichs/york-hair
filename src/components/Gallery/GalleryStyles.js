import styled from 'styled-components';

export const GalleryContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em 0;
  margin: 0 auto;
`;

export const GalleryGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 75em;
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

  @media screen and (min-width: 769px) {
    justify-content: ${props => props.reverse ? 'flex-end' : 'flex-start' };
  }
`

export const GalleryImage = styled.figure`
  flex: 1;
  max-width: 40em;

  > img {
    width: 100%;
    border-radius: 10px;
  }

  @media screen and (min-width: 769px) {
    flex: 0.5;
  }
`;