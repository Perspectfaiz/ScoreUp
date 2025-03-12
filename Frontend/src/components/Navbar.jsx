import styles from './Navbar.module.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Navbar() {
    const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : false);
    const navigate = useNavigate();

    return (
        <>
        <div className={styles.nav}>
            <a href='#' className={styles.brand} onClick={()=>navigate("/")}>
                <img src="/6527325.png" alt="ScoreUp" />
                <div className={styles.txt}>ScoreUp</div>
            </a>
            <div className={styles.field}>
                <a href='/' className={styles.in} >Home</a>
                <a href='/hunt-tests' className={styles.in}   >Hunt Tests</a>
                <a href='#' className={styles.in} >Free Resources</a>
                <a href='#' className={styles.in} >About</a>
            </div>
            <a className={styles.profile} href='#'>
                 {
                    !token &&
                 < div className={styles.box}>
                  <div className={styles.txt} onClick={()=>navigate('/login')}>SignUp/Login</div>
              </div>
                }
                {
                   
                         token && <div onClick={()=>navigate('/studentprofile')}><img src="../public/account.png" alt="X" /></div>
                   
                  
                }
                
               
            </a>
        </div>  
        </>
    )
}