import { Qnbtn } from './Qnbtn'
import styles from './Qnum.module.css'

export function Qnum({qdata, idx, setQn}) {
    const btnState=qdata.state;
    const handle=()=>{
        qn.state = qn.state > 3 ? 4 : 1;
        setQn(qdata);
        
    }
    return (
        <>
            <div className={styles.line} onClick={handle}>
                <Qnbtn num={idx+1} btn={btnState} ></Qnbtn>
            </div>
        </>
    )
}