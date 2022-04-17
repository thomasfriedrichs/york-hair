import React from 'react';
import {
  Link, 
  animateScroll as scroll 
} from "react-scroll";

import { 
  NavContainer,
  ItemWrap,
  LogoWrap,
  Logo,
  SelectionWrap
} from './NavStyles';
import navItems from './../../data/navItems/index';
import logo from '../../data/LogoDesign/logo.jpg';

const Nav = () => {
  return (
    <NavContainer>
      <LogoWrap>
        <Logo src={logo}/>
      </LogoWrap>
      <SelectionWrap>
        {navItems.map((item, index) => {
          return (
            <ItemWrap key={index}>
              <Link 
                to={item.link}
                smooth={true}
                duration={300}
                spy={true}
                exact='true'
                offset={0}
              >
                {item.title}
              </Link>
            </ItemWrap>
          )
        })}
      </SelectionWrap>
    </NavContainer>
  )
}

export default Nav;