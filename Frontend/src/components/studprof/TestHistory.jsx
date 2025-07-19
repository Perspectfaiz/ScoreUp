import { useEffect, useState } from 'react';
import styles from '../Studentprofile.module.css';
import { useNavigate } from 'react-router-dom';

export default function TestHistory({ testHistory , studentId}) {
   const [history, setHistory] = useState(null);
   const navigate=useNavigate();

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
      return (
        <div className={styles.historyCard}>
          <div className={styles.historyHeader}>Test History</div>
          <div className={styles.noDataContainer}>
            <svg className={styles.noDataIcon} width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="8" y="12" width="40" height="32" rx="6" fill="#f3f0fa" stroke="#703ed1" strokeWidth="2"/>
              <rect x="16" y="20" width="24" height="4" rx="2" fill="#e0d7fa"/>
              <rect x="16" y="28" width="16" height="4" rx="2" fill="#e0d7fa"/>
              <rect x="16" y="36" width="12" height="4" rx="2" fill="#e0d7fa"/>
            </svg>
            <div className={styles.noDataText}>No test history found</div>
            <div className={styles.noDataSubtext}>Start attempting tests to see your progress here!</div>
          </div>
        </div>
      );
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
                     <td>{test.title}</td>
                     <td>{new Date(Number(test.date)).toLocaleDateString('en-GB')}</td>
                     <td>{test.score}</td>
                     <td>{test.status}</td>
                     <td><button className={styles.viewBtn} onClick={()=>{
                        console.log("test",test._id, " Student" ,studentId);
                        navigate('/student-review', {state: {
                           testId: test._id,
                           studentId: studentId
                        }})
                     }}>View</button></td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
   );
}

