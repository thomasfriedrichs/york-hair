import styled from 'styled-components';

export const NavContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    flex-direction: row;
    min-height: 5em;
  }
`;

// export const NavWrap = styled.div`
//   background-color: #9bd8db;
//   display: flex;
//   flex-direction: row;
//   justify-content: space-around;
//   max-height: 100em;

//   @media screen and (orientation: landscape) {
//     flex-direction: column;
//     justify-content: flex-start;
//     padding-bottom: 2em;
//     height: 100%;
//   }
// `
export const LogoWrap = styled.div` 
  /* width: 45%;
  height: 100%;
  position: relative; 
  */

  /* @media screen and (orientation: landscape) {
    width: 100%;
    height: 30vh; 
  } */
`

export const SelectionWrap = styled.div` 
  width: 100%;
  /* height: 3em; */
  /* margin-top: 2em; */
  display: flex;
  align-items: center;
  flex-direction: column;


  /* flex-direction: row; */
  /* justify-content: space-around;
  padding-top: 5%;
  padding-right: 5%; */

  @media screen and (max-width: 768px) {
    flex-direction: row;
    /* flex-direction: column; */
    /* gap: 0.1em; */
    /* padding-bottom: 10%; */
    /* margin-top: 35vh; */
  }
`

export const Logo = styled.img`
  /* display: block; */
  /* margin: 0 auto; */
  width: 100%;
  margin-bottom: 2em;
  max-width: 15em;

  @media screen and (max-width: 768px) {
    margin-bottom: 0;
  }
`

export const ItemWrap = styled.div` 
  min-height: 6em;
  font-size: 1.2rem;
  display: flex;

  &:hover {
    cursor: pointer;
  }

  & > a {
    margin: auto 0;
    transition: 100ms ease-in-out;
    
    &:hover {
      transform: translateY(-4px);
    }
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 0;
    margin: 0 0.65em;
    font-size: 1rem;
  }
`

// export const Item = styled.p`
//   letter-spacing: 0.1em;
//   font-size: 1rem;
//   font-weight: bold;
//   margin: 0;

//   @media screen and (orientation: landscape) {
//     font-size: 1.6rem;
//     text-align: center;
//   }
// `