import styles from './Alert.module.css'
import { ImCross } from "react-icons/im";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';


export function Alert({hideAlert}) {
    const navigate = useNavigate();
    // const {name}=subjects;

    //     const [showAlert, setShowAlert]=useState(true);
    // function hideAlert(){
    // setShowAlert(!showAlert);
    // }
    return (
        <>
        {/* {showAlert && <Alert hideAlert={hideAlert}></Alert>} */}
            <div className={styles.main}>
                <p className={styles.text}>Are you a Teacher? <a onClick={() => navigate("/login", { state: { runFunction: true } })}>Click Here</a></p>
                <button className={styles.cancel} onClick={hideAlert}><RxCross2 size={25}/>
                </button>
                
            </div>
        </>
    )
}