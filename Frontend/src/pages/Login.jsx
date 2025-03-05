import styles from "./Login.module.css";
import { useState,useEffect } from "react";
import {toast} from 'react-toastify';
import axios from 'axios';
const Login=()=>{
   const [signUp,setSignUp]=useState(true);
   const [isTeacher,setIsTeacher]=useState(false);
   const [email,setEmail]=useState('')
   const [password,setPassword]=useState('')
   const [name,setName]=useState('')
   const [username,setUserName]=useState('')
   const [token,setToken]=useState('')
   const onSubmitHandler=async (event)=>{
    event.preventDefault();

   try{
    if(signUp){
     if(isTeacher){
     const {data}= await axios.post('http://localhost:8080/api/teacher/sign-up',{name,email,username,password});
     if(data.success){
        localStorage.setItem('token',data.token);
        setToken(data.token);
        toast.success(data.message || "Teacher account created sucessfully");
     }else{
        toast.error(data.message);
     }
     }else{
        const {data}= await axios.post('http://localhost:8080/api/student/sign-up',{name,email,username,password});

        if(data.success){
           localStorage.setItem('token',data.token);
           setToken(data.token);
           toast.success(data.message);
        }else{
           toast.error(data.message);
        }
     }
    }

   }catch(error){
    console.log(error);
  toast.error(error.message);
   }
   }
  const handleSignup= async ()=>{
    setSignUp(!signUp);
  }
  const handleTeacher=()=>{
    setIsTeacher(!isTeacher);
  }
 
    return (
         <form onSubmit={onSubmitHandler}>
            
                 <div  className={styles.mainbody}>
                <div className={styles.heading}>
                    {
                        signUp && <h2>Sign Up</h2>

                        }
                   {
                    !signUp && <h2>Login</h2>
                   }
                </div>

                <div className={styles.signopt}>
                    {
                         signUp && <div>
                            <p className={styles.signtext}>Sign up as:</p>
                            {
                                 isTeacher && <div className={styles.opt}>
                            
                                 <button className={styles.selected}>Teacher</button>
                                 <button onClick={()=>handleTeacher()}>Student</button>
                             </div>
                            }
                            {
                                !isTeacher &&    <div className={styles.opt}>
                            
                                <button onClick={()=>handleTeacher()}>Teacher</button>
                                <button className={styles.selected}>Student</button>
                            </div>
                            }
                      
                         </div>
                    }
                    
                   
                </div>
                {
                    signUp &&  <div className={styles.field}>
                    <div><input onChange={(e)=>setName(e.target.value)} value={name}type="text" placeholder='Full Name' className={styles.selected}/></div>
                    <div><input onChange={(e)=>setEmail(e.target.value)} value={email}type="email" placeholder='Email address'/></div>
                    <div><input onChange={(e)=>setUserName(e.target.value)} value={username} type="text" placeholder='username'/></div>
                    <div><input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" placeholder='Password'/></div>
                </div>
                }
                {
                    !signUp &&  <div className={styles.field}>
                    <div><input onChange={(e)=>setEmail(e.target.value)} value={email} type="text" placeholder='Username or Email address'/></div>
                    <div><input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='Password'/></div>
                </div>
                }
               {
                signUp &&  <div className={styles.signbtn}>
                <button type="submit">Create Account</button>
            </div>
               }
               {
                !signUp &&  <div className={styles.logbtn}>
                <button type="submit">Login</button>
            </div>
               }
               {
                signUp && <div className={styles.login}>
                <p>Have an account? <a a onClick={()=>handleSignup()} href="#">Login</a></p>
            </div>
               }
                {
                !signUp && <div className={styles.login}>
                <p>don't have account? <a onClick={()=>handleSignup()} href="#">Register</a></p>
            </div>
               }
                
            </div>
         </form>
    )
}

export default Login