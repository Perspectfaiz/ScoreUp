import React, { useContext, useEffect,useState } from "react";
import { Hero } from "../components/Hero";
import { Explore } from "../components/explore";
import { Alert } from "../components/Alert";
import { AppContext } from "../Context/AppContext";
import { Instruction } from "../components/Instruction";
import { Navbar } from "../components/Navbar";
import { Footer } from '../components/footer';
import { FreeReso } from "../components/resources/resources";
import { About } from "../components/About";
import { Createtest } from "../components/upload test/Createtest";
import { Teacherprofile } from "../components/Teacherprofile";
import { Studentprofile } from "../components/Studentprofile";
import { Testpage } from "../components/Testpage";
const Home=()=>{
   const {token,itoken}=useContext(AppContext);
    const [alert,setAlert]=useState(true);
  const hideAlert=()=>{
        setAlert(false);
  }
  useEffect(()=>{
    if(token || itoken){
        setAlert(false);
    }else{
        setAlert(true);
    }
  },[token,itoken])

  
    return (
        <>
        <Navbar></Navbar>
        {
            alert && <Alert hideAlert={hideAlert}></Alert>
        }
        
        
        <Hero></Hero>
        <Explore></Explore>
        <Footer></Footer> 
        {/* <Createtest></Createtest>
        <Teacherprofile></Teacherprofile>
        <Studentprofile></Studentprofile>
        <Testpage></Testpage> */}
        
        </>
    )
}
export default Home;