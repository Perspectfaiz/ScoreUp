
// import { Route, Routes} from 'react-router-dom'

import { useState } from 'react'

import './App.css'
import { Navbar } from './components/navbar'
import { Alert } from './components/Alert'
import { Card } from './components/card'
import { Hero } from './components/Hero'
import { Explore } from './components/explore'
import { Footer } from './components/footer'
import { Studentprofile } from './components/studentprofile'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import { Qnbtn } from './components/Qnbtn'
import { Instruction } from './components/Instruction'
import { Testpage } from './components/Testpage'
import { Tagcard } from './components/Tagcard'
import { Examinterface } from './components/Examinterface'
import  Login  from './pages/Login'
import Home from './pages/Home'
// import {List} from './components/List'
function App() {
 




  return (
    <>
     
       
      
      
      {/* <Hero></Hero> */}
      {/* <Explore></Explore> */}
 
     {/* <Tagcard></Tagcard> */}

      {/* {showInstruct && <Instruction hide={hide}></Instruction>} */}


      {/* <Qnbtn></Qnbtn> */}
       {/* <Navbar></Navbar> */}
       {/* <Examinterface/> */}
      {/* <List></List> */}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login />}/>
        <Route path='/studentprofile' element={<Studentprofile />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/testpage' element={<Testpage/>}/>
        <Route path='/hunt-tests' element={<Examinterface/>}/>
      </Routes>
      
  

      {/* <Testpage></Testpage> */}
      </>
)
}
export default App;


