import { Link, useNavigate } from 'react-router-dom';
import styles from './Examinterface.module.css'
import examObj from './Examobject.js';
import { List } from './List.jsx';
import { Tagcard } from './Tagcard.jsx';
import { GiMaterialsScience } from "react-icons/gi";
import { TbWorldSearch } from "react-icons/tb";
import { useState } from 'react';
import { Instruction } from './Instruction.jsx';
// import { Instruction } from './Instruction.jsx'
export function Examinterface() {
    // const {name}=subjects;
    const navigate = useNavigate();
    const [showInstruct,setShowInstuct]=useState(false);
    function hide(){
        setShowInstuct(!showInstruct);
    }
    
    return (
        <>
        
            {showInstruct && <Instruction hide={hide}></Instruction>} 
            <div className={styles.examface}>
                <div className={styles.examhead}><GiMaterialsScience size={21}/><div><b>JEE</b> TEST LIBRARY</div></div>
                <div className={styles.exammain}>
                    <div className={styles.left}>
                        <div className={styles.tags}> 
                            {
                                examObj.tag.map((item,index)=>{
                                    return <Tagcard tag={item} key={index}></Tagcard>;
                                })
                            }
                        </div>
                        <div className={styles.examlist}> 
                            <div className={styles.listhead}>
                                <div className={styles.status}><div>Status</div></div>
                                <div className={styles.topic}><div>Topic</div></div>
                                <div className={styles.duration}><div>Duration</div></div>
                                <div className={styles.attempted}><div>Visits</div></div>
                                <div className={styles.teacher}><div>Teacher</div></div>
                            </div>
                            <div className={styles.listlist}  > 
                                {
                                    examObj.testList.map((item,index)=>{
                                        // console.log(item)
                                        // return <List info={item.details} key={index}  onClick={() => navigate('/instruction')} ></List>;
                                        return <div key={index} onClick={hide} style={{ cursor: 'pointer' }}>
                                        <List info={item.details} />
                                    </div>
                                    // onClick={() => navigate('/instruction')} 
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className={styles.right} >
                        <TbWorldSearch size={50} color='#cecece'/>
                        <p>Loading...</p>
                    </div>
                </div>
            </div>
            <div className={styles.space}></div>
        </>
    )
}