import { Route, Routes} from 'react-router-dom'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/navbar'
import { Alert } from './components/Alert'
import { Card } from './components/card'
import { Hero } from './components/Hero'
import { Explore } from './components/explore'
import { Footer } from './components/footer'
import { Studentprofile } from './components/studentprofile'
import Login from './pages/Login'
import { ToastContainer, toast } from 'react-toastify'; 
import Home from './pages/Home'

function App() {
  

  return (
    <>
    <ToastContainer />
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/explore" element={<Explore></Explore>}></Route>
      <Route path="/studentprofile" element={<Studentprofile></Studentprofile>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
   
    </Routes>
    <Footer></Footer>
    </>
  )
}

export default App







