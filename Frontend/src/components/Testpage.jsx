import styles from './Testpage.module.css'
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { LuAlarmClock } from "react-icons/lu";
import testObj from './Testobject.js';
import { Section } from './section.jsx';
import { Qnbtn } from './Qnbtn'
import { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";

// export function Testpage() {
//     const [sec, setSec]= useState(testObj.section);
//     const detail = testObj.details;

//     const [answer, setAnswer] = useState({
//         _id: testObj.details.id,
//         sec: testObj.section.map((sec) => ({
//             name: sec.subName,
//             list: sec.list.map(() => null) 
//         }))
//     });


//     const [secIdx, setSecIdx] = useState(0); 
//     const [qnIdx, setQnIdx] = useState(0);   
//     const [qn, setQn]=useState(sec[0].list[0]);

//     const [isDisable,setIsDisable]=useState(true);

//     const [ansIdx, setAnsIdx] = useState(null);

//     //beautiful application of use effect
//     useEffect(() => {
//         setIsDisable(ansIdx === null);
//     }, [ansIdx]); 

//     const changeAns = (idx) => {
//         const updatedAns = [...answer];
//         updatedAns[secIdx].list[qnIdx].ans = idx;
//         setAnswer(updatedAns);
//         setIsDisable(idx === null); 
//     };

//     //another application of use effect
//     useEffect(() => {
//         setAnsIdx(answer.sec[secIdx].list[qnIdx]); 

//         if (qn.state === 0) {
//             const updatedSec = [...sec];
//             updatedSec[secIdx].list[qnIdx].state = 1;
//             setSec(updatedSec);
//         }
//     }, [qn, secIdx, qnIdx]);



//     const goToNext = () => {
//         if (qnIdx < sec[secIdx].list.length - 1) {
//             const nextQn = sec[secIdx].list[qnIdx + 1];
//             setQn(nextQn);
//             setQnIdx(qnIdx + 1);
//         } else if (secIdx < sec.length - 1) {
//             const newSecIdx = secIdx + 1;
//             setSecIdx(newSecIdx);
//             setQnIdx(0);
//             setQn(sec[newSecIdx].list[0]);
//         }
//         setAnsIdx(sec[secIdx].list[qnIdx].ans);
//     };

//     const clearResponse = () => {
//         const updatedSec = [...sec];
//         const qnToUpdate = updatedSec[secIdx].list[qnIdx];
//         qnToUpdate.ans = null;
//         setSec(updatedSec);
//         setAnsIdx(null);
//         qn.state = 1;
//         // setIsDisable(true);
//     };

//     const reviewMarker = () => {
//         const updatedSec = [...sec];
//         const qnToUpdate = updatedSec[secIdx].list[qnIdx];
//         if(qnToUpdate.state < 4) {
//             qnToUpdate.state += 3;
//         }
//         else {
//             qnToUpdate.state -=3;
//         }
//         setSec(updatedSec);
//     }

//     const goToBack = () => {
//         if (qnIdx > 0) {
//             const prevQn = sec[secIdx].list[qnIdx - 1];
//             setQn(prevQn);
//             setQnIdx(qnIdx - 1);
//         } else if (secIdx > 0) {
//             const newSecIdx = secIdx - 1;
//             const lastQnIdx = sec[newSecIdx].list.length - 1;
//             setSecIdx(newSecIdx);
//             setQnIdx(lastQnIdx);
//             setQn(sec[newSecIdx].list[lastQnIdx]);
//         }
//         setAnsIdx(sec[secIdx].list[qnIdx].ans);
//     };

//     const Save = () => {
//         const updatedSec = [...sec];
//         const qnToUpdate = updatedSec[secIdx].list[qnIdx];
//         if(qnToUpdate.state < 4) {
//             qnToUpdate.state = 2;
//         }
//         else {
//             qnToUpdate.state = 5;
//         }
//         setSec(updatedSec);
//         changeAns(ansIdx);
//         goToNext();
//     };

//     const [countdown, setCountdown] = useState(testObj.details.time);
//     const [hour, setHour] = useState(0);
//     const [min, setMin] = useState(0);
//     const [second, setSecond] = useState(0);

//     const [lastmin, setLastmin] = useState(false);
    
//     useEffect(() => {
//         const timer = setInterval(() => {
//             setCountdown(prev => {
//                 const newTime = prev - 1;
//                 if(newTime < 60) setLastmin(true);
//                 if (newTime <= 0) {
//                     clearInterval(timer);
//                     return 0;
//                 }
//                 return newTime;
//             });
//         }, 1000);

//         return () => clearInterval(timer);
//     }, []);

//     useEffect(() => {
//         setHour(Math.floor(countdown / 3600));
//         setMin(Math.floor((countdown % 3600) / 60));
//         setSecond(countdown % 60);
//     }, [countdown]);

    
//     return (
//         <>
//         {/* <button onClick={() => console.log(sec)}>show section details</button> */}
//         <div className={styles.testpage}>
//             <div className={styles.heading}>
//                 <div className={styles.logo}>
//                     <img src="../public/6527325.png" alt="ScoreUp" className={styles.logoimg}/>
//                 </div>
//                 <div className={`${styles.timer} ${lastmin ? styles.lastminclr : ""}`}>
//                     <div className={styles.timelogo}><LuAlarmClock/></div>
//                     <div className={styles.time}>
//                         <div className={`${styles.timercontainer} `}>
//                             <div className={`${styles.hour} ${styles.timedisplay}`}>
//                                 {hour < 10 ? "0"+hour : hour}
//                             </div>
//                             <span>:</span>
//                             <div className={`${styles.min} ${styles.timedisplay}`}>
//                                 {min < 10 ? "0"+min : min}
//                             </div>
//                             <span>:</span>
//                             <div className={`${styles.sec} ${styles.timedisplay}`}>
//                                 {second < 10 ? "0"+second : second}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className={styles.submit}>
//                     <button className={styles.submitbtn}>Submit</button>
//                 </div>
//             </div>
//             <div className={styles.main}>
//                 <div className={styles.left}>
//                     <div className={styles.containQnData}>
//                         <div className={styles.qndata}>
//                             {detail.id} <IoIosArrowForward/> <b>{sec[secIdx].subName}</b> <IoIosArrowForward/> <b>Q. {qnIdx+1}</b>
//                         </div>                        
//                     </div>

//                     <div className={styles.panel}>
//                         <div className={styles.qntxt}> {qn.qnstat} </div>
//                         {
//                             qn.image!='#' && <div className={styles.qnimg}> <img src={qn.image} alt="imagine..." className={styles.objimg} /> </div>
//                         }

//                     <div className={styles.option}>
//                         {qn.options.map((opt, index) => (
//                             <label key={index} className={`${styles.choose} ${ansIdx === index ? styles.selected : ''}`}>
//                                 <input
//                                 type="radio"
//                                 name={`question-${qn.id}`} 
//                                 value={opt}
//                                 onChange={() => setAnsIdx(index)} 
//                                 checked={ansIdx === index} 
//                                 className={styles.radio}
//                                 />
//                                 <span className={styles.astat}>{opt}</span>
//                             </label>
//                         ))}
//                     </div>

//                     </div>
//                 </div>
//                 <div className={styles.right}>
//                     <div className={styles.all}>
//                         {
//                             sec.map((item,index)=>{
//                                 return <Section 
//                                             sub={item} 
//                                             secIdx={index}
//                                             setQn={setQn} 
//                                             setSecIdx={setSecIdx} 
//                                             setQnIdx={setQnIdx} 
//                                             key={index}
//                                         ></Section>;
//                             })
//                         }   
//                     </div>
                    
//                 </div>
//             </div>
//             <div className={styles.bottom}>
//                 <button className={`${styles.tsbtn} ${styles.clrResponse}`} onClick={() => {
//                     clearResponse();
//                 }}>Clear Response</button>
//                 <div className={styles.rule}></div>
//                 <button className={`${styles.tsbtn} ${styles.back}`} onClick={goToBack}><IoIosArrowBack size={15}/> Back</button>
//                 <button className={`${styles.tsbtn} ${styles.next}`} onClick={goToNext}>Next <IoIosArrowForward size={15}/></button>
//                 <div className={styles.rule}></div>
//                 <button className={`${styles.tsbtn} ${styles.save}`} onClick={() => {
//                     Save();
//                 }} disabled={isDisable}>Save & Next</button>
                
                
//                 <button 
//                     className={`${styles.tsbtn} ${styles.review}`}
//                     onClick={() => {
//                         reviewMarker();
//                     }}
//                     >Mark for Review</button>
//             </div>
//         </div>
//         </>
//     )
// }

// import styles from './Testpage.module.css';
// import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
// import { LuAlarmClock } from "react-icons/lu";
// import testObj from './Testobject.js';
// import { Section } from './section.jsx';
// import { useState, useEffect } from "react";

export function Testpage() {
    const [sec, setSec] = useState(testObj.section);
    const detail = testObj.details;

    const [answer, setAnswer] = useState({
        _id: detail.id,
        sec: testObj.section.map((sec) => ({
            name: sec.subName,
            list: sec.list.map(() => null)
        }))
    });

    const [secIdx, setSecIdx] = useState(0);
    const [qnIdx, setQnIdx] = useState(0);
    const [qn, setQn] = useState(sec[0].list[0]);
    const [isDisable, setIsDisable] = useState(true);
    const [ansIdx, setAnsIdx] = useState(null);

    useEffect(() => {
        setIsDisable(ansIdx === null);
    }, [ansIdx]);

    const changeAns = (idx) => {
        const updatedAnswer = { ...answer };
        updatedAnswer.sec[secIdx].list[qnIdx] = idx;
        setAnswer(updatedAnswer);
        setIsDisable(idx === null);
    };

    useEffect(() => {
        setAnsIdx(answer.sec[secIdx].list[qnIdx]);

        if (qn.state === 0) {
            const updatedSec = [...sec];
            updatedSec[secIdx].list[qnIdx].state = 1;
            setSec(updatedSec);
        }
    }, [qn, secIdx, qnIdx]);

    const goToNext = () => {
        if (qnIdx < sec[secIdx].list.length - 1) {
            setQnIdx(qnIdx + 1);
            setQn(sec[secIdx].list[qnIdx + 1]);
        } else if (secIdx < sec.length - 1) {
            const newSecIdx = secIdx + 1;
            setSecIdx(newSecIdx);
            setQnIdx(0);
            setQn(sec[newSecIdx].list[0]);
        }
    };

    const clearResponse = () => {
        const updatedAnswer = { ...answer };
        updatedAnswer.sec[secIdx].list[qnIdx] = null;
        setAnswer(updatedAnswer);
        setAnsIdx(null);

        const updatedSec = [...sec];
        updatedSec[secIdx].list[qnIdx].state = 1;
        setSec(updatedSec);
    };

    const reviewMarker = () => {
        const updatedSec = [...sec];
        const qnToUpdate = updatedSec[secIdx].list[qnIdx];
        qnToUpdate.state = qnToUpdate.state < 4 ? qnToUpdate.state + 3 : qnToUpdate.state - 3;
        setSec(updatedSec);
    };

    const goToBack = () => {
        if (qnIdx > 0) {
            setQnIdx(qnIdx - 1);
            setQn(sec[secIdx].list[qnIdx - 1]);
        } else if (secIdx > 0) {
            const newSecIdx = secIdx - 1;
            const lastQnIdx = sec[newSecIdx].list.length - 1;
            setSecIdx(newSecIdx);
            setQnIdx(lastQnIdx);
            setQn(sec[newSecIdx].list[lastQnIdx]);
        }
    };

    const Save = () => {
        const updatedSec = [...sec];
        const qnToUpdate = updatedSec[secIdx].list[qnIdx];
        qnToUpdate.state = qnToUpdate.state < 4 ? 2 : 5;
        setSec(updatedSec);
        changeAns(ansIdx);
        
    };

    const Savennext = () => {
        Save();
        goToNext();
    }

    const [countdown, setCountdown] = useState(testObj.details.time);
    const [hour, setHour] = useState(0);
    const [min, setMin] = useState(0);
    const [second, setSecond] = useState(0);
    const [lastmin, setLastmin] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown(prev => {
                const newTime = prev - 1;
                if (newTime < 60) setLastmin(true);
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

    const [isBelowVisible, setIsBelowVisible] = useState(false);

    return (
        <>
        {/* <button onClick={() => console.log(answer)}>show answers</button> */}
        <div className={styles.testpage}>
            <div className={styles.heading}>
                <div className={styles.logo}>
                    <img src="../public/6527325.png" alt="ScoreUp" className={styles.logoimg} />
                </div>
                <div className={`${styles.timer} ${lastmin ? styles.lastminclr : ""}`}>
                    <div className={styles.timelogo}><LuAlarmClock /></div>
                    <div className={styles.time}>
                        <div className={styles.timercontainer}>
                            <div className={`${styles.hour} ${styles.timedisplay}`}>{hour < 10 ? "0" + hour : hour}</div>
                            <span>:</span>
                            <div className={`${styles.min} ${styles.timedisplay}`}>{min < 10 ? "0" + min : min}</div>
                            <span>:</span>
                            <div className={`${styles.sec} ${styles.timedisplay}`}>{second < 10 ? "0" + second : second}</div>
                        </div>
                    </div>
                </div>
                <div className={styles.submit}>
                    <button className={styles.submitbtn}>Submit</button>
                </div>
            </div>
            <div className={styles.main}>
                <div className={styles.left}>
                    <div className={styles.containQnData}>
                        <div className={styles.qndata}>
                            {detail.id} <IoIosArrowForward /> <b>{sec[secIdx].subName}</b> <IoIosArrowForward /> <b>Q. {qnIdx + 1}</b>
                        </div>
                    </div>
                    <div className={styles.panel}>
                        <div className={styles.qntxt}>{qn.qnstat}</div>
                        {qn.image !== '#' && <div className={styles.qnimg}><img src={qn.image} alt="imagine..." className={styles.objimg} /></div>}
                        <div className={styles.option}>
                            {qn.options.map((opt, index) => (
                                <label key={index} className={`${styles.choose} ${ansIdx === index ? styles.selected : ''}`}>
                                    <input
                                        type="radio"
                                        name={`question-${qn.id}`}
                                        value={opt}
                                        onChange={() => setAnsIdx(index)}
                                        checked={ansIdx === index}
                                        className={styles.radio}
                                    />
                                    <span className={styles.astat}>{opt}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.showbelow} onClick={ () => {
                        setIsBelowVisible(!isBelowVisible)
                        }}>
                        Important Markings <IoIosArrowDown 
                                            className={`${styles.iconarrow} ${isBelowVisible ? styles.rotate : ''}`}
                                        />
                    </div>
                    {isBelowVisible && <div className={styles.btninfo}>
                        <div className={styles.onebtn}>
                            <Qnbtn num={3} qdata={{state:2}} ></Qnbtn>
                            Answered (Saved)
                        </div>
                        <div className={styles.onebtn}>
                            <Qnbtn num={7} qdata={{state:1}} ></Qnbtn>
                            Visited Not Answered
                        </div>
                        <div className={styles.onebtn}>
                            <Qnbtn num={25} qdata={{state:0}} ></Qnbtn>
                            Not Visited
                        </div>
                        <div className={styles.onebtn}>
                            <Qnbtn num={1} qdata={{state:4}} ></Qnbtn>
                            Marked for Review(Not Answered)
                        </div>
                        <div className={styles.onebtn}>
                            <Qnbtn num={5} qdata={{state:5}} ></Qnbtn>
                            Answered & Marked for Review
                        </div>
                    </div>}
                    <div className={styles.horline}></div>
                    <div className={styles.all}>
                        {sec.map((item, index) => (
                            <Section
                                sub={item}
                                secIdx={index}
                                setQn={setQn}
                                setSecIdx={setSecIdx}
                                setQnIdx={setQnIdx}
                                si={secIdx}
                                key={index}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className={styles.bottom}>
                <button className={`${styles.tsbtn} ${styles.clrResponse}`} onClick={clearResponse}>Clear Response</button>
                <div className={styles.rule}></div>
                <button className={`${styles.tsbtn} ${styles.back}`} onClick={goToBack}><IoIosArrowBack size={15} /> Back</button>
                <button className={`${styles.tsbtn} ${styles.next}`} onClick={goToNext}>Next <IoIosArrowForward size={15} /></button>
                <div className={styles.rule}></div>
                <button className={`${styles.tsbtn} ${styles.save} ${styles.onlysave}`} onClick={Save} disabled={isDisable}>Save</button>
                <div className={styles.rule}></div>
                <button className={`${styles.tsbtn} ${styles.save}`} onClick={Savennext} disabled={isDisable}>Save & Next</button>
                <button className={`${styles.tsbtn} ${styles.review}`} onClick={reviewMarker}>Mark for Review</button>
            </div>
        </div>
        </>
    );
}
