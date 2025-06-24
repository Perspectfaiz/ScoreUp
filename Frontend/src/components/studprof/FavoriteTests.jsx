import styles from '../Studentprofile.module.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function FavoriteTests({ favoriteTestsData }) {
    const [testDetails, setTestDetails] = useState([]);

    useEffect(() => {
        const fetchTestDetails = async () => {
            if (!favoriteTestsData || favoriteTestsData.length === 0) {
                setTestDetails([]);
                return;
            }
            try {
                const { data } = await axios.post('http://localhost:8080/api/tests/bulk-details', {
                    testIds: favoriteTestsData
                });
                if (data.success) {
                    setTestDetails(data.tests);
                } else {
                    setTestDetails([]);
                }
            } catch (error) {
                setTestDetails([]);
            }
        };
        fetchTestDetails();
    }, [favoriteTestsData]);

    return (
        <>
            <div className={styles.favoriteTestsHeader}>Favorite Tests</div>
            <div className={styles.favoriteTestsList}>
                {testDetails.length === 0 ? (
                    <div>No favorite tests found.</div>
                ) : (
                    testDetails.map((test, idx) => (
                        <div key={test._id || idx} className={styles.favoriteTestsItem}>
                            <span className={styles.testName}>Test ID: {test.test_id}</span>
                            <span className={styles.testSubject}>Teacher: {test.teacher_id}</span>
                            {/* <span className={styles.testSubject}>
                                Sections: {test.section && test.section.map(sec => sec.subName).join(', ')}
                            </span> */}
                        </div>
                    ))
                )}
            </div>
        </>
    );
} 