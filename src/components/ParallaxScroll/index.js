import React from 'react';
import Head from './../Head';
import Footer from './../Footer/index';
import { useScrollPosition } from './../../hooks/useScrollPosition';
import {
  ParallaxContainer,
} from './ParallaxScroll';

const ParallaxScroll = ({ children, parallaxY }) => {
  const scrollPosition = useScrollPosition();
  
  const handleParallaxY = () => {
    const defaultVal = 0.3;

    if(parallaxY) {
      return parallaxY;
    } else {
      return  defaultVal;
    }
  }
  
  const parallaxVal = handleParallaxY();


  return (
    <ParallaxContainer
      style={{
        transform: `translateY(-${scrollPosition.scrollY / 10 * parallaxVal}px)`
      }}
    >
      {children}
    </ParallaxContainer>
  )
}

export default ParallaxScroll;