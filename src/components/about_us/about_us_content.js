import React from 'react';
import { BsFacebook, BsInstagram, BsEnvelope, BsTwitter } from "react-icons/bs";
import Swal from 'sweetalert2'

const About_us_contects = () => {



     const copyEmail = async () => {

          await navigator.clipboard.writeText('dailybuy0531@gmail.com')

          new Swal('', 'Email已複製到剪貼簿', 'success');


     }

     return (
          <div id="about_us_wrap">
               <div className="about_us_story">
                    <h3 className="about_us_story_title">關於我們</h3>

                    <p className="about_us_story_context">
                         如果你是團購商品或代購商品的愛好者，那麼你一定會對我們的品牌感到興趣。我們是一個新興的購物平台，專注於團購和代購商品，為您提供最方便、快速和安全的購物體驗。
                         購買人氣商品時，你可能會遇到很多不便。你需要在各個網站和商店之間跳來跳去，比較價格和產品，浪費時間和精力。而且，當你購買限量商品時，還需要面對排隊與時間的問題，這可能會讓你感到非常困擾。
                         但是，現在有了我們，這些問題都不再是問題了。我們提供了一個簡單、方便的平台，讓你可以在一個地方購買所有你喜歡的商品，並且不用擔心人擠人的問題。我們的媒合服務可以幫助您簡單地購買外地商品，而我們的團購活動可以讓你與更多的人一起享受優惠和折扣。
                         總之，如果你想買人氣商品但又不想面對繁瑣的購物流程，那麼我們就是你需要的平台。我們的團購和代購服務可以讓你享受方便快捷的購物體驗，並且保證你得到最優惠的價格和最好的品質。立即前往我們的平台，開始你的購物之旅吧！
                    </p>


                    <div id="context_img"></div>


                    <canvas id="context_filter"></canvas>

                    <div className="about_us_contects">
                         <div className="about_us_item">
                              <a href="https://www.facebook.com/iiiITeS" target="_blank" className="icon ">
                                   <BsFacebook />
                                   &nbsp;&nbsp;粉絲專頁

                              </a>
                         </div>
                         <div className="about_us_item">
                              <a href="https://www.instagram.com/" target="_blank" className="icon ">
                                   <BsInstagram />
                                   &nbsp;&nbsp;@rising_nine_sun
                              </a>
                         </div>
                         <div className="about_us_item">
                              <button onClick={copyEmail} href="#" target="_blank" className="icon ">
                                   <BsEnvelope />
                                   &nbsp;&nbsp;dailybuy0531@gmail.com
                              </button>
                         </div>
                         <div className="about_us_item">
                              <a href="https://twitter.com/elonmusk?lang=zh-Hant" target="_blank" className="icon ">
                                   <BsTwitter />
                                   &nbsp;&nbsp;@time_to_buy
                              </a>
                         </div>
                    </div>
               </div>
          </div>

     )
}

export default About_us_contects;