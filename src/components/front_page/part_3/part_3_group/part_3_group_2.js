import React, { useEffect, useState } from 'react';
import './part_3_group.css';
import Part_3_item from './part_3_item';
import axios from 'axios';

const Part_3_group_2 = (props) => {

  const [g2_data, set_g2_data] = useState([]);

  useEffect(() => {

    axios.get('http://localhost:3000/part3/group2').then(result => {

      set_g2_data(result);

    })
  }, []);

  

  return (
    <div className="group_2 item_group">

      {g2_data.data ? g2_data.data.map((val) => {

        return (<Part_3_item doClick={props.doClick} g_data={val} key={val.product_id} />)

      }) : ''}

    </div>
  )
}

export default Part_3_group_2;