import React from 'react';
import { 
  AboutWrap, Img, OpaqueContainerLeft, OpaqueContainerRight 
} from './AboutStyles';
import { Bio } from './../../data/about/index';

const About = ({id}) => {
  return (
    <AboutWrap id={id}>
      <OpaqueContainerLeft>
        {Bio.text}
      </OpaqueContainerLeft>
      <OpaqueContainerRight>
        <Img/>
      </OpaqueContainerRight>
    </AboutWrap>
  );
};

export default About;