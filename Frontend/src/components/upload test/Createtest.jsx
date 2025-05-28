import styles from './Createtest.module.css'
import { FiPlus } from "react-icons/fi";
import { Popup } from './Popup';
import {Testtemp} from './Testtemp';
import Sectiontemp from './Sectiontemp';
import {Questiontemp} from './Questiontemp';
import { useState, useRef, useEffect } from 'react';
import { Qnform } from './Qnform';
import { RxCross2 } from "react-icons/rx";
import { MdOutlineEdit } from "react-icons/md";
import { RiDeleteBin7Line } from "react-icons/ri";
import { LuAlarmClock } from "react-icons/lu";




export function Createtest() {

    const examTags = {
        JEE: ["All", "Physics", "Chemistry", "Maths"],
        NEET: ["All", "Physics", "Chemistry", "Biology"],
        GATE: ["All", "Mechanical", "Electrical", "Civil", "Computer Science", "Chemical", "Metallurgy"],
        UPSC: ["All", "General Studies", "History", "Geography", "Polity", "Economy"],
        CAT: ["All", "Quantitative Aptitude", "Verbal Ability", "Logical Reasoning", "Data Interpretation"],
        CLAT: ["All", "Legal Reasoning", "Logical Reasoning", "English", "General Knowledge"]
      };

    // function tags() {

    // }
    const [changeTags, setChangeTags] = useState(examTags.JEE);
    const [secIndex, setSecIndex] = useState(-1);
    const [page, setPage] = useState({...Testtemp});
    const [selectedStream, setSelectedStream] = useState("JEE");
    const [selectedTag, setSelectedTag] = useState("");

    ///////practice this. this one is good///////
    const handleDelQn = (secIndex, qnIndex) => {
        setPage(prevPage => {
            const updatedSections = prevPage.section.map((section, idx) => {
                if (idx === secIndex) {
                    const newList = section.list
                        .filter((_, i) => i !== qnIndex)
                        .map((qn, i) => ({ ...qn, index: i })); // reassign index

                    return { ...section, list: newList };
                }
                return section;
            });

            return { ...prevPage, section: updatedSections };
        });
    };

    const [hour, setHour] = useState(0);
    const [min, setMin] = useState(0);
    const [sec, setSec] = useState(0);

    //Beautiful application of useEffect... 
    //tracking chages in hour, min, sec and doing the neccessary rest...
    //practice this.
    useEffect(() => {
        const currTime = sec + (min * 60) + (hour * 3600);
        setPage(prevPage => ({
            ...prevPage,
            details: {
                ...prevPage.details,
                time: currTime
            }
        }));
        console.log(currTime);
    }, [hour, min, sec]);  // this runs setTime logic when any value changes



    return (
        <>
            {/* <button onClick={() => console.log(page)}>check page object</button> */}
            {/* <Popup></Popup> */}
            <div className={styles.createtest}>
                <div className={styles.createhead}>
                    <div className={styles.back}>
                        <button className={styles.backbtn}>Back</button>
                    </div>
                    <div className={styles.title}>
                        <input type="text" onChange={
                            async (e)=>{
                                setPage(prevPage => ({
                                    ...prevPage,
                                    details: { ...prevPage.details, title: e.target.value }
                                }));
                        
                                // console.log(page.details.title);
                            }
                        } className={styles.titletxt} placeholder='Create test, Your Title Here...' value={page.details.title}/>
                    </div>
                    <div className={styles.credentials}>
                        <div className={styles.timer}>
                            <span><LuAlarmClock/></span>
                            <span>Set Timer </span>
                            <span></span>
                            <input
                            type="text"
                            maxLength={2}
                            onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, '').slice(0, 2)}
                            className={`${styles.hour} ${styles.time}`}
                            placeholder="HH"
                            onChange={(e) => {
                                const val = e.target.value;
                                val ? setHour(Number(val)) : 0;
                                // setTime();
                            }}
                            />
                            <span>:</span>
                            <input
                            type="text"
                            maxLength={2}
                            onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, '').slice(0, 2)}
                            className={`${styles.min} ${styles.time}`}
                            placeholder="MM"
                            onChange={(e) => {
                                const val = e.target.value;
                                val ? setMin(Number(val)) : 0;
                                // setTime();
                            }}
                            />
                            <span>:</span>
                            <input
                            type="text"
                            maxLength={2}
                            onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, '').slice(0, 2)}
                            className={`${styles.sec} ${styles.time}`}
                            placeholder="SS"
                            onChange={(e) => {
                                const val = e.target.value;
                                val ? setSec(Number(val)) : 0;
                                // setTime();
                            }}
                            />

                        </div>
                        <div className={styles.dropdowns}>
                            <div className={styles.stream}>
                            <select
                            name="Stream"
                            id={styles.stream}
                            className={`${styles.stream_select} ${styles.drop}`}
                            onChange={(e) => {
                                const val = e.target.value;
                                setSelectedStream(val);          // update selectedStream state
                                setSelectedTag("");
                                setPage(prevPage => ({
                                    ...prevPage,
                                    details: { ...prevPage.details, stream: val, tag: "All" }  // also reset tag when stream changes
                                }));
                                setChangeTags(examTags[val]);   // update tags immediately using val
                            }}
                            >
                                    <option value="">-- Stream --</option>
                                    <option value="JEE">JEE</option>
                                    <option value="NEET">NEET</option>
                                    <option value="GATE">GATE</option>
                                    <option value="CAT">CAT</option>
                                    <option value="UPSC">UPSC</option>
                                    <option value="CLAT">CLAT</option>
                                </select>
                            </div>
                            <div className={styles.tag}>
                            <select
                            name="Branch"
                            id={styles.tag}
                            value={selectedTag}
                            className={`${styles.tagselect} ${styles.drop}`}
                            onChange={(e) => {
                                const value = e.target.value;
                                setSelectedTag(value);
                                setPage(prevPage => ({
                                ...prevPage,
                                details: { ...prevPage.details, tag: value }
                                }));
                            }}
                            >
                                <option value="">-- Branch --</option>
                            {
                                changeTags.map((item, index) => (
                                <option value={item} key={index}>{item}</option>
                                ))
                            }
                            </select>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className={styles.createsection}>
                    <div className={styles.tray}>
                        
                        {page.section.map((item, index)=>{
                            const isActive = index === secIndex;
                            return <button className={`${styles.addbtn} ${styles.secNameBtn} ${isActive ? styles.activeBtn : ''}`} 
                                            key={index} 
                                            onClick={()=>{
                                                setSecIndex(index);
                                                console.log(page);
                                            }

                            }> <span className={styles.secname}>{item.subName} </span> 
                                <button className= {styles.editbtn} onClick={() => {
                                    const newName = prompt("Rename Section heading:", page.section[index].subName);
                                    if(newName) {
                                        const updatedSections = [...page.section];
                                        updatedSections[index] = {
                                            ...updatedSections[index], 
                                            subName : newName
                                        };
                                        setPage({
                                            ...page, section:updatedSections
                                        });
                                    }
                                }}>
                                <MdOutlineEdit />
                                </button >
                                <button className= {styles.editbtn} onClick={() => {
                                    const assure = confirm("Are you sure you want to delete this Section?");
                                    if(assure){
                                        
                                        setPage(prevPage => {
                                            
                                            const updatedSections = prevPage.section.filter((_, i) => i !== index);
                                            const reindexedSections = updatedSections.map((sec, newIndex) => ({
                                                ...sec,
                                                index: newIndex
                                            }));
                                            

                                            return{
                                                ...prevPage,
                                                section: reindexedSections
                                            }
                                            
                                        });
                                        // console.log(secIndex);
                                    
                                    };
                                }}>
                                <RiDeleteBin7Line/>
                                </button>
                            </button>
                        })}
                        
                    </div>
                    <div className={styles.addsection}>
                        <button className={styles.addbtn} onClick={
                            () => {

                                let sec = { ...Sectiontemp, subName: prompt("Enter Section Name"), index: page.section.length };
                                if(sec.subName){
                                    setPage(prevPage => ({
                                        ...prevPage,
                                        section: [...prevPage.section, sec]
                                    }));
                                
                                    setSecIndex(sec.index);
                                    // console.log(sec);
                                }
                            }

                        }> <FiPlus size={25}></FiPlus> <span className={styles.sectxt}>Section</span>  
                        </button>
                        <button className={styles.submitbtn}>Submit</button>
                    </div>
                    
                </div>
                <div className={styles.createbody}>
                    {
                        secIndex != null && secIndex > -1 && secIndex < page.section.length ? page.section[secIndex].list.map((item, index) => {
                            return <Qnform key={index} data={item} page={page} setPage={setPage} secIndex={secIndex} onDelete={handleDelQn}></Qnform>
                            
                        }) : null
                    }
                    {secIndex != null && secIndex > -1 && secIndex < page.section.length ? <div className={styles.addqnbracket}>
                    <div className={styles.addqn}>
                        <button className={styles.addqnbtn} onClick={
                            ()=>{
                                // console.log(secIndex);
                                let qn = {...Questiontemp, index: page.section[secIndex].list.length};
                                setPage(prevPage => ({
                                    ...prevPage,
                                    section: prevPage.section.map((item, index) => index === secIndex ? { ...item, list: [...item.list || [], qn] } : item)
                                }));
                            }
                        }> <FiPlus size={25}></FiPlus> <span className={styles.addqntxt}>Question</span> </button>
                    </div>
                    </div> : null}
                </div>
            </div>
        </>
    )
}