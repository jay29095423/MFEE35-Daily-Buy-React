import { useEffect, useRef } from 'react';
import { BsFillHouseDoorFill } from "react-icons/bs";
import './part_2_map.css';
import Keelung from './keelung';
import Newpei from './Newpei';
import Taipei from './Taipei';
import Taichung from './Taichung';
import Pingtung from './Pingtung';
import Taoyuan from './Taoyuan';
import Hsinchu_city from './Hsinchu_city';
import Hsinchu_county from './Hsinchu_county';
import Miaoli from './Miaoli';
import Changhua from './Changhua';
import Nantou from './Nantou';
import Yunlin from './Yunlin';
import Chiayi_city from './Chiayi_city';
import Chiayi_county from './Chiayi_county';
import Tainan from './Tainan';
import Kaohsiung from './Kaohsiung';
import Taitung from './Taitung';
import Hualien from './Hualien';
import Yilan from './Yilan';
import Kinmen from './Kinmen';
import Penghu from './Penghu';

const Part_2_map = (props) => {

     const svg = useRef();
     let moving;
     //  滑鼠點下，開始拖拉
     function mouseDown(e) {
          moving = true;
     }
     //  拖拉的移動過程
     function drag(e) {
          if (moving === true) {



               // 1. 取得一開始的 viewBox 值，原本是字串，拆成陣列，方便之後運算
               let startViewBox = svg.current.getAttribute('viewBox').split(' ').map(n => parseFloat(n))

               // //  2. 取得滑鼠當前 viewport 中 client 座標值
               let startClient = {
                    x: e.clientX,
                    y: e.clientY
               }

               // //  3. 計算對應回去的 SVG 座標值
               let newSVGPoint = svg.current.createSVGPoint();

               // console.log(newSVGPoint)
               let CTM = svg.current.getScreenCTM();
               newSVGPoint.x = startClient.x
               newSVGPoint.y = startClient.y
               let startSVGPoint = newSVGPoint.matrixTransform(CTM.inverse())

               // //  4. 計算拖曳後滑鼠所在的 viewport client 座標值
               let moveToClient = {
                    x: e.clientX + e.movementX, //  movement 可以取得滑鼠位移量
                    y: e.clientY + e.movementY
               }

               // //  5. 計算對應回去的 SVG 座標值
               newSVGPoint = svg.current.createSVGPoint()
               CTM = svg.current.getScreenCTM()
               newSVGPoint.x = moveToClient.x
               newSVGPoint.y = moveToClient.y
               let moveToSVGPoint = newSVGPoint.matrixTransform(CTM.inverse())

               // //  6. 計算位移量
               let delta = {
                    dx: startSVGPoint.x - moveToSVGPoint.x,
                    dy: startSVGPoint.y - moveToSVGPoint.y
               }

               // //  7. 設定新的 viewBox 值
               let moveToViewBox = `${startViewBox[0] + delta.dx} ${startViewBox[1] + delta.dy} ${startViewBox[2]} ${startViewBox[3]}`
               svg.current.setAttribute('viewBox', moveToViewBox)
               // console.log(moveToViewBox)
          }
     }
     //  滑鼠點擊結束（拖曳結束）
     function mouseUp() {

          moving = false

     }; //  結束：滑鼠拖拉的效果

     //  拖曳的事件

     //設定點擊事件

     const viewPoint = {

          "default": '400 86 270 270',
          "Keelung": "568 93 15 15",
          "Newpei": "540 86 48 48",
          "Taipei": "555 93 20 20",
          "Taoyuan": "520 100 40 40",
          "Hsinchu_city": "505 116 20 20",
          "Hsinchu_county": "515 114 40 40",
          "Miaoli": "490 128 50 50",
          "Taichung": "470 130 100 90",
          "Changhua": "453 170 43 43",
          'Nantou': "480 170 70 70",
          'Yunlin': "442 180 70 70",
          'Chiayi_city': "472 222 11 11",
          'Chiayi_county': "453 199 55 55",
          'Tainan': "445 229 48 48",
          'Kaohsiung': "455 235 70 70",
          'Pingtung': "463 288 53 53",
          'Taitung': "488 245 80 80",
          'Hualien': "499 165 90 90",
          'Yilan': "546 115 50 50"
     };

     const map_selected = (county_name) => {

          let cor;

          switch (county_name) {

               case "Yunlin":

                    cor = "442 180 70 70";
                    props.setPosition_name(x => { return '雲林縣' });
                    break;

               case "Keelung":

                    cor = "568 93 15 15";
                    props.setPosition_name(x => { return '基隆市' });


                    break;
               case "Newpei":

                    cor = "540 86 48 48";
                    props.setPosition_name(x => { return '新北市' });


                    break;
               case "Taipei":

                    cor = "555 93 20 20";
                    props.setPosition_name(x => { return '台北市' });


                    break;
               case "Taoyuan":

                    cor = "520 100 40 40";
                    props.setPosition_name(x => { return '桃園市' });


                    break;
               case "Hsinchu_city":

                    cor = "505 116 20 20";
                    props.setPosition_name(x => { return '新竹市' });

                    break;
               case "Hsinchu_county":

                    cor = "515 114 40 40";
                    props.setPosition_name(x => { return '新竹縣' });

                    break;
               case "Miaoli":
                    cor = "490 128 50 50";
                    props.setPosition_name(x => { return '苗栗縣' });

                    break;
               case "Taichung":

                    cor = "470 130 100 90";
                    props.setPosition_name(x => { return '台中市' });
                    break;
               case "Nantou":

                    cor = "480 170 70 70";
                    props.setPosition_name(x => { return '南投縣' });

                    break;
               case "Changhua":

                    cor = "453 170 43 43";
                    props.setPosition_name(x => { return '彰化縣' });


                    break;
               case "Chiayi_county":

                    cor = "453 199 55 55";
                    props.setPosition_name(x => { return '嘉義縣' });


                    break;
               case "Chiayi_city":

                    cor = "472 222 11 11";
                    props.setPosition_name(x => { return '嘉義市' });

                    break;
               case "Tainan":

                    cor = "445 229 48 48";
                    props.setPosition_name(x => { return '台南市' });

                    break;
               case "Kaohsiung":

                    cor = "455 235 70 70";
                    props.setPosition_name(x => { return '高雄市' });

                    break;
               case "Pingtung":

                    cor = "463 288 53 53";
                    props.setPosition_name(x => { return '屏東縣' });
                    break;
               case "Taitung":

                    cor = "488 245 80 80";
                    props.setPosition_name(x => { return '台東縣' });

                    break;
               case "Hualien":

                    cor = "499 165 90 90";
                    props.setPosition_name(x => { return '花蓮縣' });

                    break;
               case "Yilan":


                    cor = "546 115 50 50";
                    props.setPosition_name(x => { return '宜蘭縣' });

                    break;

               default:

                    cor = "400 86 270 270";
                    props.setPosition_name(x => { return '請選擇地區' });

                    break;
          }

          svg.current.setAttribute('viewBox', cor);

     };

     useEffect(() => {

          map_selected(props.position)
          // console.log(props.position)
     }, [props.position]);

     const props_set = {                        //傳給子元件的資料設定

          deep_color: "rgb(17, 50, 133)",       // 選擇到的地區(深色)

          light_color: "rgb(58, 143, 183)",     // hover後的地區(淺色)

          original_color: 'rgb(242, 193, 102)', // 預設的顏色(橘)

          position: props.position,             //目前的位置

          setPosition: props.setPosition,       //設定目前的位置

     }

     return (<div id="taiwan_map" onMouseDown={mouseDown} onMouseUp={mouseUp} onMouseMove={drag}>

          <svg stroke="rgba(255,255,255,1)" strokeWidth="0.6px" strokeLinejoin="round" viewBox="370 86 280 280 "
               width="100%" height="100%" id="svg" ref={svg} dur=".2s" >

               <g id="COUNTY_MOI_1090820">

                    <Keelung props_set={props_set} onClick={() => { map_selected("Keelung") }} />
                    <Newpei props_set={props_set} onClick={() => { map_selected("Newpei") }} />
                    <Taipei props_set={props_set} onClick={() => { map_selected("Taipei") }} />
                    <Taoyuan props_set={props_set} onClick={() => { map_selected("Taoyuan") }} />
                    <Hsinchu_city props_set={props_set} onClick={() => { map_selected("Hsinchu_city") }} />
                    <Hsinchu_county props_set={props_set} onClick={() => { map_selected("Hsinchu_county") }} />
                    <Miaoli props_set={props_set} onClick={() => { map_selected("Miaoli") }} />
                    <Taichung props_set={props_set} onClick={() => { map_selected("Taichung") }} />
                    <Changhua props_set={props_set} onClick={() => { map_selected("Changhua") }} />
                    <Nantou props_set={props_set} onClick={() => { map_selected("Nantou") }} />
                    <Yunlin props_set={props_set} onClick={() => { map_selected("Yunlin") }} />
                    <Chiayi_city props_set={props_set} onClick={() => { map_selected("Chiayi_city") }} />
                    <Chiayi_county props_set={props_set} onClick={() => { map_selected("Chiayi_county") }} />
                    <Tainan props_set={props_set} onClick={() => { map_selected("Tainan") }} />
                    <Kaohsiung props_set={props_set} onClick={() => { map_selected("Kaohsiung") }} />
                    <Pingtung props_set={props_set} onClick={() => { map_selected("Pingtung") }} />
                    <Taitung props_set={props_set} onClick={() => { map_selected("Taitung") }} />
                    <Hualien props_set={props_set} onClick={() => { map_selected("Hualien") }} />
                    <Yilan props_set={props_set} onClick={() => { map_selected("Yilan") }} />
                    <Kinmen props_set={props_set} onClick={() => { map_selected("Kinmen") }} />
                    <Penghu props_set={props_set} onClick={() => { map_selected("Penghu") }} />
               </g>
          </svg>

          <div className="home_icon" id="home_icon" onClick={() => { map_selected(viewPoint.default) }}>

               <BsFillHouseDoorFill />

          </div>

     </div>)


}

export default Part_2_map;