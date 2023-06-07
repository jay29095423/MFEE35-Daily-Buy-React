import React, { useContext, useEffect, useState } from 'react';
// import { FacebookLoginButton } from 'react-social-login-buttons';
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './login.css'
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';
import { user_info } from '../../App';

function Login() {
     // 密碼的眼睛
     const [showPassword, setShowPassword] = useState(false);

     const clickPWDShown = () => {
          setShowPassword(!showPassword);
     };

     // 帳號密碼
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     const data = {
          email: email,
          password: password
     }

     const navigate = useNavigate();

     const { user, user_login, handlerSetCookie } = useContext(user_info);


     function doLogin() {
          axios.post('http://localhost:3000/ract/login', data)
               .then(response => {
                    user_login(response.data);
                    Swal.fire({
                         icon: 'success',
                         title: '登入成功',
                         text: 'Welcome to DailyBuy~',
                         showConfirmButton: true,
                         didClose: () => {
                              // 關閉彈窗後進行導航到 '/member' 路由
                              navigate('/member');
                             
                         },
                    })
               })
               .catch(error => {
                    console.log(error);
                    alert('登入失敗')
               });
     }


     //google登入------------------------------------------------------------


     const responseMessage = async (response) => {
          // console.log(response);
          // 將編碼後的payload部分進行URL安全編碼解碼
          var base64Url = response.credential.split(".")[1];
          var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
          var payload = decodeURIComponent(
               atob(base64)
                    .split("")
                    .map(function (c) {
                         return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
                    })
                    .join("")
          );

          var user_info = JSON.parse(payload);
          var data_to_server = user_info;
          var google_login_results = await axios.post("http://localhost:3000/react/google_login", data_to_server)

          // console.log(google_login_results);

          if (google_login_results.data) {
               // console.log(google_login_results.data)
               user_login(google_login_results.data);
             
               Swal.fire({
                    icon: 'success',
                    title: '登入成功',
                    text: 'Welcome to DailyBuy~',
                    showConfirmButton: true,
                    didClose: () => {
                         // 關閉彈窗後進行導航到 '/member' 路由

                         navigate('/member');
                         // console.log(user)
                    },
               })


          } else {

               Swal.fire(
                    '登入失敗',
                    '請向相關人員聯絡',
                    'warning'
               );

          }
     };

     //google登入------------------------------------------------------------
     const errorMessage = (error) => {
          console.log(error);
     };
     return (
          <React.StrictMode>
               <div className="log_in_div" style={{ marginTop: "100px" }}>
                    {/* LOGN IN FORM by Omar Dsoky*/}
                    <form className="log_in_form">
                         {/*   con = Container  for items in the form*/}
                         <div className="con">
                              {/*     Start  header Content */}
                              <div className="head-form">
                                   <h2>會員登入</h2>
                              </div>
                              {/*     End  header Content */}
                              <div className="field-set">
                                   {/*   user name*/}
                                   <span className="input-item">
                                        <i className="bi bi-person"></i>
                                   </span>
                                   {/*   user name Input*/}
                                   <input className="form-input"
                                        id="log_in_accoount"
                                        placeholder="請輸入電子信箱"
                                        name="account"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        required />

                                   <br />

                                   {/*   Password*/}

                                   <span className="input-item">
                                        <i className="bi bi-key"></i>
                                   </span>
                                   {/*   Password Input*/}
                                   <input className="form-input"
                                        type={showPassword ? "text" : "password"}
                                        placeholder="請輸入密碼" id="log_in_pwd"
                                        name="password"
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                        required />

                                   {/*      Show/hide password */}
                                   {showPassword ? <AiOutlineEye id='eye' onClick={clickPWDShown} /> : <AiOutlineEyeInvisible id='eye2' onClick={clickPWDShown} />}


                                   <br />
                                   {/*      button LogIn*/}
                                   <button className="btn_login" type="button" onClick={doLogin}> 登入 </button>
                                   <a className="a_text" href="./resetPWD">忘記密碼...</a>

                              </div>

                              {/*   其他方式登入 other buttons*/}
                              <div className="other">
                                   <hr />
                                   {/*      Facebook log_in button*/}
                                   <button type="button" id="facebook_login">
                                        {/* <FacebookLoginButton
                                    id="facebook_i"
                                    scope="public_profile,email"
                                    onlogin="checkLoginState();"
                                ></FacebookLoginButton> */}
                                   </button>
                                   <button className="btn facebook" type="button">
                                        <span>
                                             <i className="bi bi-facebook"></i>
                                        </span>
                                        Facebook登入
                                   </button>
                                   {/*     Google oog_in button */}
                                   {/* // 2023/05/05 google登入----------------- */}
                                   <div className="google_btn_r">
                                        <GoogleLogin className='g_id_onload' onSuccess={responseMessage} onError={errorMessage} />
                                   </div>
                                   <button className="btn google" type="button">
                                        <span><i className="bi bi-google"></i></span>
                                        Google登入</button>


                                   {/* //     End Other the Division */}
                              </div>
                              {/* 我還沒註冊超連結*/}
                              <br />
                              <div className="a_text">
                                   <a className="a_text" href="/register">我還沒註冊...</a>
                              </div>
                         </div>
                    </form >
               </div>
          </React.StrictMode>
     );
}

export default Login;