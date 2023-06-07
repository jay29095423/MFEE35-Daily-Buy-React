
import React, { useEffect, useMemo, useState } from 'react'


const Taoyuan = (props) => {

    

     const [fill, setfill] = useState(props.props_set.original_color);
     const [select, setSelect] = useState(false);
     useMemo(() => {

          if (props.props_set.position === "Taoyuan") { setSelect(true) } else { setSelect(false) };;

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
          props.props_set.setPosition(x => { return 'Taoyuan' })

     }

     return (
          <path
               onClick={doClick}
               onMouseEnter={mouse_in_color_change}
               onMouseLeave={mouse_out_color_change}
               fill={fill}
               className="map_county"
               d="M 542.6 100.17 544.13 101.82 550.64 104.44 551.98 109.45 549.28 111.21 547.25 110.78 545.28 115.94 547.2 117.8 548.42 121.95 552.95 122.27 555.6 126.14 553.56 127.93 555.67 132.43 557.99 134.91 556.38 134.97 553.9 140.22 551.97 141.34 551.68 141.46 549.01 140.59 548.85 138.89 548.87 138.84 549.02 138.35 548.66 138.05 548.47 138.07 548 135.46 546.72 134.17 544.13 133.4 544.13 132.46 544.15 132.25 544.16 132.21 544.02 129.53 544.25 128.4 542.93 127.49 541.66 126.94 541.6 126.74 540.84 125.89 540.67 125.57 538.66 124.74 537.74 124.91 536.83 124.3 536.73 124.46 536.36 124.31 535.81 123.66 534.19 122.61 533.95 122.4 533.92 122.38 532.97 122.12 532.56 121.15 532.88 120.51 532.97 120.28 532.7 119.27 532.68 119.26 532.66 119.24 532.78 119 532.7 118.89 532.06 118.69 531.37 118.61 531.04 118.92 530.8 118.8 530.76 118.8 529.59 118.64 529.37 118.59 529.21 118.49 529.07 118.03 529.05 117.64 527.47 117.62 527.19 117.47 527.18 117.46 526.98 117.32 524.97 116.8 525.16 115.76 523.79 113.77 523.7 113.78 523.6 113.83 523.46 113.64 523.36 113.6 522.59 113.82 522.18 113.98 521.76 113.95 521.51 113.89 520.25 114.04 519.69 114.44 519.49 114.21 522.67 107.78 524.49 105.99 530.21 103.38 540.76 99.72 542.6 100.17 Z" />
     )
}

export default Taoyuan