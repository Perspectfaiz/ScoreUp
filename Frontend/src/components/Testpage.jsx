import styles from './Testpage.module.css'
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { LuAlarmClock } from "react-icons/lu";
import testObj from './Testobject.js';
import { Section } from './section.jsx';
import { useState } from "react";

export function Testpage() {
    const sec=testObj.section;

    const [qn, setQn]=useState(sec[0].list[0]);
    
    return (
        <>
        <div className={styles.testpage}>
            <div className={styles.heading}>
                <div className={styles.logo}>
                    <img src="../public/6527325.png" alt="ScoreUp" className={styles.logoimg}/>
                </div>
                <div className={styles.timer}>
                    <div className={styles.timelogo}><LuAlarmClock size={25}></LuAlarmClock></div>--:--:--
                </div>
                <div className={styles.submit}>
                    <button className={styles.submitbtn}>Submit</button>
                </div>
            </div>
            <div className={styles.main}>
                <div className={styles.left}>
                    <div className={styles.panel}>
                        <div className={styles.qntxt}> {qn.qstat} </div>
                        {
                            qn.image!='#' && <div className={styles.qnimg}> <img src={qn.image} alt="imagine..." className={styles.objimg} /> </div>
                        }
                        <div className={styles.option}> 
                            <div className={styles.choose}><p className={styles.astat}>{qn.options[0]}</p></div>
                            <div className={styles.choose}><p className={styles.astat}>{qn.options[1]}</p></div>
                            <div className={styles.choose}><p className={styles.astat}>{qn.options[2]}</p></div>
                            <div className={styles.choose}><p className={styles.astat}>{qn.options[3]}</p></div>
                        </div>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.all}>
                        {
                            sec.map((item,index)=>{
                                return <Section sub={item} setQn={setQn} key={index}></Section>;
                            })
                        }   
                    </div>
                    
                </div>
            </div>
            <div className={styles.bottom}>
                <button className={`${styles.tsbtn} ${styles.back}`}><IoIosArrowBack size={15}/> Back</button>
                <button className={`${styles.tsbtn} ${styles.next}`}>Next <IoIosArrowForward size={15}/></button>
                <div className={styles.rule}></div>
                <button className={`${styles.tsbtn} ${styles.save}`}>Save & Next</button>
                <button className={`${styles.tsbtn} ${styles.review}`}>Mark for Review</button>
            </div>
        </div>
        </>
    )
}

