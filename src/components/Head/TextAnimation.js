import React from 'react';
import { AnimationWrap, LetterWrap, TextWrap, FadeUpIn} from './HeadStyles';

const TextAnimation = () => {
  const text = 'ROLAND YORK HAIR'.split('');

  return (
    <AnimationWrap>
      <TextWrap>
        {text.map((item, index) => {
          const randomnumber = Math.random();
          return (
            <FadeUpIn key={index} randomnumber={randomnumber} className={index < 7 ? 'left' : 'right'}>
              <LetterWrap randomnumber={randomnumber}>{item}</LetterWrap>
            </FadeUpIn>
          );
          })}
      </TextWrap>
    </AnimationWrap>
  );
};



export default TextAnimation;
