import React from 'react'
import Part_3_group_1 from './part_3_group/part_3_group_1'
import Part_3_group_2 from './part_3_group/part_3_group_2'
import './part_3_container.css';

const Part_3_container = (props) => {

     return (
          <div className="part_3_wrap" >
               <Part_3_group_1 doClick={props.doClick} />
               <Part_3_group_2 doClick={props.doClick} />
          </div>
     )
}

export default Part_3_container;