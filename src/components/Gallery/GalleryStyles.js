import styled from 'styled-components';

export const GalleryContainer = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4em 0;
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

export const CardWrapper = styled.div`
  width: 60%;
  display: flex;
  justify-content: ${ props => props.reverse ? 'flex-end' : 'flex-start' };
`;