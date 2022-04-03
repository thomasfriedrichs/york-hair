import React from 'react';
import { 
  AboutWrap, 
  Img, 
  OpaqueContainerText, 
  OpaqueContainerPic,
  P
} from './AboutStyles';
import { 
  Bio 
} from './../../data/about/index';
import rollie from '../../data/images/Rollie.jpg';

const About = ({id}) => {
  return (
    <AboutWrap id={id}>
      <OpaqueContainerPic>
        <Img src={rollie}/>
      </OpaqueContainerPic>
      <OpaqueContainerText>
        <P>
          {Bio.text1}
        </P>
        <P>
          {Bio.text2}
        </P>
      </OpaqueContainerText>
    </AboutWrap>
  );
};

export default About;