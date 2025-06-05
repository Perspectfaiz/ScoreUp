import styles from './Popup.module.css'
import { RxCross2 } from "react-icons/rx";


export function Popup({hide}) {

    return (
        <>
            <div className={styles.fixed}>         
                <div className={styles.instruct}>
                    <div className={styles.cross}>
                        <button className={styles.crossbtn} onClick={hide}> < RxCross2 /> </button>
                    </div>
                    <div className={styles.general}>
                        
                    </div> 
                    <div className={styles.start}>
                        <button className={styles.startbtn}>Start Test</button>
                    </div>  
                </div> 
            </div>
        </>
    )
}