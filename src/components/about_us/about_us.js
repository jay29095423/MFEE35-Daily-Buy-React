import React from 'react';

import './about_us.css';
import About_us_contects from './about_us_content';
import Header from '../header/header';
import Footer from '../footer/footer';

const About_us = () => {
     return (
          <React.Fragment>
               <Header />
               <About_us_contects />
               <Footer />
          </React.Fragment>
     )
}

export default About_us;