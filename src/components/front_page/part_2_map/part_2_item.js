import { useState } from "react";
import './part_2_item.css'

const Part_2_item = (props) => {
     console.log(props.sql_data.product_id)
     const [item_data] = useState({

          shop_name: props.sql_data.shop_name,
          product: props.sql_data.product,
          nick_name: props.sql_data.nick_name,
          end_date: props.sql_data.end_date,
          product_intro: props.sql_data.product_intro

     });

     return (<a href="#" className="popular_item">
          <div className="item_content" onClick={()=>{props.doClick(props.sql_data.product_id)}}>

               <h3 className="popular_item_title">{item_data.shop_name}-{item_data.product}</h3>

               <h4>團購期限:
                    <span>~{item_data.end_date}</span>

               </h4>
               <h4>開團者:
                    <span>{item_data.nick_name}</span>

               </h4>
               <img className="popular_item_img" src="/media/alexa-soh-p9petNJR41k-unsplash.jpg" alt="" />
               <p className="popular_item_content">
                    {item_data.product_intro}
               </p>
          </div>
          <span href="#" className="more_btn">More</span>
          <div className="popular_item_filter"></div>
     </a>)

};


export default Part_2_item;