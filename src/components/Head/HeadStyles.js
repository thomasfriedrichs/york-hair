import styled, { 
  keyframes 
} from 'styled-components';

const animation = keyframes` 
  100% { opacity: 1; }
`

const FadeInUpAnimationLeft = keyframes`
  from {
    transform: translate3d(-10px, 5px, 0) scale(2);
  }
  to {
    transform: translate3d(0, 0, 0) scale(1);
  }
`;

const FadeInUpAnimationRight = keyframes`
  from {
    transform: translate3d(10px, 5px, 0) scale(2);
  }
  to {
    transform: translate3d(0, 0, 0) scale(1);
  }
`;

export const HeadWrap = styled.div`
  height: 100vh;
  z-index: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const TextWrap = styled.div`
  height: 10vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 55%;

  @media screen and (orientation: landscape) {
    flex-direction: row;
    justify-content: center;
    gap: 5%;
  }
`

export const WordWrap = styled.h1` 
text-align: center;
  
`

export const FadeUpIn = styled.div`
  display: inline-block;
  animation-fill-mode: forwards;

  &.left {
    animation: ${FadeInUpAnimationLeft} 1.5s linear ${props => props.randomnumber + 's'};
  }
  &.right {
    animation: ${FadeInUpAnimationRight} 1.5s linear ${props => props.randomnumber + 's'};
  }
`

export const LetterWrap = styled.span` 
  margin: 0 .3em;
  opacity: 0;
  transition: transform 500ms;
  animation: ${animation} 3s linear ${props => props.randomnumber + 's'};
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
`

export const AnimationWrap = styled.div` 
  width: 100%;
  z-index: 1;
`

