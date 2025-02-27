import styles from "./Login.module.css";
const Login=()=>{

    return (
         <div>
      <div className={styles.mainbody}>
                <div className={styles.heading}>
                    <h2>Sign In</h2>
                </div>
                <div className={styles.field}>
                    <div><input type="text" placeholder='Username or Email address'/></div>
                    <div><input type="password" placeholder='Password'/></div>
                </div>
                <div className={styles.logbtn}>
                    <button>Login</button>
                </div>
                <div className={styles.signup}>
                    <p>Don't have an account? <a href="#">Register</a></p>
                </div>
            </div>
            <div className={styles.mainbody}>
                <div className={styles.heading}>
                    <h2>Sign Up</h2>
                </div>
                <div className={styles.signopt}>
                    <p className={styles.signtext}>Sign up as:</p>
                    <div className={styles.opt}>
                        <button>Teacher</button>
                        <button className={styles.selected}>Student</button>
                    </div>
                </div>
                <div className={styles.field}>
                    <div><input type="text" placeholder='Name' className={styles.selected}/></div>
                    <div><input type="email" placeholder='Email address'/></div>
                    <div><input type="text" placeholder='Username'/></div>
                    <div><input type="password" placeholder='Password'/></div>
                </div>
                <div className={styles.signbtn}>
                    <button>Create Account</button>
                </div>
                <div className={styles.login}>
                    <p>Have an account? <a href="#">Login</a></p>
                </div>
            </div>
         </div>
    )
}

export default Login