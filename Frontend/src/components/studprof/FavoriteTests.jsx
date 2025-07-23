

import styles from '../Studentprofile.module.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function FavoriteTests({ favoriteTestsData }) {
   const [testDetails, setTestDetails] = useState([]);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const fetchTestDetails = async () => {
         if (!favoriteTestsData || favoriteTestsData.length === 0) {
            setTestDetails([]);
            setLoading(false);
            return;
         }
         try {
            const { data } = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/tests/bulk-details`, {
               testIds: favoriteTestsData
            });
            if (data.success) {
               setTestDetails(data.tests);
            } else {
               setTestDetails([]);
            }
         } catch (error) {
            console.error("Error fetching favorite tests:", error);
            setTestDetails([]);
         } finally {
            setLoading(false);
         }
      };

      fetchTestDetails();
   }, [favoriteTestsData]);

   return (
      <div className={styles.favoriteTestsCard}>
         <div className={styles.favoriteTestsHeader}>Favorite Tests</div>
         <div className={styles.favoriteTestsList}>
            {loading ? (
               <div className={styles.loading}>Loading favorite tests...</div>
            ) : testDetails.length === 0 ? (
               <div className={styles.noDataContainer}>
                 <svg className={styles.noDataIcon} width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <circle cx="28" cy="28" r="20" fill="#f3f0fa" stroke="#703ed1" strokeWidth="2"/>
                   <path d="M28 18L28 34" stroke="#703ed1" strokeWidth="2" strokeLinecap="round"/>
                   <path d="M22 28L28 34L34 28" stroke="#703ed1" strokeWidth="2" strokeLinecap="round"/>
                 </svg>
                 <div className={styles.noDataText}>No favorite tests found</div>
                 <div className={styles.noDataSubtext}>Mark tests as favorite to see them here!</div>
               </div>
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
      </div>
   );
}
