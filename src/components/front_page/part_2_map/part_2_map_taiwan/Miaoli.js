
import React, { useEffect, useMemo, useState } from 'react'


const Miaoli = (props) => {


     const [fill, setfill] = useState(props.props_set.original_color);
     const [select, setSelect] = useState(false);
     useMemo(() => {

          if (props.props_set.position === "Miaoli") { setSelect(true) } else { setSelect(false) };;

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
          props.props_set.setPosition(x => { return 'Miaoli' })

     }

     return (
          <path
               onClick={doClick}
               onMouseEnter={mouse_in_color_change}
               onMouseLeave={mouse_out_color_change}
               fill={fill}
               className="map_county"
               d="M 521.21 137.25 521.24 137.26 521.62 137.5 523.77 138.57 524.27 139.21 524.45 139.31 525.36 139.08 525.64 139.36 526.29 139.73 526.3 139.75 526.38 140.03 526.32 140.32 526.85 140.9 526.89 141.52 526.45 142.1 526.14 142.78 526.11 142.88 525.77 143.64 525.39 143.98 525.03 143.77 525.18 144.09 526.17 144.64 526.52 145.86 526.08 148.38 526.05 148.57 527.37 148.6 529.93 147.84 532.11 147.97 533.73 148.24 537.17 147.36 537.73 148.78 537.85 148.9 538.69 149.5 538.79 149.5 539.56 150.79 540.69 153.16 540.69 153.37 538.53 157.62 535.31 157.78 533.57 159.42 531.46 159.5 529.98 161.32 526.17 162.42 523.19 164.39 520.8 161.67 515.39 160.81 513.94 161.37 514.36 163.89 512.96 164.78 507.41 164.91 505.21 162.92 501.53 161.93 496.33 158.83 490.84 153.19 493.71 150.29 495.76 146.85 498.19 140.62 501.33 138.23 503.89 135.45 506.58 135.01 509.17 132.67 510.61 129.87 511.99 130.29 512.02 130.3 512.03 130.31 513.62 130.54 513.69 131.52 514.16 131.55 516.76 132.39 517.39 132.14 518.32 132.67 518.39 132.99 518.02 134.08 518.64 134.93 519.09 135.2 519.31 135.55 519.57 135.76 520.47 136.4 521.07 136.32 521.28 136.42 521.27 136.49 521.26 136.52 521.15 136.66 521.13 136.98 521.21 137.25 Z" />
     )
}

export default Miaoli;