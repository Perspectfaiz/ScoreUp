import styles from './Instruction.module.css'
import { RxCross2 } from "react-icons/rx";
import { Qnbtn } from './Qnbtn';
import { useNavigate } from 'react-router-dom';


{/* <Qnbtn num={3} btn = {btnobg[0]}></Qnbtn> */}


export function Instruction({hide}) {
    const navigate=useNavigate();
    return (
        <>
            <div className={styles.fixed}>         
                <div className={styles.instruct}>
                    <div className={styles.cross}>
                        <button className={styles.crossbtn} onClick={hide}> < RxCross2 /> </button>
                    </div>
                    <div className={styles.general}>
                        <h2>Instructions 📋: </h2>
                        <hr />
                        <p><strong>Test Duration: </strong>You have --:-- to complete the test. A countdown timer will be displayed on the screen.</p>

                        <p><strong>Test Structure: </strong></p>
                        <ul>
                        <li>The test comprises [Number] questions, divided into various sections.</li>
                        <li>Each section may includes a variety of question types:
                            <ul>
                            <li>Multiple Choice Questions (MCQs) with a single correct answer.</li>
                            <li>Multiple Choice Questions (MCQs) with multiple correct answers.</li>
                            <li>Numerical Value Questions (NVQs).</li>
                            <li>Assertion and Reason.</li>
                            <li>Match the following.</li>
                            </ul>
                            <li>Instructions for each question type will be provided alongside the questions.</li>
                        </li>
                        </ul>

                        <p><strong>Marking Scheme:</strong></p>
                        <ul>
                        <li><strong>MCQs (Single Correct):</strong>
                            <ul>
                            <li>+4 marks for a correct answer.</li>
                            <li>-1 mark for an incorrect answer.</li>
                            <li>0 marks for unanswered questions.</li>
                            </ul>
                        </li>
                        <li><strong>MCQs (Multiple Correct):</strong>
                            <ul>
                            <li>+4 marks for all correct options selected.</li>
                            <li>Partial marks may be awarded if some, but not all, correct options are selected.</li>
                            <li>Negative marks for incorrect options selected.</li>
                            <li>0 marks for unanswered questions.</li>
                            </ul>
                        </li>
                        <li><strong>Numerical Value Questions (NVQs):</strong>
                            <ul>
                            <li>+4 marks for a correct answer.</li>
                            <li>0 marks for incorrect or unanswered questions.</li>
                            </ul>
                        </li>
                        <li><strong>Assertion and Reason and Match the following:</strong>
                            <ul>
                            <li>Follow the specific instructions given within those question sets for their marking scheme.</li>
                            </ul>
                        </li>
                        </ul>

                        <p><strong>Navigation:</strong></p>
                        <ul>
                        <li>Use the navigation buttons ("Next," "Previous") to move between questions.</li>
                        <li>A "Question Palette" will display all question numbers, allowing you to jump to specific questions.</li>
                        <li>The "question palette" interface displays different icons to help navigating through the test efficiently. Each icon has a specific meaning:
                            <ul>
                                <li className={styles.liner}><Qnbtn num={1} btn={0}></Qnbtn> Not Visited (The question has not been viewed yet.)</li>
                                <li className={styles.liner}><Qnbtn num={1} btn={1}></Qnbtn> Not Answered (The question has been viewed but not answered.)</li>
                                <li className={styles.liner}><Qnbtn num={1} btn={2}></Qnbtn> Answered (The question has been answered and saved.)</li>
                                <li className={styles.liner}><Qnbtn num={1} btn={3}></Qnbtn> Current Question (The question you are currently viewing.)</li>
                                <li className={styles.liner}><Qnbtn num={1} btn={4}></Qnbtn> Marked for Review & Not Answered (The question has been marked for review but has not been answered. It won’t be considered in evaluation unless answered later.)</li>
                                <li className={styles.liner}><Qnbtn num={1} btn={5}></Qnbtn> Marked for Review & Answered (The question has been answered, but you have marked it for review. The answer will be considered in evaluation.)</li>
                            </ul>
                        </li>
                        </ul>


                        <p><strong>Answer Submission:</strong></p>
                        <ul>
                        <li>For MCQs, select the appropriate option(s) by clicking on the radio buttons or checkboxes.</li>
                        <li>For NVQs, enter the numerical value in the provided input box. Follow any specified decimal place requirements.</li>
                        <li>For Assertion and Reason, select the correct option that matches the relationship between the two statements.</li>
                        <li>Your answers will be automatically saved as you progress.</li>
                        </ul>

                        <p><strong>Submission:</strong></p>
                        <ul>
                        <li>The Test will be submitted after clicking "Submit Test" button on the top or else when the timer expires.</li>
                        <li>Once you click "Submit Test," you will not be able to modify your answers.</li>
                        </ul>

                        <p><strong>Calculators and External Resources:</strong></p>
                        <ul>
                        <li>Use of calculators, external websites, or any other electronic devices is strictly prohibited.</li>
                        <li>The test is designed to be completed without those aids.</li>
                        </ul>

                        <p><strong>Honesty and Integrity:</strong></p>
                        <ul>
                        <li>This test is designed to assess your knowledge and skills. Please maintain honesty and integrity throughout the test.</li>
                        </ul>

                        <h2>Important Notes:</h2>

                        <ul>
                        <li>Ensure a stable internet connection for the duration of the test.</li>
                        <li>Close all unnecessary applications and browser tabs to avoid distractions.</li>
                        <li>Read each question carefully and thoroughly before attempting to answer.</li>
                        </ul>

                        <p><strong>Best of luck!</strong></p>
                    </div> 
                    <div className={styles.start}>
                        <button className={styles.startbtn} onClick={
                            
                            ()=>{
                            // console.log("naviagte is triggerd")
                            hide();
                            navigate('/testpage')
                        }}>Start Test</button>
                    </div>  
                </div> 
            </div>
        </>
    )
}