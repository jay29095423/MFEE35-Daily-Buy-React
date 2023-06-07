
import React, { useEffect, useMemo, useState } from 'react'


const Pingtung = (props) => {


     const [fill, setfill] = useState(props.props_set.original_color);
     const [select, setSelect] = useState(false);
     useMemo(() => {

          if (props.props_set.position === "Pingtung") { setSelect(true) } else { setSelect(false) };;

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
          props.props_set.setPosition(x => { return 'Pingtung' })

     }

     return (
          <path
               onClick={doClick}
               onMouseEnter={mouse_in_color_change}
               onMouseLeave={mouse_out_color_change}
               fill={fill}
               className="map_county"
               d="M 509.83 278.18 510.15 280.23 512.86 281.56 512.19 286.43 511.31 288.04 508.59 288.04 507.66 289.6 504.6 290.23 501.75 294.85 500.05 301 501.86 304.94 500.99 308.28 503.97 311.47 501.5 312.46 500.67 315.09 503.61 317.11 504.53 319.24 504.64 322.52 510 326.17 512.31 324.87 511.65 333.72 512.11 340.26 512.7 341.46 510.71 344.24 508.39 345.23 508.09 348.06 510.03 351.76 508.78 352.26 506.52 349.29 500.75 348.1 500.05 350.43 497.78 349.3 498.02 345.67 495.8 342.28 498.27 336.85 494.77 325.9 491.96 319.67 488 315.24 478.06 309.77 475.39 307.47 475.27 303.58 476.82 300.15 477.06 297.29 476.12 295.82 476.35 292.11 477.84 287.93 477.69 284.56 478.86 279.15 485.55 279.29 489.59 275.82 492.65 274.88 495.13 277.07 497.31 275.23 500.3 275.79 503.11 278.79 506.58 276.4 509.83 278.18 Z" />
     )
}

export default Pingtung;