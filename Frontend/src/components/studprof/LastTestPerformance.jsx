// import styles from '../Studentprofile.module.css';

// export default function LastTestPerformance({ lastTest }) {
//     return (
//         <div className={styles.lastTestCard}>
//             <div className={styles.lastTestHeader}>Last Test Performance</div>
//             <div className={styles.lastTestInfo}>
//                 <div>
//                     <div className={styles.lastTestLabel}>Test</div>
//                     <div className={styles.lastTestValue}>{lastTest.name}</div>
//                 </div>
//                 <div className={styles.rightAlignedInfo}>
//                     <div className={styles.lastTestLabel}>Score</div>
//                     <div className={styles.lastTestValue}>{lastTest.score}</div>
//                 </div>
//                 <div>
//                     <div className={styles.lastTestLabel}>Percentile</div>
//                     <div className={styles.lastTestValue}>{lastTest.percentile}%</div>
//                 </div>
//                 <div className={styles.rightAlignedInfo}>
//                     <div className={styles.lastTestLabel}>Date</div>
//                     <div className={styles.lastTestValue}>{lastTest.date}</div>
//                 </div>
//             </div>
//         </div>
//     );
// } 

import { useEffect, useState } from 'react';
import styles from '../Studentprofile.module.css';

export default function LastTestPerformance({ lastTest }) {
   const [test, setTest] = useState(null);

   useEffect(() => {
      if (lastTest && lastTest.name) {
         setTest(lastTest);
      }
   }, [lastTest]);

   if (!test) {
      return (
        <div className={styles.lastTestCard}>
          <div className={styles.lastTestHeader}>Last Test Performance</div>
          <div className={styles.noDataContainer}>
            <svg className={styles.noDataIcon} width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="8" y="12" width="40" height="32" rx="6" fill="#f3f0fa" stroke="#703ed1" strokeWidth="2"/>
              <path d="M16 36L28 24L40 36" stroke="#703ed1" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="28" cy="24" r="2" fill="#703ed1"/>
            </svg>
            <div className={styles.noDataText}>No last test performance found</div>
            <div className={styles.noDataSubtext}>Your last test performance will be shown here after you attempt a test.</div>
          </div>
        </div>
      );
   }

   return (
      <div className={styles.lastTestCard}>
         <div className={styles.lastTestHeader}>Last Test Performance</div>
         <div className={styles.lastTestInfo}>
            <div>
               <div className={styles.lastTestLabel}>Test</div>
               <div className={styles.lastTestValue}>{test.name}</div>
            </div>
            <div className={styles.rightAlignedInfo}>
               <div className={styles.lastTestLabel}>Score</div>
               <div className={styles.lastTestValue}>{test.score}</div>
            </div>
            <div>
               <div className={styles.lastTestLabel}>Percentile</div>
               <div className={styles.lastTestValue}>{test.percentile}%</div>
            </div>
            <div className={styles.rightAlignedInfo}>
               <div className={styles.lastTestLabel}>Date</div>
               <div className={styles.lastTestValue}>{test.date}</div>
            </div>
         </div>
      </div>
   );
}
