

import './App.css'
import { Studentprofile } from './components/Studentprofile.jsx'
import { Routes, Route } from 'react-router-dom'
import { Instruction } from './components/Instruction'
import { Testpage } from './components/Testpage'
import { Examinterface } from './components/Examinterface'
import Login from './pages/Login'
import Home from './pages/Home'
import { About } from './components/About'
import { FreeReso } from './components/resources/resources'
import { Createtest } from './components/upload test/Createtest'
import { Teacherprofile } from './components/Teacherprofile.jsx'
import { Testreview } from './components/testReview.jsx'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/studentprofile' element={<Studentprofile />} />
      <Route path='/teacherprofile' element={<Teacherprofile/>} />
      <Route path='/testpage' element={<Testpage />} />
      <Route path='/hunt-tests' element={<Examinterface />} />
      <Route path='/instruction' element={<Instruction />} />
      <Route path='/about' element={<About />} />
      <Route path='/free-resources' element={<FreeReso />} />
      <Route path='/upload-test' element={<Createtest/>} />
      <Route path='/student-review' element={<Testreview/>}/>
      {/* <Route path='/upload-test/qnform' element={<Qnform />} /> */}
    </Routes>

  )
}

export default App;


