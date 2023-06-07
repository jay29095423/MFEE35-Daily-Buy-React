
import './part_2_itemlist.css'

import Part_2_item from './part_2_item';

const Part_2_itemlist = (props) => {

     // console.log(props.sql_data.data)

     return (

          <div className="popular_item_warp_container">

               <div className="popular_item_warp">
                    <h3 id="location">團購地區 :{props.position_name} </h3>
                    {/* <Part_2_item sql_data={props.sql_data} /> */}
                    {props.sql_data.data ? props.sql_data.data.map((val, ind) => {

                         return (<Part_2_item doClick={props.doClick} key={val.product_id} sql_data={val} />)

                    }) : ''}

               </div>

          </div>

     )


};

export default Part_2_itemlist;