import styled from 'styled-components';

export const NavContainer = styled.section`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    min-height: 5em;
  }
`;

export const LogoWrap = styled.div` 

  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    width: auto;
    max-height: 10em;
  }
`

export const Logo = styled.img`
  width: 100%;
  margin-bottom: 2em;
  max-width: 15em;

  @media screen and (max-width: 768px) {
    margin-bottom: 0;
  }
`

export const SelectionWrap = styled.div` 
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    max-height: 2.5em;
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