import React from 'react';
import { 
  FooterWrap,
  IgIcon,
  A
} from './FooterStyles';

const Footer = ({ id }) => {
  return (
    <FooterWrap id={id}>
      <A 
        href='https://www.instagram.com/rolandyorkhair/?hl=en'
        target='_blank'
      >
        <IgIcon/>
      </A>
    </FooterWrap>
  )
}

export default Footer;