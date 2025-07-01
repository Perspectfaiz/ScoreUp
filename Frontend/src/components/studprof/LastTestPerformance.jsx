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
      return <div className={styles.loading}>Loading last test performance...</div>;
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
