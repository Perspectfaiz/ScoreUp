import { Qnum } from './Qnum';
import styles from './Section.module.css'
export function Section({setQn,sub}) {
    const qlist=sub.list;
    
    return (
        <>
            <div className={styles.sub}>
                <p className={styles.secname}>{sub.subName}</p>
                <div className={styles.grid}>
                    {
                        qlist.map((item,index)=>{
                            return <Qnum qdata={item} idx={index} key={index} setQn={setQn}></Qnum>;
                        })
                    }
                </div>   
                    

            </div>
        </>
    )
}