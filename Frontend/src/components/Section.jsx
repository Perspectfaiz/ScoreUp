import { Qnum } from './Qnum';
import styles from './Section.module.css'
import { IoIosArrowDown } from "react-icons/io";
import { useEffect, useState } from 'react';

export function Section({sub, secIdx, setQn,setSecIdx,setQnIdx, si}) {
    const qlist=sub.list;
    const [isgridVisible, setIsgridVisible] = useState(true);
    useEffect(() => {
        if(secIdx === si) {
            setIsgridVisible(true);
        }
    },[si]);
    
    return (
        <>
            <div className={styles.sub}>
                <p className={styles.secname} onClick={ () => {
                    setIsgridVisible(!isgridVisible)
                    }}>
                    {sub.subName} <IoIosArrowDown className={`${styles.iconarrow} ${isgridVisible ? styles.rotate : ''}`}/>
                </p>
                {isgridVisible && (<div className={styles.grid}>
                    {
                        qlist.map((item,index)=>{
                            return <Qnum qdata={item} 
                                        idx={index}
                                        secIdx={secIdx}
                                        setQn={setQn} 
                                        setSecIdx={setSecIdx}
                                        setQnIdx={setQnIdx}
                                        key={index} 
                                        >

                                    </Qnum>;
                        })
                    }
                </div>)}  
                    

            </div>
        </>
    )
}