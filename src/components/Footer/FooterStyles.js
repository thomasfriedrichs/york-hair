import styled from 'styled-components';
import  {FaInstagramSquare}  from 'react-icons/fa';

export const FooterWrap = styled.div` 
  height: 10vh;
  width: 75vw;
  background-color: pink;
  text-align: center;

  @media screen and (orientation: portrait) {
    width: 100vw;
  }
`

export const IgIcon = styled(FaInstagramSquare)` 
  height: 5vh;
  width: 5vw;
`

export const A = styled.a` 
  color: black !important;
`

