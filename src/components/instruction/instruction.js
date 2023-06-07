import React from 'react'
import Header from '../header/header';
import Footer from '../footer/footer';
import './instruction.css'


const Instruction = () => {
     return (
          <React.Fragment>
               <Header />
               <div id="instruction">
                    <div className="buy_instruction">
                         <div className="item_wrap">
                              <h2>跟團教學</h2>

                              <div className="items">
                                   <div className="item">
                                        <h3>Step.1</h3>

                                        <h2>選擇商品</h2>

                                        <p>
                                             首先，先選中您心儀的<a href="#" target="_blank">商品</a
                                             >，若現有的團中沒有您想要的商品，可以到<a href="#">許願功能</a
                                             >中新增，您會在第一時間收到開團通知信
                                        </p>

                                        <img
                                             src="/media/timothy-muza-6VjPmyMj5KM-unsplash.jpg"
                                             alt=""
                                        />
                                   </div>
                                   <div className="item">
                                        <h3>Step.2</h3>

                                        <h2>填寫表單</h2>

                                        <p>
                                             選好商品之後，將您的資料填寫在<a href="#" target="_blank"
                                             >表單</a
                                             >內，並按下送出;請務必在填寫時再度確認交貨方式及時間是否能夠配合
                                        </p>

                                        <img
                                             src="/media/unseen-studio-s9CC2SKySJM-unsplash.jpg"
                                             alt=""
                                        />
                                   </div>
                                   <div className="item">
                                        <h3>Step.3</h3>

                                        <h2>付款</h2>

                                        <p>
                                             在付款頁面中填妥您的資訊，並點選確定結帳，系統就會收到您的訂單資料了
                                        </p>

                                        <img src="/media/pay.jpg" alt="" />
                                   </div>
                                   <div className="item">
                                        <h3>Step.3</h3>

                                        <h2>等待出貨</h2>

                                        <p>
                                             等到團主結單之後，會通知各位商品以購買完成，請留意您註冊時的電子信箱，您也可以隨時在<a
                                                  href="#"
                                                  target="_blank"
                                             >我跟的團</a
                                             >頁面中查詢訂單狀況
                                        </p>

                                        <img
                                             src="/media/kira-auf-der-heide-IPx7J1n_xUc-unsplash.jpg"
                                             alt=""
                                        />
                                   </div>
                              </div>
                         </div>
                    </div>

                    <div className="open_instruction">
                         <div className="item_wrap">
                              <h2>開團教學</h2>
                              <div className="items">
                                   <div className="item">
                                        <h3>Step.1</h3>

                                        <h2>建立開團表單</h2>

                                        <p>
                                             首先，先到<a href="#" target="_blank">開團表單</a
                                             >中填妥商品資料，請務必評估您可以攜帶的量及商品的有效期限是否正確，更多詳細資訊請參考<a
                                                  href="#"
                                                  target="_blank"
                                             >免責聲明</a
                                             >
                                        </p>

                                        <img
                                             src="/media/myriam-jessier-eveI7MOcSmw-unsplash.jpg"
                                             alt=""
                                        />
                                   </div>
                                   <div className="item">
                                        <h3>Step.2</h3>

                                        <h2>購買商品</h2>

                                        <p>
                                             請在結單日之後，預計出貨日之前前往店家購買指定數量的商品，若數量不足請在出貨前通知買家
                                        </p>

                                        <img src="/media/freestocks-VFrcRtEQKL8-unsplash.jpg" alt="" />
                                   </div>
                                   <div className="item">
                                        <h3>Step.3</h3>

                                        <h2>出貨商品</h2>

                                        <p>
                                             請根據您開團時填好的方式出貨給買家，請注意本平台並不負責運送及運費相關事宜，在您寄送時請注意包裝完整及是否冷凍寄送等問題
                                        </p>

                                        <img src="/media/rosebox-BFdSCxmqvYc-unsplash.jpg" alt="" />
                                   </div>
                                   <div className="item">
                                        <h3>Step.4</h3>

                                        <h2>確認出貨</h2>

                                        <p>
                                             出貨完成後，請到<a href="#" target="_blank">跟團資訊</a
                                             >頁面中修改出貨狀態，待系統確認買家收到貨之後，會立即撥款給您
                                        </p>

                                        <img src="/media/s.jpg" alt="" />
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>

               <div className="qawrap">
                    <ul id="QandA">
                         <title>常見問題</title>
                         <div className="question_wrap">
                              <li className="question">
                                   Q : 我跟團了，但是結單之後沒有收到商品，付的款項怎麼辦?
                              </li>
                              <li className="anwser">
                                   A :
                                   若因缺貨貨團主跑單導致您沒有收到商品，您所付的款項將會退還至您的帳戶。
                              </li>
                         </div>
                         <div className="question_wrap">
                              <li className="question">Q : 我收到的商品過期了，能退貨嗎</li>
                              <li className="anwser">
                                   A : 針對商品瑕疵的部分屬於您跟團主之間的糾紛，本平台不介入，請參考<a
                                        href="#"
                                        target="_blank"
                                   >免責聲明</a
                                   >
                              </li>
                         </div>
                         <div className="question_wrap">
                              <li className="question">
                                   Q : 我要開團，但是店家表示缺貨，我還能完成這單嗎
                              </li>
                              <li className="anwser">
                                   A :
                                   在購買商品時請盡量滿足單上的數量，若因卻貨或其他店家因素導致購買數量不足，請在出貨日前告知跟團者
                              </li>
                         </div>
                         <div className="question_wrap">
                              <li className="question">Q : 待新增</li>
                              <li className="anwser">A : 待新增</li>
                         </div>
                    </ul>
               </div>
               <Footer />
          </React.Fragment>
     )
}

export default Instruction;