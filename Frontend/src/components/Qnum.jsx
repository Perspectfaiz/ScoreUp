
import { Qnbtn } from './Qnbtn'
import styles from './Qnum.module.css'

export function Qnum({qdata, idx, secIdx, setQn, setSecIdx, setQnIdx}) {
    const handle=()=>{
        setQn(qdata);
        setQnIdx(idx);
        setSecIdx(secIdx);
    }
    return (
        <>
            <div className={styles.line} onClick={handle}>
                <Qnbtn num={idx+1} qdata={qdata} ></Qnbtn>
            </div>
        </>
    )
}