import React from 'react';

import { 
  HeadWrap, 
} from './HeadStyles';
import TextAnimation from './TextAnimation';
import BookingAnimation from './BookingAnimation';

const Head = ({ id }) => {
  return (
    <>
      <HeadWrap id={id}>
        <TextAnimation/>
        <BookingAnimation/>
      </HeadWrap>  
    </>
  )
}

export default Head;
