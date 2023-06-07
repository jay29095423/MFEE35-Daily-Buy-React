
import React, { useEffect, useMemo, useState } from 'react'


const Keelung = (props) => {

     const [fill, setfill] = useState(props.props_set.original_color);
     const [select, setSelect] = useState(false);
     useMemo(() => {

          if (props.props_set.position === "Keelung") { setSelect(true) } else { setSelect(false) };;

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
          props.props_set.setPosition(x => { return 'Keelung' })

     }

     return (
          <path onClick={doClick} className="map_county" fill={fill} onMouseEnter={mouse_in_color_change} onMouseLeave={mouse_out_color_change}
               d="M 583.3 98.73 582.26 100.61 579.59 100.91 580.08 104.93 577.73 105.26 571.73 102.07 570.47 97.99 575.91 95.65 575.93 95.62 575.96 95.58 579 97.17 580.33 96.6 583.3 98.73 Z" />
     )
}

export default Keelung;