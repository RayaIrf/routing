import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Fortfolio from './Fortfolio'
import Ourteam from './Ourteam'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<App />}></Route>
        <Route path='/About' element = {<About />}></Route>
        <Route path='/Contact' element = {<Contact />}></Route>
        <Route path='/Fortfolio' element = {<Fortfolio />}></Route>
        <Route path='/Ourteam' element = {<Ourteam />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
