import React, { useEffect } from 'react';
import Front_page from './components/front_page/front_page';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import About_us from './components/about_us/about_us';
import './App.css'
import Instruction from './components/instruction/instruction';
import Member from './components/member/member';
import Login from './components/login/login';
import { useState } from 'react';
import { useCookies } from 'react-cookie';

export const user_info = React.createContext({});

function App() {

  const [cookie, setCookie, removeCookie] = useCookies(['user_data_cookie'])

  const user_login = user_data => {

    setCookie('user_data_cookie', user_data, { path: '/', expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) })

  };


 
  return (
    <Router>
      <user_info.Provider value={{ user_login, cookie }}>
        <Routes>
          <Route element={<Front_page />} path='/' />
          <Route element={<Front_page />} path='/index' />
          <Route element={<About_us />} path='/about_us' />
          <Route element={<Instruction />} path='/instruction' />
          <Route element={<Member />} path='/member' />
          <Route element={<Login />} path='/login' />
        </Routes>
      </user_info.Provider>
    </Router >
  );
}

export default App;
