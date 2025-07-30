import styles from './Navbar.module.css'
import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoIosAdd } from "react-icons/io";
import { AppContext } from '../Context/AppContext';
import { FiMenu, FiX } from 'react-icons/fi';

export function Navbar() {
    const { teacherData, studentData } = useContext(AppContext);
    const [token, setToken] = useState(false);
    const [itoken, setIToken] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [imgLink, setImgLink] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (token && studentData?.image) {
            setImgLink(studentData.image);
        } else if (itoken && teacherData?.image) {
            setImgLink(teacherData.image);
        }
    }, [token, itoken, studentData, teacherData]);

    useEffect(() => {
        setToken(!!localStorage.getItem('token'));
        setIToken(!!localStorage.getItem('itoken'));
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('itoken');
        setToken(false);
        setIToken(false);
        navigate('/');
    };

    const isLoggedIn = token || itoken;

    return (
        <div className={styles.nav}>
            <a href='/' className={styles.brand} onClick={() => navigate("/")}>
                <img src="/6527325.png" alt="ScoreUp" />
                <div className={styles.txt}>ScoreUp</div>
            </a>

            <div className={styles.mobileToggle} onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </div>

            <div className={`${styles.field} ${menuOpen ? styles.open : ''}`}>
                <a href='/' className={styles.in}>Home</a>
                <a href='/hunt-tests' className={styles.in}>Hunt Tests</a>
                <a href='/free-resources' className={styles.in}>Free Resources</a>
                <a href='/about' className={`${styles.in} ${styles.about}`}>
                    About <img src="/6527325.png" alt="Scoreup" />
                </a>
            </div>

            <div className={styles.profile}>
                {itoken && (
                    <>
                        <button className={styles.addTestBtn} onClick={() => navigate('/upload-test')}>
                            <IoIosAdd className={styles.pluslogo} /> Create Test
                        </button>
                        <div className={styles.verline}></div>
                    </>
                )}
                {!isLoggedIn ? (
                    <div className={styles.box}>
                        <div className={styles.txt} onClick={() => navigate('/login')}>SignUp/Login</div>
                    </div>
                ) : (
                    <div className={styles.profileContainer}>
                        <img
                            src={imgLink !== '' ? imgLink : "/pic.jpg"}
                            alt="Profile"
                            onClick={() => navigate(token ? '/studentprofile' : '/teacherprofile')}
                            className={styles.profileImage}
                        />
                        <div className={styles.logout} onClick={handleLogout}>Logout</div>
                    </div>
                )}
            </div>
        </div>
    );
}
