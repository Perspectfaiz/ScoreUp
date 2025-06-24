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
    const [testHistory, setTestHistory] = useState([]);
    const [favoriteTests, setFavoriteTests] = useState([]);
    const [performanceData, setPerformanceData] = useState([]);
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
    const loadTestHistory = async () => {
        try {
            const { data } = await axios.post('http://localhost:8080/api/student/test-history', {}, { headers: { token } });
            if (data.success) {
                setTestHistory(data.testHistory);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    };
    const loadFavoriteTests = async () => {
        try {
            const { data } = await axios.post('http://localhost:8080/api/student/favorite-tests', {}, { headers: { token } });
            if (data.success) {
                setFavoriteTests(data.favoriteTests);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    };
    const loadPerformanceData = async () => {
        try {
            const { data } = await axios.post('http://localhost:8080/api/student/performance-data', {}, { headers: { token } });
            if (data.success) {
                setPerformanceData(data.performanceData);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    };
    const updateStudentProfile = async (formData) => {
        try {
            const { data } = await axios.post('http://localhost:8080/api/student/update-profile-data', formData, {
                headers: { 
                    token,
                    'Content-Type': 'multipart/form-data'
                },
            });
            console.log('Backend response:', data);
            if (data.success) {
                setStudentData(data.data);
                toast.success('Profile updated successfully!');
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.log('Update profile error:', error);
            toast.error(error.message);
        }
    };
    useEffect(() => {
        if (token) {
            loadStudentProfileData();
            loadTestHistory();
            loadFavoriteTests();
            loadPerformanceData();
        } else {
            setStudentData(false);
            setTestHistory([]);
            setFavoriteTests([]);
            setPerformanceData([]);
        }
    }, [token]);
    useEffect(() => {
        if (itoken) {
            loadTeacherProfileData();
        }else{
            setTeacherData(false);
        }
    }, [itoken]);
  const value={token,setToken,studentData,loadStudentProfileData,itoken,loadTeacherProfileData,teacherData,testHistory,loadTestHistory,favoriteTests,loadFavoriteTests,performanceData,loadPerformanceData,updateStudentProfile}
    return(
        <AppContext.Provider value={value}>
        {props.children}
    </AppContext.Provider>
    )
}
