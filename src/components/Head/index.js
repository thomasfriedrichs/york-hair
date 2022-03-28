import React from 'react';
import { 
  HeadWrap, 
  TextWrap 
} from './HeadStyles';
import TextAnimation from './TextAnimation';
import ParallaxScroll from './../ParallaxScroll';
import Card from './../Card';

const Head = ({ id }) => {
  return (
    <>
      <HeadWrap id={id}>
        <ParallaxScroll parallaxY={0.3}>
          <TextAnimation/>
        </ParallaxScroll>
      </HeadWrap>  
    </>
  )
}

export default Head;
