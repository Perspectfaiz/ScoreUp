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
function App() {
 

  return (
    <>
      <Navbar></Navbar>
      <Alert></Alert>
      <Hero></Hero>
      <Explore></Explore>
      <Footer></Footer>
    </>
  )
}

export default App
