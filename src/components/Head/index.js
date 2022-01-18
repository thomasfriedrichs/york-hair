import React from 'react';
import { HeadWrap, TextWrap } from './HeadElement';
import { NavWrap } from './NavElement';
import TextAnimation from './TextAnimation';

const Head = () => {
  return (
    <>
      <HeadWrap>  
        <NavWrap>
        </NavWrap>
          <TextAnimation/>
      </HeadWrap>  
    </>
  )
}

export default Head;
