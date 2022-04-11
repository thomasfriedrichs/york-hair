import styled from "styled-components"; 

export const AboutContainer = styled.section` 
  display: flex;
  min-height: 100vh;
  justify-content: center;
  /* padding-top: 5%; */
  
    @media screen and ( orientation: portrait ){
      flex-direction: column;
    }
`

export const AboutWrap = styled.div`
  max-width: 80em;
  width: 100%;
  margin: 0 auto;
`;

export const AboutTextWrap = styled.div` 
  display: flex;
  flex-direction: column;
  /* padding: 0 0.5em; */
  flex: 1;
  justify-content: center;
`

export const AboutImgFigure = styled.figure` 
  flex: 1;
  max-width: 30em;
  display: block;
  margin: 0 auto 2em; 
  > img {
    width: 100%;
  }

  @media screen and ( orientation: portrait ) {
    margin-bottom: 1em;
  }
`

export const AboutImg = styled.img` 
  border-radius: 10px;
`

export const AboutText = styled.div` 
  text-indent: 2em;
  /* line-height: 3.5vh; */
  font-weight: 5em;
  background: transparent;
`