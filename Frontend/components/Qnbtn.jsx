import styles from './Qnbtn.module.css'
export function Qnbtn({num,btn}) {
    const btnobj = [{name:'unseen', review:'dot'},{name:'seen', review: 'dot'},{name:'save', review:'dot'},{name:'curr', review: 'dot'},{name:'seen', review: 'bindi'},{name:'save', review:'bindi'},{name:'curr', review:'bindi'}];
    return (
        <>
            <div className={styles.line}>
            <div className={`${styles.qnbtn} ${styles[btnobj[btn].name ]}`}>{num}
                <div className={`${styles[btnobj[btn].review]}`}></div>
            </div>
            </div>
        </>
    )
}