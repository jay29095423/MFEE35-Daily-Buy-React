
import React, { useEffect, useMemo, useState } from 'react'


const Nantou = (props) => {


     const [fill, setfill] = useState(props.props_set.original_color);
     const [select, setSelect] = useState(false);
     useMemo(() => {

          if (props.props_set.position === "Nantou") { setSelect(true) } else { setSelect(false) };;

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
          props.props_set.setPosition(x => { return 'Nantou' })

     }

     return (
          <path
               onClick={doClick}
               onMouseEnter={mouse_in_color_change}
               onMouseLeave={mouse_out_color_change}
               fill={fill}
               className="map_county"
               d="M 547.27 170.15 547.79 171.98 542.97 173.74 542.45 177.01 545.15 178.54 545.71 181 542.59 183.4 542.79 184.54 540.78 188.25 542.17 190.32 541.43 196.74 539.19 200.08 538.3 204.45 536.5 205.55 538.33 207.66 539.3 210.42 538.85 214.14 537.11 218.94 533.68 220 531.98 222.63 531.93 224.64 527.64 225.61 525.79 225.33 523.48 228.77 524.5 230.6 521.62 231.83 520.41 229.73 517.11 229.16 513.97 228.67 507.83 229.02 505.45 223.94 506.63 219.95 501.1 217.78 499.37 218.1 498.82 217.23 493.92 218.13 491.41 216.19 492.79 213.27 492.24 209.04 493.51 206.91 492.29 204.39 494.34 203.8 490.61 200.03 492.8 190.51 492.38 187.01 495.28 186.55 500.56 187.76 502.48 186.93 508.29 177.9 514.16 179.24 516.53 177.64 518.49 178.49 520.32 177.71 521.64 175.44 524.54 175.53 528.7 172.21 531.02 172.29 533.55 170.01 534.57 171.03 540.39 168.61 542.16 169.5 545.82 169.41 547.27 170.15 Z" />
     )
}

export default Nantou;