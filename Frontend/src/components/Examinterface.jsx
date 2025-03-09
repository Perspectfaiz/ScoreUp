import styles from './Examinterface.module.css'
import examObj from './Examobject.js';
import { List } from './List.jsx';
import { Tagcard } from './Tagcard.jsx';
import { GiMaterialsScience } from "react-icons/gi";
import { TbWorldSearch } from "react-icons/tb";

export function Examinterface() {
    // const {name}=subjects;
    return (
        <>
        
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
                            <div className={styles.listlist}> 
                                {
                                    examObj.testList.map((item,index)=>{
                                        // console.log(item)
                                        return <List info={item.details} key={index}></List>;
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className={styles.right}>
                        <TbWorldSearch size={50} color='#cecece'/>
                        <p>Loading...</p>
                    </div>
                </div>
            </div>
            <div className={styles.space}></div>
        </>
    )
}