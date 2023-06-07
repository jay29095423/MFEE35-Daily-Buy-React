
import React, { useEffect, useMemo, useState } from 'react'


const Kaohsiung = (props) => {
 
    
     const [fill, setfill] = useState(props.props_set.original_color);
     const [select, setSelect] = useState(false);
     useMemo(() => {

          if (props.props_set.position === "Kaohsiung") { setSelect(true) } else { setSelect(false) };;

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
          props.props_set.setPosition(x => { return 'Kaohsiung' })

     }

     return (
          <path
               onClick={doClick}
               onMouseEnter={mouse_in_color_change}
               onMouseLeave={mouse_out_color_change}
               fill={fill}
               className="map_county"
     d="M 521.62 231.83 522.46 234.37 519.5 236.89 521.24 238.84 524.2 240.4 522.65 242.65 518.1 243.94 515.57 246.73 513.81 247.31 511.66 255.23 511.76 258.03 510.2 261.21 509.53 265.27 506.42 268.95 507.01 273.31 509.45 275.41 509.83 278.18 506.58 276.4 503.11 278.79 500.3 275.79 497.31 275.23 495.13 277.07 492.65 274.88 489.59 275.82 485.55 279.29 478.86 279.15 477.69 284.56 477.84 287.93 476.35 292.11 476.12 295.82 477.06 297.29 476.82 300.15 475.27 303.58 475.39 307.47 473.63 307.07 467.37 302.85 462.82 297.05 461.74 293.23 462.88 291.31 462.24 288.02 458.3 279.97 455.86 272.81 457.21 272.06 462.57 273.58 464.45 273.35 469.86 274.31 471.72 272.3 474.77 272.44 478.24 265.59 481.6 263.66 485.57 260.51 490.43 253.13 491.96 252.19 493.31 248.33 492.14 244.86 492.55 242.73 496.45 243.63 497.91 241.74 500.7 240.71 507.01 236.56 508.63 233.07 512.35 230.61 517.11 229.16 520.41 229.73 521.62 231.83 Z" />
     )
}

export default Kaohsiung;