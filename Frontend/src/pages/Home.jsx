import { useContext, useEffect,useState } from "react";
import { Hero } from "../components/Hero";
import { Explore } from "../components/explore";
import { Alert } from "../components/Alert";
import { AppContext } from "../Context/AppContext";

import { Navbar } from "../components/Navbar";
import { Footer } from '../components/footer';

import Stack from './hmcomponent/stack'

const images = [
  { id: 1, img: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format" },
  { id: 2, img: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format" },
  { id: 3, img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format" },
  { id: 4, img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format" }
];
  


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
        {/* <Stack
            randomRotation={true}
            sensitivity={180}
            sendToBackOnClick={false}
            cardDimensions={{ width: 100, height: 100 }}
            cardsData={images}
            /> */}
        <Footer></Footer> 
        {/* <Createtest></Createtest>
        <Teacherprofile></Teacherprofile>
        <Studentprofile></Studentprofile>
        <Testpage></Testpage> */}
        
        </>
    )
}
export default Home;