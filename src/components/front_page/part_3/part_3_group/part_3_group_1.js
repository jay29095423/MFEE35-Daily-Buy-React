import React, { useEffect, useState } from 'react';
import './part_3_group.css';
import Part_3_item from './part_3_item';
import axios from 'axios';

const Part_3_group_1 = (props) => {

  const [g1_data, set_g1_data] = useState([]);

  useEffect(() => {

    axios.get('http://localhost:3000/part3/group1').then(result => {

      set_g1_data(result);

    })

  }, [])


  return (
    <div className="group_1 item_group">

      {g1_data.data ? g1_data.data.map((val) => {

        return (<Part_3_item g_data={val} doClick={props.doClick} key={val.product_id} />)

      }) : ''}

    </div>
  )
}

export default Part_3_group_1;