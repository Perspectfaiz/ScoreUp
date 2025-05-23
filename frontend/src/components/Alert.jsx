import styles from './Alert.module.css'
import { ImCross } from "react-icons/im";
import { RxCross2 } from "react-icons/rx";


export function Alert({hideAlert}) {
    // const {name}=subjects;
    return (
        <>
            <div className={styles.main}>
                <p className={styles.text}>Are you a Teacher? <a href="#">Click Here</a></p>
                <button className={styles.cancel} onClick={hideAlert}><RxCross2 size={25}/>
                </button>
                
            </div>
        </>
    )
}