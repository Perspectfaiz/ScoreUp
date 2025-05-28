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
import { Tagcard } from './components/Tagcard'
import { Examinterface } from './components/Examinterface'
import { Teacherprofile } from './components/Teacherprofile'
import { Createtest } from './components/upload test/Createtest'
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

const [text, setText] = useState("");
const [text2, setText2] = useState("");

  return (
    <>
      {/* <Navbar></Navbar> */}
       
      {/* {showAlert && <Alert hideAlert={hideAlert}></Alert>} */}
      
      {/* <Hero></Hero> */}
      {/* <Explore></Explore> */}
      
      
            
      
      
     
      {/* {showInstruct && <Instruction hide={hide}></Instruction>} */}

      {/* <Qnbtn></Qnbtn> */}

     
      {/* <Examinterface></Examinterface> */}
      {/* <Studentprofile hid={hide}></Studentprofile> */}
      <Testpage></Testpage>  
      {/* <Footer></Footer> */}
      {/* <Studentprofile></Studentprofile> */}
      {/* <Teacherprofile></Teacherprofile> */}
      <Createtest></Createtest>
     



    </>
  )
}

export default App


// import React, { useState } from "react";

// const App = () => {
//   const [list, setList] = useState(["Alice", "Bob", "Charlie", "David"]);

//   // Function to add a new element at the end
//   const addElement = () => {
//     const newName = prompt("Enter a new name:");
//     if (newName) {
//       setList([...list, newName]); // Adds newName at the end
//     }
//   };

//   // Function to delete an element at a specific index
//   const deleteElement = (indexToRemove) => {
//     setList(list.filter((_, index) => index !== indexToRemove));
//   };

//   return (
//     <div className="p-4">
//       <button 
//         onClick={addElement} 
//         className="bg-green-500 text-white px-4 py-2 mb-4 rounded-lg"
//       >
//         Add Name
//       </button>

//       <div className="grid grid-cols-2 gap-4">
//         {list.map((name, index) => (
//           <div key={index} className="border p-4 rounded-lg shadow-md flex justify-between">
//             <span>
//               <strong>{index}.</strong> {name} {/* Displaying the index */}
//             </span>
//             <button 
//               onClick={() => deleteElement(index)} 
//               className="bg-red-500 text-white px-2 py-1 rounded-lg"
//             >
//               Delete
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App;

   

