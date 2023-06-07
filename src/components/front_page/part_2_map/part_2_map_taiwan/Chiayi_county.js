
import React, { useEffect, useMemo, useState } from 'react'


const Chiayi_county = (props) => {

  
     const [fill, setfill] = useState(props.props_set.original_color);
     const [select, setSelect] = useState(false);
     useMemo(() => {

          if (props.props_set.position === "Chiayi_county") { setSelect(true) } else { setSelect(false) };;

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
          props.props_set.setPosition(x => { return 'Chiayi_county' })

     }

     return (
          <path
               onClick={doClick}
               onMouseEnter={mouse_in_color_change}
               onMouseLeave={mouse_out_color_change}
               fill={fill}
               className="map_county"
          d="M 499.37 218.1 501.1 217.78 506.63 219.95 505.45 223.94 507.83 229.02 513.97 228.67 517.11 229.16 512.35 230.61 508.63 233.07 507.01 236.56 500.7 240.71 497.91 241.74 496.45 243.63 492.55 242.73 492.14 244.86 493.31 248.33 488.89 247.92 485.6 248.87 483.65 246.49 483.07 241.49 484.44 240.24 479.98 236.82 480.6 234.94 476.48 233.55 469.53 234.49 468.25 235.71 465.11 236.52 463.8 238.65 460.81 240.3 459.47 242.73 456.16 243.07 451.42 239.28 452.48 235.79 454.53 235.71 453.57 232.36 453.89 230.35 451.49 225.59 453.59 225.14 459.63 226.43 473.69 216.84 475.2 217.44 481.27 216.2 484.2 219.36 489.9 220.31 492.7 219.45 494.67 220.63 498.36 221.37 499.37 218.1 Z M 477.2 225.35 472.97 228.15 476.58 231.5 478.85 229.78 480.91 230.47 482.03 228.74 479.99 226.35 477.2 225.35 Z"
          fillRule="evenodd" />
     )
}

export default Chiayi_county;