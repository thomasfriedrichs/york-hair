import React from 'react';

import Card from './../Card';
import { 
  AboutContainer,
  AboutWrap, 
  AboutImgFigure, 
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
    <AboutContainer id={id}>
      <AboutWrap>
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
    </AboutContainer>
  );
};

export default About;