import React from 'react';

import {
  CardContainer,
  CardImage,
} from './CardStyles';

const Card = ({ image }) => {
  return (
    <CardContainer>
      <CardImage src={image} />
    </CardContainer>
  )
}

export default Card;