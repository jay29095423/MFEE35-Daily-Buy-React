
import React, { useEffect, useMemo, useState } from 'react'


const Kinmen = (props) => {

   
     const [fill, setfill] = useState(props.props_set.original_color);
     const [select, setSelect] = useState(false);
     useMemo(() => {

          if (props.props_set.position === "Kinmen") { setSelect(true) } else { setSelect(false) };;

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
          props.props_set.setPosition(x => { return 'Kinmen' })

     }

     return (
          <path
               onClick={doClick}
               onMouseEnter={mouse_in_color_change}
               onMouseLeave={mouse_out_color_change}
               fill={fill}
               className="map_county"
          d="M 305.16 151.93 306.53 154.14 302.48 155.18 303.73 152.27 305.16 151.93 Z M 317.87 146 319.28 146.38 322.95 152.17 321.37 154.95 315.88 153.59 313.38 154.54 311.84 157.04 308.94 156.69 309.33 152.73 308.09 150.49 310.58 149.05 314.1 150.74 315.74 147.89 317.87 146 Z"
          fillRule="evenodd" />
     )
}

export default Kinmen;