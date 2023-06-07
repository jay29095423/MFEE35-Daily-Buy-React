
import React, { useEffect, useMemo, useState } from 'react'


const Hsinchu_city = (props) => {

    
 
     const [fill, setfill] = useState(props.props_set.original_color);
     const [select, setSelect] = useState(false);
     useMemo(() => {

          if (props.props_set.position === "Hsinchu_city") { setSelect(true) } else { setSelect(false) };;

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
          props.props_set.setPosition(x => { return 'Hsinchu_city' })

     }

     return (
          <path
               onClick={doClick}
               onMouseEnter={mouse_in_color_change}
               onMouseLeave={mouse_out_color_change}
               fill={fill}
               className="map_county"
          d="M 515.38 131.88 514.16 131.55 513.69 131.52 513.62 130.54 512.03 130.31 512.02 130.3 511.99 130.29 511.99 125.67 514.58 120.75 516.93 122.35 521.85 124.47 520.11 126.61 516.22 129.33 515.38 131.88 Z" />
     )
}

export default Hsinchu_city