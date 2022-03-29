import styled from 'styled-components';

export const NavWrap = styled.div` 
  background-color: #9bd8db;
  z-index: 20;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 10vh;

  @media screen and (orientation: landscape) {
    flex-direction: column;
    gap: 3vh;
    height: 100vh;
  }
`
export const LogoWrap = styled.div` 
  width: 45%;

  @media screen and (orientation: landscape) {
    width: 100%;
    height: 30vh;
  }
`

export const Logo = styled.img`
  display: block;
  margin: 0 auto;
  width: 100%;

  @media screen and (orientation: landscape) {
    width: 100%;
  }
`

export const Link = styled.a` 

`

export const SelectionWrap = styled.div` 
  width: 100%;
  height: 60%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  padding-top: 5%;
  padding-right: 5%;

  @media screen and (orientation: landscape) {
    flex-direction: column;
    gap: 3vh;
    padding-bottom: 10%;
  }
`

export const ItemWrap = styled.div` 

  &:hover {
    cursor: pointer ;
  }

  @media screen and (orientation: landscape) {
    margin: 5%;
  }
`
export const Item = styled.p` 
  font-size: .6rem;
  font-weight: bold;

  @media screen and (orientation: landscape) {
    letter-spacing: 0.1em;
    font-size: 2rem;
    text-align: center;
  }
`