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
import { Qnbtn } from './components/Qnbtn'
import { Instruction } from './components/Instruction'
import { Testpage } from './components/Testpage'
function App() {
 const [showInstruct, setShowInstuct]=useState(true);
 function hide(){
  setShowInstuct(!showInstruct);
 }

// ///////////////////////////////////////////////////
const [showAlert, setShowAlert]=useState(true);
function hideAlert(){
  setShowAlert(!showAlert);
}

  return (
    <>
      <Navbar></Navbar> 
      {showAlert && <Alert hideAlert={hideAlert}></Alert>}
      
      <Hero></Hero>
      <Explore></Explore>
      <Footer></Footer>
      
            
      
      <Studentprofile hid={hide}></Studentprofile> 
     
      {showInstruct && <Instruction hide={hide}></Instruction>}

      {/* <Qnbtn></Qnbtn> */}

      <Testpage></Testpage>
    </>
  )
}

export default App
