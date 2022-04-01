import React from 'react';
import { 
  AnimationWrap, 
  LetterWrap, 
  TextWrap, 
  FadeUpIn, 
  WordWrap
} from './HeadStyles';

const TextAnimation = () => {
  const roland = 'ROLAND'.split('');
  const york = 'YORK'.split('');
  const hair = 'HAIR'.split('');
  const text = [ roland, york, hair ];


  return (
    <AnimationWrap>
      <TextWrap>
        {text.map((word, index) => {
          return(
            <WordWrap key={index}>
              {word.map((letter, index) => {
                const randomnumber = Math.random();
                return (
                  <FadeUpIn 
                    key={index} 
                    randomnumber={randomnumber} 
                    className={word.length > 4 ? 'left' : 'right'}
                  >
                    <LetterWrap randomnumber={randomnumber}>{letter}</LetterWrap>
                  </FadeUpIn>
                )
              })}
            </WordWrap>
          )
        })}
      </TextWrap>
    </AnimationWrap>
  );
};



export default TextAnimation;
