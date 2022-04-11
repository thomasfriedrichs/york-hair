import styled from 'styled-components';

export const GridNavWrap = styled.div` 
  position: sticky;
  top: 0;
  left: 0;
  background-color: #9bd8db;
  height: 10vh;
  width: 100vw;
  margin: 0;


  @media screen and (orientation: landscape) {
    height: 100vh;
    width: 25vw;
    }
`

export const GridBodyWrap = styled.div` 
  display: block;

  @media screen and (orientation: landscape) {
    margin-top: 0;
    margin-left: 25vw;
    }
`

