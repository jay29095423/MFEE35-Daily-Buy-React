
import React, { useEffect, useMemo, useState } from 'react'


const Taipei = (props) => {

     
     const [fill, setfill] = useState(props.props_set.original_color);
     const [select, setSelect] = useState(false);
     useMemo(() => {

          if (props.props_set.position === "Taipei") { setSelect(true) } else { setSelect(false) };;

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
          props.props_set.setPosition(x => { return 'Taipei' })

     }

     return (
          <path
               onClick={doClick}
               onMouseEnter={mouse_in_color_change}
               onMouseLeave={mouse_out_color_change}
               fill={fill}
               className="map_county"
          d="M 565.11 93.96 566.12 94.62 567.7 98.74 567.03 100.53 569.62 102.63 568.66 105.63 571.31 107.23 567.04 108.83 567.15 112.48 564.34 112.15 562.2 109.11 558.27 106.63 560.1 103.92 558.7 101.81 556.21 101.01 556.86 99.1 559.77 95.87 565.11 93.96 Z" /> 
     )
}

export default Taipei