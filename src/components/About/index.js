import React from 'react';

import Card from './../Card';
import { 
  AboutWrap, 
  AboutImgFigure, 
  OpaqueContainerText, 
  OpaqueContainerPic,
  AboutText,
  AboutTextWrap,
  AboutImg
} from './AboutStyles';
import { 
  Bio 
} from './../../data/about/index';
import rollie from '../../data/images/Rollie.jpg';

const About = ({id}) => {
  return (
    <AboutWrap id={id}>
      <AboutImgFigure>
        <AboutImg src={rollie} />
      </AboutImgFigure>
      <AboutTextWrap>
        <Card>
          <AboutText>
            <p>{Bio.text1}</p>
          </AboutText>
          <AboutText>
            <p>{Bio.text2}</p>
          </AboutText>
        </Card>
      </AboutTextWrap>
    </AboutWrap>
  );
};

export default About;