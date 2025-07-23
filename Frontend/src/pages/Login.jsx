import styles from "./Login.module.css";
import { useState, useEffect } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Navbar } from "../components/Navbar";

const Login = () => {
   const [signUp, setSignUp] = useState(false);
   const [isTeacher, setIsTeacher] = useState(false);
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [name, setName] = useState('');
   const [username, setUserName] = useState('');
   const navigate = useNavigate();

   const onSubmitHandler = async (event) => {
    event.preventDefault();



    try {
        if (signUp) {
            if (isTeacher) {
                const { data } = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/teacher/sign-up`, { name, email, username, password });
                if (data.success) {
                    localStorage.setItem('itoken', data.itoken);
                    toast.success("Teacher account created successfully!");
                    setTimeout(() => {
                        navigate('/');
                    }, 2000);
                } else {
                    toast.error(data.message || "Failed to create teacher account");
                }
            } else {
                const { data } = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/student/sign-up`, { name, email, username, password });
                if (data.success) {
                    localStorage.setItem('token', data.token);
                    toast.success("Student account created successfully!");
                    setTimeout(() => {
                        navigate('/');
                    }, 2000);
                } else {
                    toast.error(data.message || "Failed to create student account");
                }
            }
        } else {
            if (isTeacher) {
                const { data } = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/teacher/login`, { usernameORemail: email, password });
                if (data.success) {
                    localStorage.setItem('itoken', data.itoken);
                    toast.success("Teacher login successful!");
                    setTimeout(() => {
                        navigate('/');
                    }, 2000);
                } else {
                    toast.error(data.message || "Invalid teacher credentials");
                }
            } else {
                const { data } = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/student/login`, { usernameORemail: email, password });
                if (data.success) {
                    localStorage.setItem('token', data.token);
                    toast.success("Student login successful!");
                    setTimeout(() => {
                        navigate('/');
                    }, 2000);
                } else {
                    toast.error(data.message || "Invalid student credentials");
                }
            }
        }
    } catch (error) {
        console.error("Error:", error);
        toast.error(error.response?.data?.message || "An error occurred. Please try again.");
    }
   }

   const handleSignup = () => {
    setSignUp(!signUp);
    // Clear form fields when switching between login and signup
    setEmail('');
    setPassword('');
    setName('');
    setUserName('');
   }

   const handleTeacher = () => {
    setIsTeacher(!isTeacher);
   }

   const location = useLocation();

   useEffect(() => {
      if (location.state?.runFunction) {
         teacherPref();
      }
   }, [location]);

   const teacherPref = () => {
      setIsTeacher(true);
   };

   return (
    <>
    <Navbar></Navbar>
      <div className={styles.fullscreenWrapper}>
      
        <form onSubmit={onSubmitHandler}>
            <div className={styles.mainbody}>
                <div className={styles.heading}>
                    {signUp ? <h2>Sign Up</h2> : <h2>Login</h2>}
                </div>
                
                <div className={styles.signopt}>
                    {/* {signUp && ( */}
                        <div>
                            <p className={styles.signtext}>
                                {signUp ? 'Signup as:' : 'Login as:'}
                            </p>
                            <div className={styles.opt}>
                                <button 
                                    type="button"
                                    className={isTeacher ? styles.selected : ''} 
                                    onClick={() => handleTeacher()}
                                >
                                    Teacher
                                </button>
                                <button 
                                    type="button"
                                    className={!isTeacher ? styles.selected : ''} 
                                    onClick={() => handleTeacher()}
                                >
                                    Student
                                </button>
                            </div>
                        </div>
                    {/* )} */}
                </div>

                {signUp && (
                    <div className={styles.field}>
                        <div>
                            <input 
                                onChange={(e) => setName(e.target.value)} 
                                value={name}
                                type="text" 
                                placeholder='Full Name' 
                                required
                            />
                        </div>
                        <div>
                            <input 
                                onChange={(e) => setEmail(e.target.value)} 
                                value={email}
                                type="email" 
                                placeholder='Email address'
                                required
                            />
                        </div>
                        <div>
                            <input 
                                onChange={(e) => setUserName(e.target.value)} 
                                value={username}
                                type="text" 
                                placeholder='username'
                                required
                            />
                        </div>
                        <div>
                            <input 
                                onChange={(e) => setPassword(e.target.value)} 
                                value={password}
                                type="password" 
                                placeholder='Password'
                                required
                                minLength="8"
                            />
                        </div>
                    </div>
                )}

                {!signUp && (
                    <div className={styles.field}>
                        <div>
                            <input 
                                onChange={(e) => setEmail(e.target.value)} 
                                value={email}
                                type="text" 
                                placeholder='Username or Email address'
                                required
                            />
                        </div>
                        <div>
                            <input 
                                onChange={(e) => setPassword(e.target.value)} 
                                value={password}
                                type="password" 
                                placeholder='Password'
                                required
                            />
                        </div>
                    </div>
                )}

                <div className={styles.signbtn}>
                    <button type="submit">
                        {signUp ? 'Create Account' : 'Login'}
                    </button>
                </div>

                <div className={styles.login}>
                    <p>
                        {signUp ? 'Have an account? ' : "Don't have an account? "}
                        <a onClick={handleSignup} href="#">{signUp ? 'Login' : 'Register'}</a>
                    </p>
                </div>
            </div>
        </form>
        <ToastContainer position="top-right" autoClose={2000} />
      </div>
    </>
   )
}

export default Login;