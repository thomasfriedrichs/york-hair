import styled from "styled-components"; 

export const AboutWrap = styled.section` 
  /* height: 100vh; */
  display: flex;
  justify-content: center;
  
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

// export const OpaqueContainerText = styled.div`
//   background-image: linear-gradient(
//     to bottom right,
//     rgba(255, 255, 255, 0.2) 0%,
//     rgba(255, 255, 255, 0.1) 100%
//   );
//   backdrop-filter: blur(6px);
//   border-radius: 12px;
//   width: 30em;
//   min-height: 16em;
//   height: fit-content;
//   border-top: 1px solid rgba(255, 255, 255, 0.5);
//   border-left: 1px solid rgba(255, 255, 255, 0.5);
//   padding: 1%;
//   box-shadow: 
//     rgba(255, 255, 255, 0.5) -20px -20px 45px inset,
//     rgba(0, 0, 0, 0.1) 10px 10px 20px, 
//     rgba(0, 0, 0, 0.06) 5px 5px 10px;
//   position: relative;
//   margin: 5%;
//   margin-bottom: 10%;
// `

// export const OpaqueContainerPic = styled.div`
//   background-image: linear-gradient(
//     to bottom right,
//     rgba(255, 255, 255, 0.2) 0%,
//     rgba(255, 255, 255, 0.1) 100%
//   );
//   backdrop-filter: blur(6px);
//   border-radius: 12px;
//   width: 20em;
//   min-height: 16em;
//   height: fit-content;
//   border-top: 1px solid rgba(255, 255, 255, 0.5);
//   border-left: 1px solid rgba(255, 255, 255, 0.5);
//   padding: 1%;
//   box-shadow: 
//     rgba(255, 255, 255, 0.5) -20px -20px 45px inset,
//     rgba(0, 0, 0, 0.1) 10px 10px 20px, 
//     rgba(0, 0, 0, 0.06) 5px 5px 10px;
//   position: relative;
//   margin: 5%;
//   margin-bottom: 10%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `

export const AboutText = styled.div` 
  /* text-indent: 2em;
  line-height: 3.5vh;
  font-weight: 5em; */
`