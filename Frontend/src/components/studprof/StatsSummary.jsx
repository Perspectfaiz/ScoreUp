
import { useEffect, useState } from 'react';
import ProgressBar from '../ProgressBar';
import styles from '../Studentprofile.module.css';

export default function StatsSummary({ stats }) {
   const [summary, setSummary] = useState(null);

   useEffect(() => {
      if (stats && stats.total !== undefined) {
         setSummary(stats);
      }
   }, [stats]);

   if (!summary) {
      return <div className={styles.loading}>Loading performance stats...</div>;
   }

   return (
      <div className={styles.statsCard}>
         <ProgressBar
            solved={summary.solved}
            total={summary.total}
            
            rank={summary.rank}
            percentile={summary.percentile}
            testsGiven={summary.testsGiven}
            totalTests={summary.totalTests}
         />
      </div>
   );
}
