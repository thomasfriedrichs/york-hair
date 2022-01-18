import styled, { keyframes } from 'styled-components';

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
  background-color: pink; 
  z-index: 0;
  display: flex;
`

export const TextWrap = styled.h1`
  padding: 50vh 10%;
  height: 10vh;
  width: 100%;
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
  height: 100vh;
  width: 75vw;
  z-index: 1;
`

