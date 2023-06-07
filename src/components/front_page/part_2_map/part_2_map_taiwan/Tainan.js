
import React, { useEffect, useMemo, useState } from 'react'


const Tainan = (props) => {

   
     
     const [fill, setfill] = useState(props.props_set.original_color);
     const [select, setSelect] = useState(false);
     useMemo(() => {

          if (props.props_set.position === "Tainan") { setSelect(true) } else { setSelect(false) };;

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
          props.props_set.setPosition(x => { return 'Tainan' })

     }

     return (
          <path
               onClick={doClick}
               onMouseEnter={mouse_in_color_change}
               onMouseLeave={mouse_out_color_change}
               fill={fill}
               className="map_county"
          d="M 493.31 248.33 491.96 252.19 490.43 253.13 485.57 260.51 481.6 263.66 478.24 265.59 474.77 272.44 471.72 272.3 469.86 274.31 464.45 273.35 462.57 273.58 457.21 272.06 455.86 272.81 455.64 269.83 452.73 265.94 449 263.34 446.72 262.52 444.37 260.01 446.26 256.04 448.25 250.21 449.72 242.49 451.42 239.28 456.16 243.07 459.47 242.73 460.81 240.3 463.8 238.65 465.11 236.52 468.25 235.71 469.53 234.49 476.48 233.55 480.6 234.94 479.98 236.82 484.44 240.24 483.07 241.49 483.65 246.49 485.6 248.87 488.89 247.92 493.31 248.33 Z" /> 
     )
}

export default Tainan;