import React from 'react';

import {
  CardContainer,
} from './CardStyles';

const Card = ({ children }) => {
  return (
    <CardContainer>
      {children}
    </CardContainer>
  )
}

export default Card;