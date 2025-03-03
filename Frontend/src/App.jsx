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
function App() {
 

  return (
    <>
      {/* 
      <Alert></Alert>
      <Hero></Hero>
      <Explore></Explore>
       */}
      <Navbar></Navbar>
      <Studentprofile></Studentprofile>
    </>
  )
}

export default App
