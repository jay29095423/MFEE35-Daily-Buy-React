
import React, { useEffect, useMemo, useState } from 'react'


const Yilan = (props) => {

    
     const [fill, setfill] = useState(props.props_set.original_color);
     const [select, setSelect] = useState(false);
     useMemo(() => {

          if (props.props_set.position === "Yilan") { setSelect(true) } else { setSelect(false) };;

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
          props.props_set.setPosition(x => { return 'Yilan' })

     }

     return (
          <path
               onClick={doClick}
               onMouseEnter={mouse_in_color_change}
               onMouseLeave={mouse_out_color_change}
               fill={fill}
               className="map_county"
          d="M 596.02 110.72 592.85 111.85 589.9 114.47 589.71 115.74 587.04 117.99 585.42 121.1 584.57 124.79 584.67 129.14 585.87 132.22 587.1 138.5 589.68 140.72 588.49 142.56 588.79 145.81 586.31 146.93 586.99 149.7 583.17 153.66 581 162.97 576.32 162.08 569.8 158.65 569.96 161.43 564.25 162.4 561.29 160.8 559.4 161.1 555.8 159.11 554.68 157.68 549.66 158.84 546.91 157.12 545.28 153.1 545.54 152.49 546.22 151.41 548.1 149.64 548.43 149.56 549.96 147.76 550.16 147.76 550.59 147.41 550.95 146.8 551.11 146.63 551.13 146.62 551.69 143.73 551.83 143.56 552.47 142.21 552.47 142.2 552.25 141.9 552.22 141.85 551.97 141.34 553.9 140.22 556.38 134.97 557.99 134.91 562.44 133.77 562.95 132.42 566.41 131.28 566.75 126.02 569.73 124.34 572.76 123.72 577.75 120.68 579.97 120.61 582.44 117.22 585.52 116.83 587.1 115.36 586.72 112.49 590.63 111.97 594.29 110.34 596.02 110.72 Z" />
     )
}

export default Yilan;