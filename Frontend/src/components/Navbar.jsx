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
                <img src="../public/6527325.png" alt="ScoreUp" />
                <div className={styles.txt}>ScoreUp</div>
            </a>
            <div className={styles.field}>
                <a href='#' className={styles.in} onClick={()=>navigate("/")}>Home</a>
                <a href='#' className={styles.in}  onClick={()=>navigate("/hunt-tests")} >Hunt Tests</a>
                <a href='#' className={styles.in} onClick={()=>navigate("/")}>Free Resources</a>
                <a href='#' className={styles.in} onClick={()=>navigate("/")}>About</a>
            </div>
            <a className={styles.profile} href='#'>
                 {
                    !token &&
                 < div className={styles.box}>
                  <div className={styles.txt} onClick={()=>navigate('/login')}>SignUp/Login</div>
              </div>
                }
                {
                   token && <img src="../public/account.png" alt="X" />
                }
                
               
            </a>
        </div>  
        </>
    )
}