import styles from './Hero.module.css'
export function Hero() {
    return (
        <>
            <div className={styles.main}>
                <div className={styles.txt}>
                    <p className={styles.top}>The only Test</p>
                    <p className={styles.bottom}>you need for Tomorrow.</p>
                </div>
                <div className={styles.image}>
                    <img src="/student.png" alt="students" />
                </div>
            </div>
        </>
    ) 
}