
import React, { useEffect, useMemo, useState } from 'react'


const Penghu = (props) => {

   
     const [fill, setfill] = useState(props.props_set.original_color);
     const [select, setSelect] = useState(false);
     useMemo(() => {

          if (props.props_set.position === "Penghu") { setSelect(true) } else { setSelect(false) };;

     }, [props.props_set.position]);

     useEffect(() => {

          if (select) {
               setfill(props.props_set.deep_color)
          } else {
               setfill(props.props_set.original_color)
          }

     }, [select])

     const mouse_in_color_change = () => {

          if (!select) {
               setfill(props.props_set.light_color)
          }

     };

     const mouse_out_color_change = () => {
          if (!select) {
               setfill(props.props_set.original_color)
          }
     };

     const doClick = () => {

          props.onClick();
          props.props_set.setPosition(x => { return 'Penghu' })

     }

     return (
          <path
               onClick={doClick}
               onMouseEnter={mouse_in_color_change}
               onMouseLeave={mouse_out_color_change}
               fill={fill}
               className="map_county"
          d="M 409.65 212.95 411.85 214.83 410.82 216.1 411.92 218.79 414.8 218.65 417.19 220.1 416.84 222.1 414.53 222.03 411.9 223.87 410.9 220.78 411.31 217.37 409.14 214.05 409.65 212.95 Z" />
     )
}

export default Penghu;