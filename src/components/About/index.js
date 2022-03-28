import React from 'react';
import { 
  AboutWrap, OpaqueContainer 
} from './AboutStyles';

const About = ({id}) => {
  return (
    <AboutWrap id={id}>
      <OpaqueContainer>
      </OpaqueContainer>
      <OpaqueContainer>
        About
      </OpaqueContainer>
    </AboutWrap>
  )
}

export default About;