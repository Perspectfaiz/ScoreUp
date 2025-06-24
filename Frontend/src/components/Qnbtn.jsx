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
    
    // Add error handling for undefined qdata or state
    if (!qdata || typeof qdata.state === 'undefined') {
        console.warn('Qnbtn: qdata or qdata.state is undefined', { num, qdata });
        return (
            <div className={styles.line}>
                <div className={`${styles.qnbtn} ${styles.unseen}`}>{num}
                    <div className={`${styles.dot}`}></div>
                </div>
            </div>
        );
    }
    
    // Ensure state is within bounds
    const state = Math.min(Math.max(qdata.state, 0), btnobj.length - 1);
    const btnData = btnobj[state];
    
    return (
        <>
            <div className={styles.line}>
                <div className={`${styles.qnbtn} ${styles[btnData.name]}`}>{num}
                    <div className={`${styles[btnData.review]}`}></div>
                </div>
            </div>
        </>
    )
}