import styles from './Instruction.module.css'
import { RxCross2 } from "react-icons/rx";
import { Qnbtn } from './Qnbtn';

export function Instruction({hide, testData, onStartTest}) {
    // Format time from seconds to HH:MM:SS
    const formatTime = (seconds) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const remainingSeconds = seconds % 60;
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

    // Calculate total questions
    const totalQuestions = testData?.section?.reduce((total, section) => total + section.list.length, 0) || 0;

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
                        <p><strong>Test Title: </strong>{testData?.details?.title || 'Untitled Test'}</p>
                        <p><strong>Test Duration: </strong>You have {formatTime(testData?.details?.time || 0)} to complete the test. A countdown timer will be displayed on the screen.</p>

                        <p><strong>Test Structure: </strong></p>
                        <ul>
                        <li>The test comprises {totalQuestions} questions, divided into {testData?.section?.length || 0} sections.</li>
                        <li>Each section may includes a variety of question types:
                            <div style={{marginLeft: '20px'}}>
                                <div>• Multiple Choice Questions (MCQs) with a single correct answer.</div>
                                <div>• Multiple Choice Questions (MCQs) with multiple correct answers.</div>
                                <div>• Numerical Value Questions (NVQs).</div>
                                <div>• Assertion and Reason.</div>
                                <div>• Match the following.</div>
                            </div>
                            <div style={{marginLeft: '20px'}}>Instructions for each question type will be provided alongside the questions.</div>
                        </li>
                        </ul>

                        <p><strong>Marking Scheme:</strong></p>
                        <ul>
                        <li><strong>MCQs (Single Correct):</strong>
                            <div style={{marginLeft: '20px'}}>
                                <div>• +4 marks for a correct answer.</div>
                                <div>• -1 mark for an incorrect answer.</div>
                                <div>• 0 marks for unanswered questions.</div>
                            </div>
                        </li>
                        <li><strong>MCQs (Multiple Correct):</strong>
                            <div style={{marginLeft: '20px'}}>
                                <div>• +4 marks for all correct options selected.</div>
                                <div>• Partial marks may be awarded if some, but not all, correct options are selected.</div>
                                <div>• Negative marks for incorrect options selected.</div>
                                <div>• 0 marks for unanswered questions.</div>
                            </div>
                        </li>
                        <li><strong>Numerical Value Questions (NVQs):</strong>
                            <div style={{marginLeft: '20px'}}>
                                <div>• +4 marks for a correct answer.</div>
                                <div>• 0 marks for incorrect or unanswered questions.</div>
                            </div>
                        </li>
                        <li><strong>Assertion and Reason and Match the following:</strong>
                            <div style={{marginLeft: '20px'}}>
                                <div>• Follow the specific instructions given within those question sets for their marking scheme.</div>
                            </div>
                        </li>
                        </ul>

                        <p><strong>Navigation:</strong></p>
                        <ul>
                        <li>Use the navigation buttons ("Next," "Previous") to move between questions.</li>
                        <li>A "Question Palette" will display all question numbers, allowing you to jump to specific questions.</li>
                        <li>The "question palette" interface displays different icons to help navigating through the test efficiently. Each icon has a specific meaning:
                            <div style={{marginLeft: '20px'}}>
                                <div className={styles.liner}><Qnbtn num={1} qdata={{state: 0}}></Qnbtn> Not Visited (The question has not been viewed yet.)</div>
                                <div className={styles.liner}><Qnbtn num={1} qdata={{state: 1}}></Qnbtn> Not Answered (The question has been viewed but not answered.)</div>
                                <div className={styles.liner}><Qnbtn num={1} qdata={{state: 2}}></Qnbtn> Answered (The question has been answered and saved.)</div>
                                <div className={styles.liner}><Qnbtn num={1} qdata={{state: 3}}></Qnbtn> Current Question (The question you are currently viewing.)</div>
                                <div className={styles.liner}><Qnbtn num={1} qdata={{state: 4}}></Qnbtn> Marked for Review & Not Answered (The question has been marked for review but has not been answered. It won't be considered in evaluation unless answered later.)</div>
                                <div className={styles.liner}><Qnbtn num={1} qdata={{state: 5}}></Qnbtn> Marked for Review & Answered (The question has been answered, but you have marked it for review. The answer will be considered in evaluation.)</div>
                            </div>
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
                        <button className={styles.startbtn} onClick={onStartTest}>Start Test</button>
                    </div>  
                </div> 
            </div>
        </>
    )
}