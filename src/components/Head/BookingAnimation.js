import React, {
  useState
} from 'react';

import { 
  AnimationWrap, 
  LetterWrap, 
  BookingWrap, 
  FadeUpIn, 
  BookingWord,
  Link,
  Accordion,
  PhoneNumber,
  Button,
  FlexWrap
} from './HeadStyles';

const BookingAnimation = () => {
  const [ isOpen, setIsOpen ] = useState(false);
  const bookNow = 'BOOK NOW:'.split('');
  const seattle = 'SEATTLE'.split('');
  const bellevue = 'BELLEVUE'.split('');

  const handleClick = () => {
    setIsOpen(!isOpen);
};

  return (
    <AnimationWrap>
      <BookingWrap>
        <FlexWrap>
          <BookingWord>
            {bookNow.map((letter, index) => {
              const randomNumber = Math.random();
              return(
                <FadeUpIn 
                  key={index} 
                  randomnumber={randomNumber} 
                  className='left'
                >
                  <LetterWrap 
                    randomnumber={randomNumber}
                  >
                    {letter}
                  </LetterWrap>
                </FadeUpIn>
              )
            })}
          </BookingWord>
        </FlexWrap>
        <Link 
          href='https://square.site/book/YBN2FSA3VWYXR/roland-york-hair-seattle-wa' 
          target='_blank'
        >
          <BookingWord>
            {seattle.map((letter, index) => {
              const randomNumber = Math.random();
              return(
                <FadeUpIn 
                  key={index} 
                  randomnumber={randomNumber} 
                  className='right'
                  >
                  <LetterWrap  
                    randomnumber={randomNumber}
                  >
                      {letter}
                  </LetterWrap>
                </FadeUpIn>
              )
            })}
          </BookingWord>
        </Link>
        <Accordion>
          <Button onClick={handleClick}>
            <BookingWord>
              {bellevue.map((letter, index) => {
                const randomNumber = Math.random();
                return(
                  <FadeUpIn 
                    key={index} 
                    randomnumber={randomNumber}
                    className='right'
                  >
                    <LetterWrap 
                      randomnumber={randomNumber}
                    >
                      {letter}
                    </LetterWrap>
                  </FadeUpIn>
                )
              })}
            </BookingWord>
          </Button>
          <PhoneNumber open={isOpen}>
            (425) 215-4138
          </PhoneNumber>
        </Accordion>
      </BookingWrap>
    </AnimationWrap>
  );
};



export default BookingAnimation;
