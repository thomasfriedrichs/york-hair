import styled from 'styled-components';

export const CardContainer = styled.div`
  background-image: linear-gradient(
    to bottom right,
    rgba(255, 255, 255, 0.2) 0%,
    rgba(255, 255, 255, 0.1) 100%
  );
  backdrop-filter: blur(6px);
  border-radius: 12px;
  width: 20em;
  min-height: 16em;
  height: fit-content;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  padding: 60px;
  box-shadow: rgba(255, 255, 255, 0.5) -20px -20px 45px inset,
    rgba(0, 0, 0, 0.1) 10px 10px 20px, 
    rgba(0, 0, 0, 0.06) 5px 5px 10px;
  position: relative;
  margin-bottom: 1em;
`;

export const CardImage = styled.img`
  max-width: 10em;
  display: block;
  margin: 0 auto;
`;