import styles from './Qnbtn.module.css'
export function Qnbtn({num,qdata}) {
    const btnobj = [
        {name:'unseen', review:'dot'},
        {name:'seen', review: 'dot'},
        {name:'save', review:'dot'},
        {name:'curr', review: 'dot'},
        {name:'seen', review: 'bindi'},
        {name:'save', review:'bindi'},
        {name:'curr', review:'bindi'}
    ];
    
    return (
        <>
            <div className={styles.line}>
                <div className={`${styles.qnbtn} ${styles[btnobj[qdata.state].name ]}`}>{num}
                    <div className={`${styles[btnobj[qdata.state].review]}`}></div>
                </div>
            </div>
        </>
    )
}