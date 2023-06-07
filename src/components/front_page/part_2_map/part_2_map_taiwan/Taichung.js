
import React, { useEffect, useMemo, useState } from 'react';


const Taichung = (props) => {

     const [fill, setfill] = useState(props.props_set.original_color);
     const [select, setSelect] = useState(false);
     useMemo(() => {

          if (props.props_set.position === "Taichung") { setSelect(true) } else { setSelect(false) };;

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
          props.props_set.setPosition(x => { return 'Taichung' })

     }
     return (
          <path onClick={doClick} className="map_county" fill={fill} onMouseEnter={mouse_in_color_change} onMouseLeave={mouse_out_color_change}
               d="M 555.8 159.11 553.55 163.53 550.2 165.78 547.27 170.15 545.82 169.41 542.16 169.5 540.39 168.61 534.57 171.03 533.55 170.01 531.02 172.29 528.7 172.21 524.54 175.53 521.64 175.44 520.32 177.71 518.49 178.49 516.53 177.64 514.16 179.24 508.29 177.9 502.48 186.93 500.56 187.76 495.28 186.55 493.49 185.24 491.37 185.33 490.1 179.62 485.19 178.73 483.83 177.71 481.65 172.69 477.91 171.43 479.45 170.09 483.16 162.93 490.84 153.19 496.33 158.83 501.53 161.93 505.21 162.92 507.41 164.91 512.96 164.78 514.36 163.89 513.94 161.37 515.39 160.81 520.8 161.67 523.19 164.39 526.17 162.42 529.98 161.32 531.46 159.5 533.57 159.42 535.31 157.78 538.53 157.62 540.69 153.37 542.09 154.06 542.59 153.97 543.38 153.9 543.42 153.84 545.28 153.1 546.91 157.12 549.66 158.84 554.68 157.68 555.8 159.11 Z" />
     )
}

export default Taichung;