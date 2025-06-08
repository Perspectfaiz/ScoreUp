import { Footer } from './footer'
import styles from './Studentprofile.module.css'
import { LiaEditSolid } from "react-icons/lia";
import { IoIosArrowBack } from "react-icons/io";
import { useState } from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { FaMapMarkerAlt, FaUniversity, FaLinkedin, FaUserGraduate } from 'react-icons/fa';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ProgressBar from './ProgressBar';
import { Navbar } from './Navbar';
// Mock data for chart and stats
const performanceData = [
  { month: 'Jan', score: 80 },
  { month: 'Feb', score: 90 },
  { month: 'Mar', score: 75 },
  { month: 'Apr', score: 95 },
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

    return (
        <>
        {isDetailsVisible && (
        <div className={styles.details}>
            <div className={styles.studprofile}>
                <div className={styles.leftPanel}>
                    <div className={styles.profileCard}>
                        <img src="/dp.jpeg" alt="Profile" className={styles.profilePic} />
                        <div className={styles.profileInfo}>
                            <div className={styles.nameRow}>
                                <span className={styles.name}>Sameer Mishra</span>
                                <span className={styles.stream}>JEE</span>
                            </div>
                            <div className={styles.desc}>Basket Ball is my dream, but I'm coding off-screen</div>
                            <div className={styles.infoRow}><FaMapMarkerAlt /> India</div>
                            <div className={styles.infoRow}><FaUniversity /> NIT Warangal</div>
                            <div className={styles.infoRow}><FaLinkedin /> Sexy Sam</div>
                            <div className={styles.infoRow}><FaUserGraduate /> Cse Minor</div>
                        </div>
                        <button className={styles.editBtn} onClick={() => setIsDetailsVisible(false)}>
                            <LiaEditSolid size={20} /> Edit Profile
                        </button>
                    </div>
                    
                    <hr className={styles.sectionDivider} />

                    <div className={styles.favoriteTestsHeader}>Favorite Tests</div>
                    <div className={styles.favoriteTestsList}>
                        {favoriteTestsData.map((test) => (
                            <div key={test.id} className={styles.favoriteTestsItem}>
                                <span className={styles.testName}>{test.name}</span>
                                <span className={styles.testSubject}>{test.subject}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.mainPanel}>
                    <div className={styles.chartCard}>
                        <div className={styles.chartHeader}>Performance Over Time</div>
                        <ResponsiveContainer width="100%" height={200}>
                            <LineChart data={performanceData} margin={{ left: 10, right: 10, top: 10, bottom: 10 }}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="month" />
                                <YAxis />
                                <Tooltip />
                                <Line type="monotone" dataKey="score" stroke="#703ed1" strokeWidth={2} dot={{ r: 4 }} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                    <div className={styles.summaryRow}>
                        <div className={styles.statsCard}>
                            <ProgressBar
                                solved={stats.solved}
                                total={stats.total}
                                attempting={5}
                                rank={stats.rank}
                                percentile={stats.percentile}
                                testsGiven={stats.testsGiven}
                                totalTests={stats.totalTests}
                            />
                        </div>
                        <div className={styles.lastTestCard}>
                            <div className={styles.lastTestHeader}>Last Test Performance</div>
                            <div className={styles.lastTestInfo}>
                                <div>
                                    <div className={styles.lastTestLabel}>Test</div>
                                    <div className={styles.lastTestValue}>{lastTest.name}</div>
                                </div>
                                <div className={styles.rightAlignedInfo}>
                                    <div className={styles.lastTestLabel}>Score</div>
                                    <div className={styles.lastTestValue}>{lastTest.score}</div>
                                </div>
                                <div>
                                    <div className={styles.lastTestLabel}>Percentile</div>
                                    <div className={styles.lastTestValue}>{lastTest.percentile}%</div>
                                </div>
                                <div className={styles.rightAlignedInfo}>
                                    <div className={styles.lastTestLabel}>Date</div>
                                    <div className={styles.lastTestValue}>{lastTest.date}</div>
                                </div>
                            </div>
                        </div>
                    </div>
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
                                {testHistory.map((test, idx) => (
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
                </div>
            </div>
            {/* <Footer></Footer> */}
        </div> )}

        {/* /////////////////////////////////////////////////////////////////////////////// */}
        
        {!isDetailsVisible && (
        <div className={styles.update}>

            <div className={styles.heading}>
                <div className={styles.backbutton} onClick={ () => {
                    setIsDetailsVisible(!isDetailsVisible)
                }}><IoIosArrowBack className={styles.iconback} size={28}/><p className={styles.txtback}>Back</p>
                </div>
                <p className={styles.editprofile}>Edit Profile</p>
            </div>
            <div className={styles.main}>
                <div className={styles.left}>
                    <div className={styles.dpbox}>
                        <div className={styles.bccolor}>
                            <img src="/dp.jpeg" alt="imagine..." className={styles.dpimg} />
                            <button className={styles.dpbtn}><LiaEditSolid size={60}/></button>
                        </div>
                        
                    </div>
                    <div className={styles.description}>
                        <p>Description</p>
                        <textarea name="description" className={styles.dtxt} placeholder="Tell us something about yourself"></textarea>
                    </div>
                </div>

                <div className={styles.detail}>
                <div className={styles.basic}>
                    <div className={styles.name}>
                        <p>Name</p>
                        <input type="text" className={`${styles.input} ${styles.name_input}`} placeholder="Name"/>
                    </div>
                    <div className={styles.gender}>
                        <p>Gender</p>
                        <select name="Gender" id={styles.gender} className={`${styles.input} ${styles.gender_select}`}>
                            <option value="M">Male</option>
                            <option value="F">Female</option>
                            <option value="O">Others</option>
                        </select>
                    </div>
                    <div className={styles.location}>
                        <p>Location</p>
                        <input type="text" className={`${styles.input} ${styles.location_input}`} placeholder="e.g., India"/>
                    </div>
                    <div className={styles.dob}>
                        <p>Date of Birth</p>
                        <input type="date" className={`${styles.input} ${styles.dob_input}`} placeholder="Date"/>
                    </div>
                    <div className={styles.username}>
                        <p>Username</p>
                        <input type="text" className={`${styles.input} ${styles.username_input}`} placeholder="Username"/>
                    </div>
                    <div className={styles.email}>
                        <p>Email</p>
                        <input type="email" className={`${styles.input} ${styles.email_input}`} placeholder="Email"/>
                    </div>
                    <div className={styles.password}>
                        <p>Password</p>
                        <input type="password" className={`${styles.input} ${styles.password_input}`} placeholder="Password"/>
                    </div>
                    <div className={styles.phone}>
                        <p>Mobile Number</p>
                        <input type="text" className={`${styles.input} ${styles.phone_input}`} placeholder="Mobile Number"/>
                    </div>
                </div>

             

                <div className={styles.other}>
                    <div className={styles.address}>
                        <p>Address</p>
                        <input type="text" className={`${styles.input} ${styles.address_input}`} placeholder="Address"/>
                    </div>
                    <div className={styles.stream}>
                        <p>Stream</p>
                        <input type="text" className={`${styles.input} ${styles.stream_input}`} placeholder="Stream"/>
                    </div>
                    <div className={styles.university}>
                        <p>University</p>
                        <input type="text" className={`${styles.input} ${styles.university_input}`} placeholder="University"/>
                    </div>
                    <div className={styles.class}>
                        <p>Class</p>
                        <select name="Class" id={styles.class} className={`${styles.input} ${styles.class_select}`}>
                            <option value="6">6th</option>
                            <option value="7">7th</option>
                            <option value="8">8th</option>
                            <option value="9">9th</option>
                            <option value="10">10th</option>
                            <option value="11">11th</option>
                            <option value="12">12th</option>
                            <option value="13">Dropper</option>

                        </select>
                    </div>
                   
                </div>

                </div>
            </div>
            <div className={styles.base}>
                <button className={styles.savebtn}>Save Changes</button>
            </div>
        </div>
        )}
        </>
    )
}