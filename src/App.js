import React from 'react';
import GlobalStyle from './components/styles/GlobalStyles';
import Head from './components/Head';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Gallery from './components/Gallery';
import About from './components/About';
import { 
  GridBodyWrap,
  GridNavWrap
} from './components/styles/AppStyles';

const App = () => {
  return (
    <>
      <GlobalStyle/>
      <GridNavWrap>
        <Nav/>
      </GridNavWrap>
      <GridBodyWrap>
        <Head id='head'/> 
        <About id='about'/>
        <Gallery id='gallery'/>
        <Footer id='footer'/>
      </GridBodyWrap>
    </>
  );
}

export default App;
