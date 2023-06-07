
import React, { useEffect, useMemo, useState } from 'react'


const Newpei = (props) => {

     
     const [fill, setfill] = useState(props.props_set.original_color);
     const [select, setSelect] = useState(false);
     useMemo(() => {

          if (props.props_set.position === "Newpei") { setSelect(true) } else { setSelect(false) };;

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
          props.props_set.setPosition(x => { return 'Newpei' })

     }

     return (
          <path
               onClick={doClick}
               onMouseEnter={mouse_in_color_change}
               onMouseLeave={mouse_out_color_change}
               fill={fill}
               className="map_county"
               d="M 575.96 95.58 575.93 95.62 575.91 95.65 570.47 97.99 571.73 102.07 577.73 105.26 580.08 104.93 579.59 100.91 582.26 100.61 583.3 98.73 590.62 100.03 592.93 100.93 592.05 103.28 594.54 107.74 596.61 107.31 599.22 108.54 596.02 110.72 594.29 110.34 590.63 111.97 586.72 112.49 587.1 115.36 585.52 116.83 582.44 117.22 579.97 120.61 577.75 120.68 572.76 123.72 569.73 124.34 566.75 126.02 566.41 131.28 562.95 132.42 562.44 133.77 557.99 134.91 555.67 132.43 553.56 127.93 555.6 126.14 552.95 122.27 548.42 121.95 547.2 117.8 545.28 115.94 547.25 110.78 549.28 111.21 551.98 109.45 550.64 104.44 544.13 101.82 542.6 100.17 548.09 99.09 550.93 97.83 553.2 95.51 553.21 93.8 555.85 89.61 558.06 88.2 565.63 86 569.19 87.96 571.75 92.7 575.96 95.58 Z M 565.11 93.96 559.77 95.87 556.86 99.1 556.21 101.01 558.7 101.81 560.1 103.92 558.27 106.63 562.2 109.11 564.34 112.15 567.15 112.48 567.04 108.83 571.31 107.23 568.66 105.63 569.62 102.63 567.03 100.53 567.7 98.74 566.12 94.62 565.11 93.96 Z"
               fillRule="evenodd" />
     )
}

export default Newpei