
import React, { useEffect, useMemo, useState } from 'react'


const Hualien = (props) => {

 
     const [fill, setfill] = useState(props.props_set.original_color);
     const [select, setSelect] = useState(false);
     useMemo(() => {

          if (props.props_set.position === "Hualien") { setSelect(true) } else { setSelect(false) };;

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
          props.props_set.setPosition(x => { return 'Hualien' })

     }

     return (
          <path
               onClick={doClick}
               onMouseEnter={mouse_in_color_change}
               onMouseLeave={mouse_out_color_change}
               fill={fill}
               className="map_county"
          d="M 581 162.97 578.65 167.2 575.68 169.99 573.02 171.54 571.95 174.19 572.37 177.12 568.87 180.63 568.67 182.84 571.13 186.95 568.31 192.86 567.24 198.83 565.54 202.44 565.22 206.69 563.41 210.2 563.73 211.25 562 216.87 561.9 219.25 559.83 225.41 560.64 227.78 559.25 231.87 555.33 231.19 553.26 233.08 551.73 235.75 552.49 238.83 549.87 242.75 550 244.8 548.56 246.11 545.81 254.24 545.15 257.25 541.11 257.75 539.94 255.61 537.02 254.53 535.26 249.96 531.37 250.13 530.55 248.42 526.97 247.67 524.84 243.18 522.65 242.65 524.2 240.4 521.24 238.84 519.5 236.89 522.46 234.37 521.62 231.83 524.5 230.6 523.48 228.77 525.79 225.33 527.64 225.61 531.93 224.64 531.98 222.63 533.68 220 537.11 218.94 538.85 214.14 539.3 210.42 538.33 207.66 536.5 205.55 538.3 204.45 539.19 200.08 541.43 196.74 542.17 190.32 540.78 188.25 542.79 184.54 542.59 183.4 545.71 181 545.15 178.54 542.45 177.01 542.97 173.74 547.79 171.98 547.27 170.15 550.2 165.78 553.55 163.53 555.8 159.11 559.4 161.1 561.29 160.8 564.25 162.4 569.96 161.43 569.8 158.65 576.32 162.08 581 162.97 Z" />
     )
}

export default Hualien;