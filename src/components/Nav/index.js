import React from 'react';
import { 
  Link, 
  animateScroll as scroll 
} from "react-scroll";
import { 
  NavWrap,
  ItemWrap,
  Item,
  LogoWrap,
  Logo,
  SelectionWrap
} from './NavStyles';
import navItems from './../../data/navItems/index';
import logo from '../../data/LogoDesign/logo.jpg';

const Nav = () => {

  return (
    <>
      <NavWrap>
        <LogoWrap>
          <Logo src={logo}/>
        </LogoWrap>
        <SelectionWrap>
          {navItems.map((item, index) => {
            return (
              <ItemWrap key={index}>
                <Link to={item.link}
                smooth={true}
                duration={300}
                spy={true}
                exact='true'
                offset={78}
                >
                  <Item>{item.title}</Item>
                </Link>
              </ItemWrap>
            )
          })}
        </SelectionWrap>
      </NavWrap>
    </>
  )
}

export default Nav;
