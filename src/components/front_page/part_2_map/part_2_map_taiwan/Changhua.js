
import React, { useEffect, useMemo, useState } from 'react'


const Changhua = (props) => {

     const [fill, setfill] = useState(props.props_set.original_color);
     const [select, setSelect] = useState(false);
     useMemo(() => {

          if (props.props_set.position === "Changhua") { setSelect(true) } else { setSelect(false) };;

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
          props.props_set.setPosition(x => { return 'Changhua' })

     }

     return (
          <path onClick={doClick} className="map_county" fill={fill} onMouseEnter={mouse_in_color_change} onMouseLeave={mouse_out_color_change}
               d="M 477.91 171.43 481.65 172.69 483.83 177.71 485.19 178.73 490.1 179.62 491.37 185.33 493.49 185.24 495.28 186.55 492.38 187.01 492.8 190.51 490.61 200.03 494.34 203.8 492.29 204.39 485.28 203.2 482.17 203.29 477.55 201.94 476.07 200.94 466.29 201.71 462.14 200.61 459.42 198.11 462.35 195.52 464.41 191.1 466.2 189.82 468.33 186.55 468.95 182.94 473.23 178.45 474.74 174.38 477.91 171.43 Z" />
     )
}

export default Changhua