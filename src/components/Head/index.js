import React from 'react';
import { 
  HeadWrap, 
  // TextWrap 
} from './HeadStyles';
import TextAnimation from './TextAnimation';
import ParallaxScroll from './../ParallaxScroll';
// import Card from './../Card';
import BookingAnimation from './BookingAnimation';

const Head = ({ id }) => {
  return (
    <>
      <HeadWrap id={id}>
        {/* <ParallaxScroll parallaxY={0.3}> */}
          <TextAnimation/>
          <BookingAnimation/>
        {/* </ParallaxScroll> */}
      </HeadWrap>  
    </>
  )
}

export default Head;
