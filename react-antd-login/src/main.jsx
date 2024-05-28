import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import'antd/dist/reset.css'
import { ConfigProvider} from 'antd';
import zhCN from 'antd/locale/zh_CN';
import {HashRouter as Router,Route,Routes} from'react-router-dom'

import LogOut from './pages/logOut.jsx'
import Register from './pages/register.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <ConfigProvider locale={zhCN}> 
      <Routes>
      <Route path='/*' element={ <App />}/>
       <Route path='/admin/*' element={ <App />}/>
       <Route path='/' element={ <LogOut/>}/>
       <Route path='/register' element={ <Register/>}/>
      </Routes> 
    </ConfigProvider >
  </Router>
)
