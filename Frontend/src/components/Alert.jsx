import styles from './Alert.module.css'
import { ImCross } from "react-icons/im";
import { RxCross2 } from "react-icons/rx";


export function Alert() {
    // const {name}=subjects;
    return (
        <>
            <div className={styles.main}>
                <p className={styles.text}>Are you a Teacher? <a href="#">Click Here</a></p>
                <button><RxCross2 size={25}/>
                </button>
                
            </div>
        </>
    )
}