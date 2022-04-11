import styled from 'styled-components';

export const ContentWraper = styled.div`
  display: flex;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const NavWrapper = styled.div`
  flex: 1;
  height: 100%;
  width: 16em;
  position: fixed;
  z-index: 1; /* hey bish what's good */
  top: 0;
  left: 0;
  background-color: #9bd8db;
  overflow-x: hidden;
  padding-top: 0em;

  @media screen and (max-width: 768px) {
    position: relative;
    width: 100%;
  }
`;

export const BodyWrapper = styled.div`
  flex: 1;
  margin-left: 16em;
  padding: 0 2em;

  @media screen and (max-width: 768px) {
    margin-left: 0;
    padding: 0 1em;
  }
`;


// export const GridNavWrap = styled.div` 
//   position: sticky;
//   top: 0;
//   left: 0;
//   background-color: #9bd8db;
//   /* height: 10vh; */
//   /* width: 100vw; */
//   margin: 0;


//   @media screen and (orientation: landscape) {
//     /* height: 100vh; */
//     /* width: 25vw; */
//     width: fit-content;
//     }
// `

// export const GridBodyWrap = styled.div` 
//   display: block;

//   @media screen and (orientation: landscape) {
//     margin-top: 0;
//     /* margin-left: 25vw; */
//   }
// `