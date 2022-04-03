import React from 'react';
import { 
  AboutWrap, 
  Img, 
  OpaqueContainerLeft, 
  OpaqueContainerRight 
} from './AboutStyles';
import { Bio } from './../../data/about/index';
import rollie from '../../data/images/Rollie.jpg';

const About = ({id}) => {
  return (
    <AboutWrap id={id}>
      <OpaqueContainerRight>
        <Img src={rollie}/>
      </OpaqueContainerRight>
      <OpaqueContainerLeft>
        {Bio.text}
      </OpaqueContainerLeft>
    </AboutWrap>
  );
};

export default About;