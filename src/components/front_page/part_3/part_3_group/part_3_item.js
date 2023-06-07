import React, { useState } from 'react';
import './part_3_item.css';

const Part_3_item = (props) => {

const [sql_data]=useState({
     shop_name:props.g_data?props.g_data.shop_name:'',
     product:props.g_data?props.g_data.product:'',
     end_date:props.g_data?props.g_data.end_date:'',
     product_id:props.g_data?props.g_data.product_id:'',
     pic_url1:props.g_data?props.g_data.pic_url1:'',
     product_intro:props.g_data?props.g_data.product_intro:'',
});

     return (
          <a href="http://localhost:3000/" className="part_3_item" onClick={()=>{props.doClick(sql_data.product_id)}}>
               <h3 className="part_3_item_title">{sql_data.shop_name}<br/>{sql_data.product}</h3>
               <h4 className="part_3_date">團購期限:<br/> {sql_data.end_date} </h4>
               <img className="p3_item_img" src={sql_data.pic_url1} alt=""/>
                    <p className="part_3_item_content">
                         {sql_data.product_intro}
                    </p>
                    <span className="part_3_more">+More&nbsp;&nbsp;<i className="fa-solid fa-arrow-right-long"></i></span>
          </a>
     )
}

export default Part_3_item;