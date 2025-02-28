import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './pages/Login'
import { ToastContainer, toast } from 'react-toastify'; 
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ToastContainer />
     <Login></Login>
    </>
  )
}

export default App
