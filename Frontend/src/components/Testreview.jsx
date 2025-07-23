import styles from './Testreview.module.css';
import { IoIosArrowForward, IoIosArrowBack, IoIosArrowDown } from "react-icons/io";
import { Section } from './Section.jsx';
import { Qnbtn } from './Qnbtn.jsx';
import { useState, useEffect, useContext } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';
import axios from 'axios';

export function Testreview() {
    const location = useLocation();
    const testId = location.state?.testId || null;
    const studentId = location.state?.studentId || null;

    const [sec, setSec] = useState([]);
    const [detail, setDetail] = useState({});
    const [isBelowVisible, setIsBelowVisible] = useState(false);
    const [studentAns, setStudentAns] = useState(null);
    const [hasColored, setHasColored] = useState(false);

    const { studentData } = useContext(AppContext);

    useEffect(() => {
        const fetchTest = async () => {
            try {
                if (testId) {
                    const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/tests/${testId}`);
                    if (response.data.success) {
                        const testData = response.data.test;
                        setSec(testData.section);
                        setDetail(testData.details);
                    } else {
                        console.log("Failed to fetch test data");
                    }
                } else {
                    console.log("No testId provided");
                }
            } catch (err) {
                console.log(err.message);
            }
        };
        fetchTest();
    }, [testId]);

    useEffect(() => {
        if (studentData) {
            const foundAns = studentData.testHistory.find(item => item._id === testId);
            setStudentAns(foundAns);
        }
    }, [studentData, testId]);

    useEffect(() => {
        if (sec.length > 0 && studentAns && !hasColored) {
            const updatedSec = sec.map((section, i) => {
                const updatedList = section.list.map((qn, j) => {
                    const studentAnsIdx = studentAns.sec[i]?.list[j];
                    let state = 0;
                    if (studentAnsIdx !== -1) {
                        state = studentAnsIdx === qn.ans ? 2 : 1;
                    }
                    return { ...qn, state };
                });
                return { ...section, list: updatedList };
            });
            setSec(updatedSec);
            setHasColored(true);
        }
    }, [sec, studentAns, hasColored]);

    const [secIdx, setSecIdx] = useState(0);
    const [qnIdx, setQnIdx] = useState(0);
    const [qn, setQn] = useState({});

    useEffect(() => {
        if (sec.length > 0 && sec[secIdx] && sec[secIdx].list[qnIdx]) {
            setQn(sec[secIdx].list[qnIdx]);
        }
    }, [sec, secIdx, qnIdx]);

    const goToNext = () => {
        if (qnIdx < sec[secIdx].list.length - 1) {
            setQnIdx(qnIdx + 1);
        } else if (secIdx < sec.length - 1) {
            setSecIdx(secIdx + 1);
            setQnIdx(0);
        }
    };

    const goToBack = () => {
        if (qnIdx > 0) {
            setQnIdx(qnIdx - 1);
        } else if (secIdx > 0) {
            const newSecIdx = secIdx - 1;
            const lastQnIdx = sec[newSecIdx].list.length - 1;
            setSecIdx(newSecIdx);
            setQnIdx(lastQnIdx);
        }
    };

    return (
        <div className={styles.testpage}>
            <div className={styles.heading}>
                <div className={styles.logo}>
                    <img src="/6527325.png" alt="ScoreUp" className={styles.logoimg} />
                </div>
            </div>

            <div className={styles.main}>
                <div className={styles.left}>
                    <div className={styles.containQnData}>
                        <div className={styles.qndata}>
                            {detail.title} <IoIosArrowForward /> <b>{sec[secIdx]?.subName}</b> <IoIosArrowForward /> <b>Q. {qnIdx + 1}</b>
                        </div>
                    </div>

                    <div className={styles.panel}>
                        <div className={styles.qntxt}>{qn.qnstat}</div>
                        {qn.image !== '#' && qn.image && (
                            <div className={styles.qnimg}>
                                <img src={qn.image} alt="question" className={styles.objimg} />
                            </div>
                        )}
                        <div className={styles.option}>
                            {qn.options?.map((opt, index) => (
                                <label
                                    key={index}
                                    className={`
                                        ${styles.choose}
                                        ${studentAns?.sec?.[secIdx]?.list?.[qnIdx] === index ? styles.red : ''}
                                        ${qn.ans === index ? styles.green : ''}
                                    `}
                                >
                                    <input
                                        type="radio"
                                        name={`question-${qn.id || index}`}
                                        value={opt}
                                        disabled
                                        className={styles.radio}
                                    />
                                    <span className={styles.astat}>{opt}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                </div>

                <div className={styles.right}>
                    <div className={styles.showbelow} onClick={() => setIsBelowVisible(!isBelowVisible)}>
                        Important Markings
                        <IoIosArrowDown className={`${styles.iconarrow} ${isBelowVisible ? styles.rotate : ''}`} />
                    </div>

                    {isBelowVisible && (
                        <div className={styles.btninfo}>
                            <div className={styles.onebtn}>
                                <Qnbtn num={3} qdata={{ state: 2 }} />
                                Answered (Saved)
                            </div>
                            <div className={styles.onebtn}>
                                <Qnbtn num={7} qdata={{ state: 1 }} />
                                Visited Not Answered
                            </div>
                            <div className={styles.onebtn}>
                                <Qnbtn num={25} qdata={{ state: 0 }} />
                                Not Visited
                            </div>
                        </div>
                    )}

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
                <button className={`${styles.tsbtn} ${styles.back}`} onClick={goToBack}>
                    <IoIosArrowBack size={15} /> Back
                </button>
                <button className={`${styles.tsbtn} ${styles.next}`} onClick={goToNext}>
                    Next <IoIosArrowForward size={15} />
                </button>
                <div className={styles.rule}></div>
            </div>
        </div>
    );
}
