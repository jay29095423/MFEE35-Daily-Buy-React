
import React, { useEffect, useMemo, useState } from 'react'


const Yunlin = (props) => {

  
     const [fill, setfill] = useState(props.props_set.original_color);
     const [select, setSelect] = useState(false);
     useMemo(() => {

          if (props.props_set.position === "Yunlin") { setSelect(true) } else { setSelect(false) };;

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
          props.props_set.setPosition(x => { return 'Yunlin' })

     }

     return (
          <path
               onClick={doClick}
               onMouseEnter={mouse_in_color_change}
               onMouseLeave={mouse_out_color_change}
               fill={fill}
               className="map_county"
          d="M 492.29 204.39 493.51 206.91 492.24 209.04 492.79 213.27 491.41 216.19 493.92 218.13 498.82 217.23 499.37 218.1 498.36 221.37 494.67 220.63 492.7 219.45 489.9 220.31 484.2 219.36 481.27 216.2 475.2 217.44 473.69 216.84 459.63 226.43 453.59 225.14 452.91 217.35 451.88 215.57 455.42 206.51 454.46 204.51 458.43 200.38 459.42 198.11 462.14 200.61 466.29 201.71 476.07 200.94 477.55 201.94 482.17 203.29 485.28 203.2 492.29 204.39 Z" />
     )
}

export default Yunlin;