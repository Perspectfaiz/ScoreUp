// import styles from '../Studentprofile.module.css';

// export default function TestHistory({ testHistory }) {
//     return (
//         <div className={styles.historyCard}>
//             <div className={styles.historyHeader}>Test History</div>
//             <table className={styles.historyTable}>
//                 <thead>
//                     <tr>
//                         <th>Test Name</th>
//                         <th>Date</th>
//                         <th>Score</th>
//                         <th>Status</th>
//                         <th>Action</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {testHistory.map((test, idx) => (
//                         <tr key={idx}>
//                             <td>{test.name}</td>
//                             <td>{test.date}</td>
//                             <td>{test.score}</td>
//                             <td>{test.status}</td>
//                             <td><button className={styles.viewBtn}>View</button></td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// } 

import { useEffect, useState } from 'react';
import styles from '../Studentprofile.module.css';

export default function TestHistory({ testHistory }) {
   const [history, setHistory] = useState(null);

   useEffect(() => {
      // Update only when testHistory is defined (even if empty)
      if (testHistory !== undefined) {
         setHistory(testHistory);
      }
   }, [testHistory]);

   if (history === null) {
      return <div className={styles.loading}>Loading test history...</div>;
   }

   if (history.length === 0) {
      return <div className={styles.noHistory}>No tests attempted yet.</div>;
   }

   return (
      <div className={styles.historyCard}>
         <div className={styles.historyHeader}>Test History</div>
         <table className={styles.historyTable}>
            <thead>
               <tr>
                  <th>Test Name</th>
                  <th>Date</th>
                  <th>Score</th>
                  <th>Status</th>
                  <th>Action</th>
               </tr>
            </thead>
            <tbody>
               {history.map((test, idx) => (
                  <tr key={idx}>
                     <td>{test.name}</td>
                     <td>{test.date}</td>
                     <td>{test.score}</td>
                     <td>{test.status}</td>
                     <td><button className={styles.viewBtn}>View</button></td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
   );
}
