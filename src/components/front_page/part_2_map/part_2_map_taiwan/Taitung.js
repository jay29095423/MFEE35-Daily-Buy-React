
import React, { useEffect, useMemo, useState } from 'react'


const Taitung = (props) => {
 
    
    
     const [fill, setfill] = useState(props.props_set.original_color);
     const [select, setSelect] = useState(false);
     useMemo(() => {

          if (props.props_set.position === "Taitung") { setSelect(true) } else { setSelect(false) };;

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
          props.props_set.setPosition(x => { return 'Taitung' })

     }

     return (
          <path
               onClick={doClick}
               onMouseEnter={mouse_in_color_change}
               onMouseLeave={mouse_out_color_change}
               fill={fill}
               className="map_county"
               d="M 559.92 337.51 564.75 337.55 564.88 340.95 567.61 342.7 565.02 343.84 560.4 340.27 559.92 337.51 Z M 559.25 231.87 557.59 235.64 556.58 241.44 554.3 243.35 551.58 249.62 552.6 256.2 548.21 259.66 546.75 264.39 545.19 267.37 538.91 276.23 535.41 277.66 536.16 281.86 534.28 284.67 530.45 287.86 526.8 289.51 522.17 293.35 521.15 298.06 519.3 299.59 516.08 308.79 512.21 317.96 512.31 324.87 510 326.17 504.64 322.52 504.53 319.24 503.61 317.11 500.67 315.09 501.5 312.46 503.97 311.47 500.99 308.28 501.86 304.94 500.05 301 501.75 294.85 504.6 290.23 507.66 289.6 508.59 288.04 511.31 288.04 512.19 286.43 512.86 281.56 510.15 280.23 509.83 278.18 509.45 275.41 507.01 273.31 506.42 268.95 509.53 265.27 510.2 261.21 511.76 258.03 511.66 255.23 513.81 247.31 515.57 246.73 518.1 243.94 522.65 242.65 524.84 243.18 526.97 247.67 530.55 248.42 531.37 250.13 535.26 249.96 537.02 254.53 539.94 255.61 541.11 257.75 545.15 257.25 545.81 254.24 548.56 246.11 550 244.8 549.87 242.75 552.49 238.83 551.73 235.75 553.26 233.08 555.33 231.19 559.25 231.87 Z"
               fillRule="evenodd" />
     )
}

export default Taitung;