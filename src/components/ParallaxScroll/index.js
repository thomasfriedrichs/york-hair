import React, { useState, useEffect } from 'react';
import Head from './../Head';
import Footer from './../Footer/index';
import { useScrollPosition } from './../../hooks/useScrollPosition';
import {
  ParallaxContainer,
} from './ParallaxScroll';

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } =  window;
  console.log('INNER_WIDTH:', width);
  return {
    width,
    height
  }
}

const ParallaxScroll = ({ children, parallaxY }) => {
  const scrollPosition = useScrollPosition();
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  const [isMobile, setIsMobile] = useState(false);
  
  const handleParallaxY = () => {
    const defaultVal = 0.3;

    if(parallaxY) {
      if(isMobile) {
        parallaxY = 0;
      }
      return parallaxY;
    } else {
      return  defaultVal;
    }
  }

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if(windowDimensions < 900) {
      setIsMobile(true);
    } 

  }, [windowDimensions])
  
  const parallaxVal = handleParallaxY();


  return (
    <ParallaxContainer
      style={{
        transform: `translateY(-${scrollPosition.scrollY / 1.1 * parallaxVal}px)`
      }}
    >
      {children}
    </ParallaxContainer>
  )
}

export default ParallaxScroll;