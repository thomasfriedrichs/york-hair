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
      <OpaqueContainerLeft>
        {Bio.text}
      </OpaqueContainerLeft>
      <OpaqueContainerRight>
        <Img src={rollie}/>
      </OpaqueContainerRight>
    </AboutWrap>
  );
};

export default About;