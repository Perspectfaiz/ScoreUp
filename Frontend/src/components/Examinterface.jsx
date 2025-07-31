import { useNavigate } from 'react-router-dom';
import styles from './Examinterface.module.css'
import { List } from './List.jsx';
import { Tagcard } from './Tagcard.jsx';
import { GiMaterialsScience } from "react-icons/gi";
import { TbWorldSearch } from "react-icons/tb";
import { useState, useEffect } from 'react';
import { Instruction } from './Instruction.jsx';
import axios from 'axios';

export function Examinterface() {
    const navigate = useNavigate();
    const [showInstruct,setShowInstuct]=useState(false);
    const [selectedTest, setSelectedTest] = useState(null);
    const [tests, setTests] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedTag, setSelectedTag] = useState("All");

    // Fetch tests from backend using axios directly
    useEffect(() => {
        const fetchTests = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/tests/all`);
                if (response.data.success) {
                    setTests(response.data.tests);
                } else {
                    setError('Failed to fetch tests');
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchTests();
    }, []);

    function hide(){
        setShowInstuct(false);
        setSelectedTest(null);
    }

    const handleTestClick = (test) => {
        setSelectedTest(test);
        setShowInstuct(true);
    };

    const handleStartTest = () => {
        if (selectedTest) {
            hide();
            navigate('/testpage', { state: { testId: selectedTest._id } });
        }
    };

    // Filter tests based on selected tag
    const filteredTests = selectedTag === "All" 
        ? tests 
        : tests.filter(test => test.details.tag === selectedTag);

    // Format time from seconds to MM:SS
    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

    // Get unique tags from tests
    const availableTags = ["All", ...new Set(tests.map(test => test.details.tag).filter(Boolean))];
    
    return (
        <>
            {showInstruct && selectedTest && (
                <Instruction 
                    hide={hide} 
                    testData={selectedTest}
                    onStartTest={handleStartTest}
                />
            )} 
            <div className={styles.examface}>
                <div className={styles.examhead}><GiMaterialsScience size={21}/><div><b>ScoreUp</b> TEST LIBRARY</div></div>
                <div className={styles.exammain}>
                    <div className={styles.left}>
                        <div className={styles.tags}> 
                            {
                                availableTags.map((item,index)=>{
                                    return (
                                        <Tagcard 
                                            tag={item} 
                                            key={index}
                                            isSelected={selectedTag === item}
                                            onClick={() => setSelectedTag(item)}
                                        />
                                    );
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
                                {loading ? (
                                    <div className={styles.loading}>Loading tests...</div>
                                ) : error ? (
                                    <div className={styles.error}>Error: {error}</div>
                                ) : filteredTests.length === 0 ? (
                                    <div className={styles.noTests}>No tests found</div>
                                ) : (
                                    filteredTests.map((item,index)=>{
                                        const testInfo = {
                                            ...item.details,
                                            time: formatTime(item.details.time),
                                            title: item.details.title || 'Untitled Test',
                                            teachername: item.details.teacherName || 'Unknown Teacher',
                                            attempted: item.details.attempted || 0
                                        };
                                        return (
                                            <div key={index} onClick={() => handleTestClick(item)} style={{ cursor: 'pointer' }}>
                                                <List info={testInfo} />
                                            </div>
                                        );
                                    })
                                )}
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