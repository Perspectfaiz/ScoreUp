import styles from './Navbar.module.css'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoIosAdd } from "react-icons/io";

export function Navbar() {
    const [token, setToken] = useState(false);
    const [itoken, setIToken] = useState(false);
    const navigate = useNavigate();

    // Add useEffect to check token on mount and when localStorage changes
    useEffect(() => {
        setToken(!!localStorage.getItem('token'));
        setIToken(!!localStorage.getItem('itoken'));
    }, []);

    // Add function to handle logout
    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('itoken');
        setToken(false);
        setIToken(false);
        navigate('/');
    };

    const isLoggedIn = token || itoken;

    return (
        <>
        <div className={styles.nav}>
            <a href='/' className={styles.brand} onClick={()=>navigate("/")}>
                <img src="/6527325.png" alt="ScoreUp" />
                <div className={styles.txt}>ScoreUp</div>
            </a>
            <div className={styles.field}>
                <a href='/' className={styles.in} >Home</a>
                <a href='/hunt-tests' className={styles.in}   >Hunt Tests</a>
                <a href='/free-resources' className={styles.in} >Free Resources</a>
                <a href='/about' className={styles.in} >About</a>
            </div>
            
            <div className={styles.profile}>
                {itoken && 
                <>
                <button className={styles.addTestBtn} onClick={()=>navigate('/upload-test')}>
                    <IoIosAdd className={styles.pluslogo}/> Create Test
                </button>
                <div className={styles.verline}></div>
                </>
                }
                {!isLoggedIn ? (
                    <div className={styles.box}>
                        <div className={styles.txt} onClick={()=>navigate('/login')}>SignUp/Login</div>
                    </div>
                ) : (
                    <div className={styles.profileContainer}>
                        <img 
                            src="/pic.jpg" 
                            alt="Profile" 
                            onClick={()=>navigate(token ? '/studentprofile' : '/teacherprofile')}
                            className={styles.profileImage}
                        />
                        
                        <div className={styles.logout} onClick={handleLogout}>Logout</div>
                    </div>
                )}
            </div>
        </div>  
        </>
    )
}