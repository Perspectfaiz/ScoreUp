import React, { useContext, useEffect,useState } from "react";
import { Hero } from "../components/Hero";
import { Explore } from "../components/explore";
import { Alert } from "../components/Alert";
import { AppContext } from "../Context/AppContext";
import { Instruction } from "../components/Instruction";
import { Navbar } from "../components/navbar";
import { Footer } from '../components/footer';

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
        {
            alert && <Alert hideAlert={hideAlert}></Alert>
        }
        <Navbar></Navbar>
        <Alert></Alert>
        <Hero></Hero>
        <Explore></Explore>
        <Footer></Footer> 
        </>
    )
}
export default Home;