import { Footer } from './footer'
import styles from './Studentprofile.module.css'
import { LiaEditSolid } from "react-icons/lia";
import { IoIosArrowBack } from "react-icons/io";
import { useState, useContext, useEffect } from 'react'

import 'react-circular-progressbar/dist/styles.css';
import ProgressBar from './ProgressBar';
import { Navbar } from './Navbar';
import ProfileCard from './studprof/ProfileCard';
import FavoriteTests from './studprof/FavoriteTests';
import PerformanceChart from './studprof/PerformanceChart';
import StatsSummary from './studprof/StatsSummary';
import LastTestPerformance from './studprof/LastTestPerformance';
import TestHistory from './studprof/TestHistory';
import EditProfileForm from './studprof/EditProfileForm';
import { AppContext } from '../Context/AppContext';
import { getAllTests } from '../services/testService';

// Mock data for chart and stats
const performanceData = [
  { month: 'Jan', score: 80 },
  { month: 'Feb', score: 30 },
  { month: 'Mar', score: 75 },
  { month: 'Apr', score: 35 },
  { month: 'May', score: 85 },
  { month: 'Jun', score: 92 },
];

const stats = {
  solved: 735,
  total: 1000,
  easy: 118,
  medium: 104,
  hard: 13,
  rank: 498604,
  percentile: 90.44,
  testsGiven: 5,
  totalTests: 10,
};

const lastTest = {
  name: 'JEE Main Mock 5',
  date: '2025-05-10',
  score: 92,
  percentile: 97.2,
};

const testHistory = [
  { name: 'JEE Main Mock 5', date: '2025-05-10', score: 92, status: 'Completed' },
  { name: 'JEE Main Mock 4', date: '2025-04-28', score: 88, status: 'Completed' },
  { name: 'JEE Main Mock 3', date: '2025-04-15', score: 85, status: 'Completed' },
  { name: 'JEE Main Mock 2', date: '2025-04-01', score: 80, status: 'Completed' },
  { name: 'JEE Main Mock 1', date: '2025-03-20', score: 75, status: 'Completed' },
];

const favoriteTestsData = [
    { id: 1, name: 'Physics Mock 1', subject: 'Physics', date: '2024-06-01' },
    { id: 2, name: 'Chemistry Mock 2', subject: 'Chemistry', date: '2024-06-05' },
    { id: 3, name: 'Math Mock 3', subject: 'Math', date: '2024-06-10' },
    { id: 4, name: 'JEE Advanced Mock 1', subject: 'Combined', date: '2024-06-15' },
    { id: 5, name: 'NEET Mock 1', subject: 'Biology', date: '2024-06-20' },
    { id: 6, name: 'Aptitude Test', subject: 'General', date: '2024-06-25' },
    { id: 7, name: 'Verbal Reasoning', subject: 'English', date: '2024-06-30' },
    { id: 8, name: 'NEET Mock 1', subject: 'Biology', date: '2024-06-20' },

];

// Helper to create SVG arc path
function describeArc(cx, cy, r, startAngle, endAngle) {
    const start = polarToCartesian(cx, cy, r, endAngle);
    const end = polarToCartesian(cx, cy, r, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
    return [
        "M", start.x, start.y,
        "A", r, r, 0, largeArcFlag, 0, end.x, end.y
    ].join(" ");
}
function polarToCartesian(cx, cy, r, angleInDegrees) {
    const angleInRadians = (angleInDegrees-90) * Math.PI / 180.0;
    return {
        x: cx + (r * Math.cos(angleInRadians)),
        y: cy + (r * Math.sin(angleInRadians))
    };
}

export function Studentprofile() {
    const [isDetailsVisible, setIsDetailsVisible] = useState(true);
    const [isDisable, setIsDisable] = useState(false);
    const [totalTests, setTotalTests] = useState(0);
    const { studentData, testHistory, favoriteTests, performanceData } = useContext(AppContext);

    // Fetch total number of tests on mount
    useEffect(() => {
        async function fetchTotalTests() {
            try {
                const res = await getAllTests();
                if (res && Array.isArray(res.tests)) {
                    setTotalTests(res.tests.length);
                } else if (Array.isArray(res)) {
                    setTotalTests(res.length);
                } else {
                    setTotalTests(0);
                }
            } catch (err) {
                setTotalTests(0);
            }
        }
        fetchTotalTests();
    }, []);

    // Calculate testsGiven and attempting from testHistory
    const testsGiven = Array.isArray(testHistory) ? testHistory.filter(t => t.status === 'Completed').length : 0;

    const stats = {
        solved: testHistory?.length || 0,
        total: totalTests || 0,
        easy: 0,
        medium: 0,
        hard: 0,
        rank: 0,
        percentile: 0,
        testsGiven: testsGiven,
       
        totalTests: totalTests || 0,
    };
    const lastTest = testHistory && testHistory.length > 0 ? testHistory[testHistory.length - 1] : { name: '', date: '', score: 0, percentile: 0 };
    return (
        <>
        {isDetailsVisible && (
        <div className={styles.details}>
            <>
                <Navbar/>
            </>
            <div className={styles.studprofile}>
                <div className={styles.leftPanel}>
                    <ProfileCard onEdit={() => setIsDetailsVisible(false)} studentData={studentData} />
                    <hr className={styles.sectionDivider} />
                    <FavoriteTests favoriteTestsData={favoriteTests} />
                </div>
                <div className={styles.mainPanel}>
                    <PerformanceChart performanceData={performanceData} />
                    <div className={styles.summaryRow}>
                        <StatsSummary stats={stats} />
                        <LastTestPerformance lastTest={lastTest} />
                    </div>
                    <TestHistory testHistory={testHistory} />
                </div>
            </div>
            {/* <Footer></Footer> */}
        </div> )}
        {!isDetailsVisible && (
            <EditProfileForm onBack={
                () => {
                    setIsDetailsVisible(true);
                    setIsDisable(false);
            }} 
                studentData={studentData} 
                isDisable={isDisable} 
                setIsDisable={setIsDisable}
            />
        )}
        </>
    )
}