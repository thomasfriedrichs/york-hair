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

  @media screen and (orientation: portrait) {
    justify-content: space-evenly;
  }
`

export const TextWrap = styled.div`
  height: 10vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20%;

  @media screen and (orientation: landscape) {
    flex-direction: row;
    justify-content: center;
    gap: 5%;
  }
`

export const Accordion = styled.div` 
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  transition: all 0.6s ease-in-out;
`

export const PhoneNumber = styled.h4` 
  text-align: center;
  width: 100%;
  max-height: ${(props) => (props.open ? '100%' : '0')};
  overflow: hidden;
`

export const Link = styled.a`
  color: black !important;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`

export const FlexWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
` 


export const WordWrap = styled.h1`
  text-align: center;
`

export const BookingWord = styled.h4`
  text-align: center;
`

export const Button = styled.button` 
  background-color: pink;
  border: none;
	font: inherit;
  :hover {
    cursor: pointer;
  }
`

export const BookingWrap = styled.div` 
  height: 10vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20%;
  margin-top: 5%;

  @media screen and (orientation: landscape) {
    flex-direction: row;
    justify-content: center;
    gap: 5%;
  }
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

