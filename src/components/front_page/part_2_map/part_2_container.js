import Part_2_map from "./part_2_map_taiwan/part_2_map";
import Part_2_itemlist from "./part_2_itemlist";

import './part_2_container.css'
import { useEffect, useMemo, useState } from "react";
import axios from 'axios';

const Part_2_container = (props) => {

     const [position, setPosition] = useState('');
     const [position_name, setPosition_name] = useState('');
     const [sql_data, set_sql_data] = useState([]);

     useMemo(async () => {

          var lati;
          var long;

          //取得地點 Google API
          navigator.geolocation.getCurrentPosition((loc) => {

               lati = loc.coords.latitude;
               long = loc.coords.longitude;


               var cur_loc = axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lati},${long}&key=AIzaSyDIAGhNuPEMNpdiA8JdZQ32EaI6XNy5Dlg`);

               cur_loc.then((data) => {

                    var cur_loc_str = data.data.plus_code.compound_code.substring(11, 14);

                    // console.log(data.data)
                    setPosition_name(x => { return cur_loc_str })

                    switch (cur_loc_str) {                              //設定給map內涵數處裡用的英文
                         case "雲林縣":

                              setPosition(x => { return 'Yunlin' })

                              break;

                         case "基隆市":

                              setPosition(x => { return 'Keelung' })

                              break;
                         case "新北市":
                              setPosition(x => { return 'Newpei' })


                              break;
                         case "台北市":
                              setPosition(x => { return 'Taipei' })

                              break;
                         case "桃園市":
                              setPosition(x => { return 'Taoyuan' })

                              break;
                         case "新竹縣":
                              setPosition(x => { return 'Hsinchu_city' })

                              break;
                         case "新竹市":
                              setPosition(x => { return 'Hsinchu_county' })

                              break;
                         case "苗栗縣":
                              setPosition(x => { return 'Miaoli' })

                              break;
                         case "台中市":
                              setPosition(x => { return 'Taichung' })

                              break;
                         case "南投縣":
                              setPosition(x => { return 'Nantou' })


                              break;
                         case "彰化縣":
                              setPosition(x => { return 'Changhua' })

                              break;
                         case "嘉義縣":
                              setPosition(x => { return 'Chiayi_county' })


                              break;
                         case "嘉義市":
                              setPosition(x => { return 'Chiayi_city' })


                              break;
                         case "台南市":
                              setPosition(x => { return 'Tainan' })

                              break;
                         case "高雄市":
                              setPosition(x => { return 'Kaohsiung' })

                              break;
                         case "屏東縣":
                              setPosition(x => { return 'Pingtung' })


                              break;
                         case "台東縣":
                              setPosition(x => { return 'Taitung' })


                              break;
                         case "花蓮縣":
                              setPosition(x => { return 'Hualien' })


                              break;
                         case "宜蘭縣":
                              setPosition(x => { return 'Yilan' })

                              break;

                         default:
                              setPosition(x => { return 'default' })

                              break;
                    }

               })

          })

     }, []);


     //設定選定地點變更之後從sql撈資料
     useEffect(
          () => {
               if (position_name)
                    axios.get(`http://localhost:3000/part2/${position_name}`)
                         .then(result => {          //取得資料之後設定狀態
                           console.log(result)
                              set_sql_data(x => result);
                         })


          }
          , [position])

     return (

          <div className="map_container">
               <Part_2_itemlist doClick={props.doClick} position_name={position_name} sql_data={sql_data} />
               <Part_2_map position={position} setPosition={setPosition} setPosition_name={setPosition_name} />

          </div>

     )



};

export default Part_2_container;