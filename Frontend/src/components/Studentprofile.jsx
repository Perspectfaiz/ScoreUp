import { Footer } from './footer'
import styles from './Studentprofile.module.css'
import { LiaEditSolid } from "react-icons/lia";
import { IoIosArrowBack } from "react-icons/io";
import { useState } from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { FaMapMarkerAlt, FaUniversity, FaLinkedin, FaUserGraduate } from 'react-icons/fa';

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
  solved: 235,
  total: 3571,
  easy: 118,
  medium: 104,
  hard: 13,
  rank: 498604,
  percentile: 90.44,
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
                            <div className={styles.desc}>Directing stories on screen, debugging code off-screen</div>
                            <div className={styles.infoRow}><FaMapMarkerAlt /> India</div>
                            <div className={styles.infoRow}><FaUniversity /> NIT Warangal</div>
                            <div className={styles.infoRow}><FaLinkedin /> akash-jha-6026062b5</div>
                            <div className={styles.infoRow}><FaUserGraduate /> C++</div>
                        </div>
                        <button className={styles.editBtn} onClick={() => setIsDetailsVisible(false)}>
                            <LiaEditSolid size={20} /> Edit Profile
                        </button>
                    </div>
                    <div className={styles.statsCard}>
                        <div className={styles.statsHeader}>Stats</div>
                        <div className={styles.statsGrid}>
                            <div>
                                <div className={styles.statsValue}>{stats.solved}/{stats.total}</div>
                                <div className={styles.statsLabel}>Solved</div>
                            </div>
                            <div>
                                <div className={styles.statsValue} style={{ color: '#00b894' }}>{stats.easy}</div>
                                <div className={styles.statsLabel}>Easy</div>
                            </div>
                            <div>
                                <div className={styles.statsValue} style={{ color: '#fdcb6e' }}>{stats.medium}</div>
                                <div className={styles.statsLabel}>Medium</div>
                            </div>
                            <div>
                                <div className={styles.statsValue} style={{ color: '#d63031' }}>{stats.hard}</div>
                                <div className={styles.statsLabel}>Hard</div>
                            </div>
                        </div>
                        <div className={styles.rankRow}>
                            <span>Rank</span>
                            <span className={styles.rankValue}>{stats.rank}</span>
                        </div>
                        <div className={styles.percentileRow}>
                            <span>Top</span>
                            <span className={styles.percentileValue}>{stats.percentile}%</span>
                        </div>
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
                    <div className={styles.lastTestCard}>
                        <div className={styles.lastTestHeader}>Last Test Performance</div>
                        <div className={styles.lastTestInfo}>
                            <div>
                                <div className={styles.lastTestLabel}>Test</div>
                                <div className={styles.lastTestValue}>{lastTest.name}</div>
                            </div>
                            <div>
                                <div className={styles.lastTestLabel}>Score</div>
                                <div className={styles.lastTestValue}>{lastTest.score}</div>
                            </div>
                            <div>
                                <div className={styles.lastTestLabel}>Percentile</div>
                                <div className={styles.lastTestValue}>{lastTest.percentile}%</div>
                            </div>
                            <div>
                                <div className={styles.lastTestLabel}>Date</div>
                                <div className={styles.lastTestValue}>{lastTest.date}</div>
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
                }}><IoIosArrowBack className={styles.iconback} size={18}/><p className={styles.txtback}>Back</p>
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
                        <textarea name="description" className={styles.dtxt}></textarea>
                    </div>
                </div>

                <div className={styles.detail}>
                <div className={styles.basic}>
                    <div className={styles.name}>
                        <p>Name</p>
                        <input type="text" className={`${styles.input} ${styles.name_input}`} placeholder="Name"/>
                    </div>
                    <div className={styles.dob}>
                        <p>Date of birth</p>
                        <input type="date" className={`${styles.input} ${styles.dob_input}`} placeholder="Date"/>
                    </div>
                    <div className={styles.username}>
                        <p>Username</p>
                        <input type="text" className={`${styles.input} ${styles.username_input}`} placeholder="Username"/>
                    </div>
                    <div className={styles.gender}>
                        <p>Gender</p>
                        <select name="Gender" id={styles.gender} className={`${styles.input} ${styles.gender_select}`}>
                            <option value="M">Male</option>
                            <option value="F">Female</option>
                            <option value="O">Others</option>
                        </select>
                    </div>
                </div>

                <div className={styles.other}>
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
                        </select>
                    </div>
                    <div className={styles.stream}>
                        <p>Stream</p>
                        <input type="text" className={`${styles.input} ${styles.stream_input}`} placeholder="Stream"/>
                    </div>
                    <div className={styles.university}>
                        <p>University</p>
                        <input type="text" className={`${styles.input} ${styles.university_input}`} placeholder="University"/>
                    </div>
                    <div className={styles.address}>
                        <p>Address</p>
                        <input type="text" className={`${styles.input} ${styles.address_input}`} placeholder="Address"/>
                    </div>
                </div>

                <div className={styles.contact}>
                    <div className={styles.phone}>
                        <p>Phone No.</p>
                        <input type="number" className={`${styles.input} ${styles.phone_input}`} placeholder="Phone No."/>
                    </div>
                    <div className={styles.email}>
                        <p>Email</p>
                        <input type="email" className={`${styles.input} ${styles.email_input}`} placeholder="Email"/>
                    </div>
                </div>

                </div>
            </div>
            <div className={styles.base}>
                <button className={styles.savebtn}>Save Changes</button>
            </div>
        </div> )}
        </>
    )
}