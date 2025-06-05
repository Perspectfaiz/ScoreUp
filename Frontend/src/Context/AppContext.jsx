import React, { createContext, use, useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-toastify';

export const AppContext = createContext();
export const AppContextProvider=(props)=>{
    const [token, setToken] = useState(localStorage.getItem('token') || false);
    const [itoken,setItoken]=useState(localStorage.getItem('itoken') || false);
    const [studentData,setStudentData]=useState(false);
    const [teacherData,setTeacherData]=useState(false);
    const loadStudentProfileData = async () => {
        try {
            const { data } = await axios.get('http://localhost:8080/api/student/get-profile-data', { headers: { token } });
            
            if (data.success) {
                setStudentData(data.data);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    };
    const loadTeacherProfileData = async () => {
        try {
            const { data } = await axios.get('http://localhost:8080/api/teacher/get-profile-data', { headers: { itoken } });
            
            if (data.success) {
                setTeacherData(data.data);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    };
    useEffect(() => {
        if (token) {
            loadStudentProfileData();
        }else{
            setStudentData(false);
        }
    }, [token]);
    useEffect(() => {
        if (itoken) {
            loadTeacherProfileData();
        }else{
            setTeacherData(false);
        }
    }, [itoken]);
  const value={token,setToken,studentData,loadStudentProfileData,itoken,loadTeacherProfileData,teacherData}
    return(
        <AppContext.Provider value={value}>
        {props.children}
    </AppContext.Provider>
    )
}
