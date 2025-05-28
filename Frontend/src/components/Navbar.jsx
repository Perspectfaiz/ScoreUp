import styles from './Navbar.module.css'
export function Navbar() {
    return (
        <>
        <div className={styles.nav}>
            <a href='#' className={styles.brand}>
                <img src="../public/6527325.png" alt="ScoreUp" />
                <div className={styles.txt}>ScoreUp</div>
            </a>
            <div className={styles.field}>
                <a href='#' className={styles.in}>Home</a>
                <a href='#' className={styles.in}>Hunt Tests</a>
                <a href='#' className={styles.in}>Free Resources</a>
                <a href='#' className={styles.in}>About</a>
            </div>
            <a className={styles.profile} href='#'>
                <div className={styles.box}>
                    <div className={styles.txt}>SignUp/Login</div>
                </div>
                <img src="../public/account.png" alt="X" />
            </a>
        </div>  
        </>
    )
}