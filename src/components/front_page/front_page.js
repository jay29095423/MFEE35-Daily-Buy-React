import React from 'react'
import Part_1_animation from './part_1_animation/part_1_animation';
import Part_2_container from './part_2_map/part_2_container';
import Part_3_container from './part_3/part_3_container';
import Footer from '../footer/footer.js';

import Header from '../header/header.js';
const Front_page = () => {
     const doClick = (id) => {

          sessionStorage.setItem('product_id', id)

     }
     return (
          <React.Fragment>
               <Header />
               <Part_1_animation />
               <Part_2_container doClick={doClick} />
               <Part_3_container doClick={doClick} />
               <Footer />
          </React.Fragment>
     )
}

export default Front_page