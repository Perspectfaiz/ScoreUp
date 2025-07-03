// import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
// import styles from '../Studentprofile.module.css';

// export default function PerformanceChart({ performanceData }) {
//     return (
//         <div className={styles.chartCard}>
//             <div className={styles.chartHeader}>Performance Over Time</div>
//             <ResponsiveContainer width="100%" height={200}>
//                 <LineChart data={performanceData} margin={{ left: 10, right: 10, top: 10, bottom: 10 }}>
//                     <CartesianGrid strokeDasharray="3 3" />
//                     <XAxis dataKey="month" />
//                     <YAxis />
//                     <Tooltip />
//                     <Line type="monotone" dataKey="score" stroke="#703ed1" strokeWidth={2} dot={{ r: 4 }} />
//                 </LineChart>
//             </ResponsiveContainer>
//         </div>
//     );
// } 

import { useEffect, useState } from 'react';
import {
   LineChart, Line, XAxis, YAxis, Tooltip,
   ResponsiveContainer, CartesianGrid
} from 'recharts';
import styles from '../Studentprofile.module.css';

export default function PerformanceChart({ performanceData }) {
   const [data, setData] = useState(null);

   useEffect(() => {
      if (performanceData && performanceData.length > 0) {
         setData(performanceData);
      }
   }, [performanceData]);

   if (!data) {
      return <div className={styles.loading}>Loading performance chart...</div>;
   }

   return (
      <div className={styles.chartCard}>
         <div className={styles.chartHeader}>Performance Over Time</div>
         <ResponsiveContainer width="100%" height={200}>
            <LineChart
               data={data}
               margin={{ left: 10, right: 10, top: 10, bottom: 10 }}
            >
               <CartesianGrid strokeDasharray="3 3" />
               <XAxis dataKey="month" />
               <YAxis />
               <Tooltip />
               <Line
                  type="monotone"
                  dataKey="score"
                  stroke="#703ed1"
                  strokeWidth={2}
                  dot={{ r: 4 }}
               />
            </LineChart>
         </ResponsiveContainer>
      </div>
   );
}
