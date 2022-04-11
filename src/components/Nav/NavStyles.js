import styled from 'styled-components';

export const NavWrap = styled.div` 
  background-color: #9bd8db;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  max-height: 100em;

  @media screen and (orientation: landscape) {
    flex-direction: column;
    justify-content: flex-start;
    height: 100vh;
    padding-bottom: 2em;
  }
`
export const LogoWrap = styled.div` 
  width: 45%;
  height: 100%;
  position: relative;

  @media screen and (orientation: landscape) {
    width: 100%;
    height: 30vh;
  }
`

export const SelectionWrap = styled.div` 
  width: 100%;
  height: 3em;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  padding-top: 5%;
  padding-right: 5%;

  @media screen and (orientation: landscape) {
    flex-direction: column;
    gap: 0.1em;
    padding-bottom: 10%;
    margin-top: 35vh;
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


export const ItemWrap = styled.div` 

  &:hover {
    cursor: pointer ;
  }

  @media screen and (orientation: landscape) {
    margin: 10%;
  }
`
export const Item = styled.p` 
  font-size: .6rem;
  font-weight: bold;
  margin: 0;

  @media screen and (orientation: landscape) {
    letter-spacing: 0.1em;
    font-size: 2rem;
    text-align: center;
  }
`