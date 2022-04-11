import styled from "styled-components"; 

export const AboutWrap = styled.section` 
  display: flex;
  justify-content: center;
  padding-top: 5%;
  
    @media screen and ( orientation: portrait ){
      flex-direction: column;
    }
`

export const AboutTextWrap = styled.div` 
  display: flex;
  flex-direction: column;
  padding: 0 0.5em;
  flex: 1;
`

export const AboutImgFigure = styled.figure` 
  flex: 1;
  
  > img {
    display: block;
    margin: 0 auto;
    max-width: 80%;
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
  line-height: 3.5vh;
  font-weight: 5em;
  background: transparent;
`