import styles from './Testpage.module.css'
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { LuAlarmClock } from "react-icons/lu";
import testObj from './Testobject.js';
import { Section } from './section.jsx';
import { useState, useEffect } from "react";


export function Testpage() {
    const sec=testObj.section;
    const detail = testObj.details;

    const [qn, setQn]=useState(sec[0].list[0]);

    const [countdown, setCountdown] = useState(testObj.details.time);
    const [hour, setHour] = useState(0);
    const [min, setMin] = useState(0);
    const [second, setSecond] = useState(0);

    const [lastmin, setLastmin] = useState(false);
    
    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown(prev => {
                const newTime = prev - 1;
                if(newTime < 60) setLastmin(true);
                if (newTime <= 0) {
                    clearInterval(timer);
                    return 0;
                }
                return newTime;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        setHour(Math.floor(countdown / 3600));
        setMin(Math.floor((countdown % 3600) / 60));
        setSecond(countdown % 60);
    }, [countdown]);

    
    return (
        <>
        {/* <button onClick={() => console.log(testObj)}>show test object</button> */}
        <div className={styles.testpage}>
            <div className={styles.heading}>
                <div className={styles.logo}>
                    <img src="/6527325.png" alt="ScoreUp" className={styles.logoimg}/>
                </div>
                <div className={`${styles.timer} ${lastmin ? styles.lastminclr : ""}`}>
                    <div className={styles.timelogo}><LuAlarmClock/></div>
                    <div className={styles.time}>
                        <div className={`${styles.timercontainer} `}>

                            <div className={`${styles.hour} ${styles.timedisplay}`}>
                                {hour < 10 ? "0"+hour : hour}
                            </div>
                            <span>:</span>
                            <div className={`${styles.min} ${styles.timedisplay}`}>
                                {min < 10 ? "0"+min : min}
                            </div>
                            <span>:</span>
                            <div className={`${styles.sec} ${styles.timedisplay}`}>
                                {second < 10 ? "0"+second : second}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.submit}>
                    <button className={styles.submitbtn}>Submit</button>
                </div>
            </div>
            <div className={styles.main}>
                <div className={styles.left}>
                    <div className={styles.panel}>
                        <div className={styles.qntxt}> {qn.qnstat} </div>
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
                                return <Section sub={item} setQn={setQn}  key={index}></Section>;
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
                <button 
                    className={`${styles.tsbtn} ${styles.review}`}
                    onClick={() => {

                    }}
                    >Mark for Review</button>
            </div>
        </div>
        </>
    )
}

