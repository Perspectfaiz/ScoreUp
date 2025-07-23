

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
      return (
        <div className={styles.chartCard}>
          <div className={styles.chartHeader}>Performance Over Time</div>
          <div className={styles.noDataContainer}>
            <svg className={styles.noDataIcon} width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="8" y="12" width="40" height="32" rx="6" fill="#f3f0fa" stroke="#703ed1" strokeWidth="2"/>
              <path d="M16 36C20 28 36 28 40 36" stroke="#703ed1" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="16" cy="36" r="2" fill="#703ed1"/>
              <circle cx="40" cy="36" r="2" fill="#703ed1"/>
            </svg>
            <div className={styles.noDataText}>No performance data found</div>
            <div className={styles.noDataSubtext}>Your performance chart will appear here after you attempt some tests.</div>
          </div>
        </div>
      );
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
