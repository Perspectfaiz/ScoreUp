import { Qnum } from './Qnum';
import styles from './Section.module.css'
import { IoIosArrowDown } from "react-icons/io";
import { useState } from 'react';

export function Section({setQn,sub}) {
    const qlist=sub.list;
    const [isgridVisible, setIsgridVisible] = useState(true);
    
    return (
        <>
            <div className={styles.sub}>
                <p className={styles.secname} onClick={ () => {
                    setIsgridVisible(!isgridVisible)
                }}>{sub.subName} <IoIosArrowDown className={`${styles.iconarrow} ${isgridVisible ? styles.rotate : ''}`}></IoIosArrowDown> </p>
                {isgridVisible && (<div className={styles.grid}>
                    {
                        qlist.map((item,index)=>{
                            return <Qnum qdata={item} idx={index} key={index} setQn={setQn}></Qnum>;
                        })
                    }
                </div>)}  
                    

            </div>
        </>
    )
}