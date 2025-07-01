import styles from './Teacherprofile.module.css';
import { FaEdit, FaUniversity, FaLinkedin, FaUserGraduate } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';
import { Navbar } from './Navbar';
import { Footer } from './footer';
import { IoIosAdd } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { FaPen } from "react-icons/fa";
import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export function Teacherprofile() {
   
   const student = {
      name: "Akash",
      tag: "JEE",
      bio: "Aik Mode On!",
      location: "INDIA",
      institute: "NIT Warangal",
      linkedin: "akashchronicle",
      roll: "13",
      solved: 6,
      total: 1000,
      rank: 0,
      beats: 0,
      attempting: 5,
      lastTest: {
         name: "Science Mock Test 2",
         score: 88,
         date: "2024-06-09",
         percentile: null
      },
      tests: [
         { name: "JEE Main Mock 1", date: "2024-06-01", score: 85 },
         { name: "Math Mock Test 1", date: "2024-06-01", score: 78 },
         { name: "Science Mock Test 1", date: "2024-06-03", score: 85 },
         { name: "English Mock Test 1", date: "2024-06-05", score: 90 },
         { name: "Math Mock Test 2", date: "2024-06-07", score: 82 }
      ]
   };


   const [isDetailsVisible, setIsDetailsVisible] = useState(true);
   const fileInputRef = useRef();  
   const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    }; 
    const navigate = useNavigate();
    const [teacher, setTeacher] = useState(null);

    useEffect(() => {
        const fetchTeacherprofile = async() => {
            const itoken = localStorage.getItem('itoken');
            if(!itoken) return;

            try{
                const { data } = await axios.get('http://localhost:8080/api/teacher/get-profile-data', {
                    headers: { itoken }
                });
                if (data.success && data.data) {
                    setTeacher(data.data);
                }
                else{
                    console.log(data.success, data.data);
                }
            } catch(err) {
                console.log("Failed to fetch Teacher Profile: ", err);
            }
        };

        fetchTeacherprofile();
    }, []);

    const [teacherName, setTeacherName] = useState('Name not set');
    const [teacherField, setTeacherField] = useState('Not Specified');

    useEffect(() => {
        if(teacher && teacher.name) setTeacherName(teacher.name);
        if(teacher && teacher.field) setTeacherField(teacher.field)

    }, [teacher]);

    const [teacherTests, setTeacherTests] = useState([]);

    useEffect(() => {
      const fetchTeacherTests =  async() => {
        const itoken = localStorage.getItem('itoken');
         if(!itoken || !teacher) return;
         try{
            const { data } = await axios.get('http://localhost:8080/api/tests/my-tests', {
               headers: {itoken}
            });
            if(data.success && data.tests) {
               console.log("Teacher Tests: ", data);
               setTeacherTests(data.tests);
            }
            else{
               console.log("Full response: ", data);
            }

         } catch(err) {
            console.log("Failed to fetch Teacher Tests: ", err);
         }
      }

      fetchTeacherTests();
    }, [teacher]);


   

   return (
    <>
    { isDetailsVisible && <>
      <Navbar></Navbar>
      <div className={styles.container}>
         <div className={styles.sidebar}>
            <div className={styles.sidebarbox}>
                <img src="https://i.imgur.com/Cw8g8Xx.png" className={styles.avatar} alt="Avatar" />
                <h2>{teacherName} <span className={styles.tag}>{teacherField}</span></h2>
                <p className={styles.bio}>{student.bio}</p>
                <p>{student.location}</p>
                <p>{student.institute}</p>
                <p>{student.linkedin}</p>
                <p>{student.roll}</p>
                <button className={styles.editBtn} onClick={() => {setIsDetailsVisible(false)}}> Edit Profile</button>
            </div>
            {/* <div className={styles.favoriteTests}>
               <h4>Favorite Tests</h4>
               <p>No favorite tests found.</p>
            </div> */}
         </div>

         <div className={styles.dashboard}>
            <div className={styles.testInfo}>
                <div className={styles.countTest}>
                    <div className={styles.box}>
                        <div className={styles.head}>Total Tests Contributed</div>
                        <div className={styles.count}>{teacherTests.length<10? `0${teacherTests.length}`:teacherTests.length}</div>
                    </div>
                </div>                
                <div className={styles.addTest}>
                    <div className={styles.box}>
                        <button className={styles.addTestBtn} onClick={()=>navigate('/upload-test')}>
                            <IoIosAdd className={styles.pluslogo}/> Create Test
                        </button>
                    </div>
                </div>
            </div>
            

            <div className={styles.testHistory}>
               <h4>Tests Uploaded</h4>
               <table>
                  <thead>
                     <tr>
                        <th>Test Name</th>
                        <th>Stream/Tag</th>
                        <th>Duration</th>
                        <th>Total Marks</th>
                        <th>Action</th>
                     </tr>
                  </thead>
                  <tbody>
                     {teacherTests.map((test, index) => (
                        <tr key={index}>
                           <td>{test.details.title}</td>
                           <td>{test.details.stream} / {test.details.tag}</td>
                           <td>{test.details.time / 60} minutes</td>
                           <td>Completed</td>
                           <td><button className={styles.viewBtn}>View</button></td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         </div>
      </div>
      <Footer></Footer>
      </>}
    {!isDetailsVisible && <>
      <div className={styles.profileWrapper}>
         <button className={styles.backButton} onClick={() => {setIsDetailsVisible(true)}}>
            <IoIosArrowBack />
            <span>Back</span>
         </button>

         <h2 className={styles.editTitle}>Edit Profile</h2>

         <div className={styles.profileSection}>
            <div className={styles.imageSection}>
               <div className={styles.imageContainer}>
                  <img
                     src="https://via.placeholder.com/150"
                     alt="Profile"
                     className={styles.profilePic}
                  />
                  <input
                      type="file"
                      accept="image/*"
                      style={{ display: 'none' }}
                      ref={fileInputRef}
                      onChange={handleImageChange}
                    />
                  <div className={styles.editIcon} onClick={() => fileInputRef.current.click()}><FaPen /></div>
               </div>
               <label className={styles.descLabel}>Description</label>
               <textarea
                  className={styles.descriptionBox}
                  placeholder="Tell us something about yourself"
               />
            </div>

            <form className={styles.formSection}>
               <div className={styles.inputPair}>
                  <div>
                     <label>Name</label>
                     <input type="text" placeholder="Name" />
                  </div>
                  <div>
                     <label>Gender</label>
                     <select>
                        <option>Select</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                     </select>
                  </div>
               </div>

               <div className={styles.inputPair}>
                  <div>
                     <label>Location</label>
                     <input type="text" placeholder="e.g., India" />
                  </div>
                  <div>
                     <label>Date of Birth</label>
                     <input type="text" placeholder="30/06/2025" disabled />
                  </div>
               </div>

               <div className={styles.inputPair}>
                  <div>
                     <label>Username</label>
                     <input type="text" placeholder="Username" />
                  </div>
                  <div>
                     <label>Email</label>
                     <input type="email" placeholder="Email" />
                  </div>
               </div>

               <div className={styles.inputPair}>
                  <div>
                     <label>Mobile Number</label>
                     <input type="text" placeholder="Mobile Number" />
                  </div>
                  <div>
                     <label>Stream</label>
                     <input type="text" placeholder="Stream" />
                  </div>
               </div>

               <div className={styles.inputPair}>
                  <div>
                     <label>Address</label>
                     <input type="text" placeholder="Address" />
                  </div>
                  <div>
                     <label>Class</label>
                     <select>
                        <option>6th</option>
                        <option>7th</option>
                        <option>8th</option>
                        <option>9th</option>
                     </select>
                  </div>
               </div>

               <div className={styles.singleInput}>
                  <label>University</label>
                  <input type="text" placeholder="University" />
               </div>

               <button type="submit" className={styles.saveBtn}>Save Changes</button>
            </form>
         </div>
      </div>
      </>}
    </>
   );
}
