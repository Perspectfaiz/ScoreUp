// import styles from './Teacherprofile.module.css';
// import { FaEdit, FaUniversity, FaLinkedin, FaUserGraduate } from 'react-icons/fa';
// import { IoLocationSharp } from 'react-icons/io5';
// import { Navbar } from './Navbar';
// import { Footer } from './footer';
// import { IoIosAdd } from "react-icons/io";
// import { IoIosArrowBack } from "react-icons/io";
// import { FaPen } from "react-icons/fa";
// import { useState, useRef, useEffect, useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { AppContext } from '../Context/AppContext';
// import axios from 'axios';

// export function Teacherprofile() {

//    const {teacherData} = useContext(AppContext);
//    useEffect(() => {
//       console.log("yessir",teacherData);
//    }, [teacherData]);
   
//    const student = {
//       name: "Akash",
//       tag: "JEE",
//       bio: "Aik Mode On!",
//       location: "INDIA",
//       institute: "NIT Warangal",
//       linkedin: "akashchronicle",
//       roll: "13",
//       solved: 6,
//       total: 1000,
//       rank: 0,
//       beats: 0,
//       attempting: 5,
//       lastTest: {
//          name: "Science Mock Test 2",
//          score: 88,
//          date: "2024-06-09",
//          percentile: null
//       },
//       tests: [
//          { name: "JEE Main Mock 1", date: "2024-06-01", score: 85 },
//          { name: "Math Mock Test 1", date: "2024-06-01", score: 78 },
//          { name: "Science Mock Test 1", date: "2024-06-03", score: 85 },
//          { name: "English Mock Test 1", date: "2024-06-05", score: 90 },
//          { name: "Math Mock Test 2", date: "2024-06-07", score: 82 }
//       ]
//    };


//    const [isDetailsVisible, setIsDetailsVisible] = useState(true);
//    const fileInputRef = useRef();  
//    const handleImageChange = (e) => {
//         setImage(e.target.files[0]);
//     }; 
//     const navigate = useNavigate();
//     const [teacher, setTeacher] = useState(null);

//     useEffect(() => {
//         const fetchTeacherprofile = async() => {
//             const itoken = localStorage.getItem('itoken');
//             if(!itoken) return;

//             try{
//                 const { data } = await axios.get('http://localhost:8080/api/teacher/get-profile-data', {
//                     headers: { itoken }
//                 });
//                 if (data.success && data.data) {
//                     setTeacher(data.data);
//                 }
//                 else{
//                     console.log(data.success, data.data);
//                 }
//             } catch(err) {
//                 console.log("Failed to fetch Teacher Profile: ", err);
//             }
//         };

//         fetchTeacherprofile();
//     }, []);

//     const [teacherName, setTeacherName] = useState('Name not set');
//     const [teacherField, setTeacherField] = useState('Not Specified');

//     useEffect(() => {
//         if(teacher && teacher.name) setTeacherName(teacher.name);
//         if(teacher && teacher.field) setTeacherField(teacher.field)

//     }, [teacher]);

//     const [teacherTests, setTeacherTests] = useState([]);

//     useEffect(() => {
//       const fetchTeacherTests =  async() => {
//         const itoken = localStorage.getItem('itoken');
//          if(!itoken || !teacher) return;
//          try{
//             const { data } = await axios.get('http://localhost:8080/api/tests/my-tests', {
//                headers: {itoken}
//             });
//             if(data.success && data.tests) {
//                console.log("Teacher Tests: ", data);
//                setTeacherTests(data.tests);
//             }
//             else{
//                console.log("Full response: ", data);
//             }

//          } catch(err) {
//             console.log("Failed to fetch Teacher Tests: ", err);
//          }
//       }

//       fetchTeacherTests();
//     }, [teacher]);
   
   

   

//    return (
//     <>
//     { isDetailsVisible && <>
//       <Navbar></Navbar>
//       <div className={styles.container}>
//          <div className={styles.sidebar}>
//             <div className={styles.sidebarbox}>
//                 <img src="https://i.imgur.com/Cw8g8Xx.png" className={styles.avatar} alt="Avatar" />
//                 <h2>{teacherName} <span className={styles.tag}>{teacherField}</span></h2>
//                 <p className={styles.bio}>{student.bio}</p>
//                 <p>{student.location}</p>
//                 <p>{student.institute}</p>
//                 <p>{student.linkedin}</p>
//                 <p>{student.roll}</p>
//                 <button className={styles.editBtn} onClick={() => {setIsDetailsVisible(false)}}> Edit Profile</button>
//             </div>
//             {/* <div className={styles.favoriteTests}>
//                <h4>Favorite Tests</h4>
//                <p>No favorite tests found.</p>
//             </div> */}
//          </div>

//          <div className={styles.dashboard}>
//             <div className={styles.testInfo}>
//                 <div className={styles.countTest}>
//                     <div className={styles.box}>
//                         <div className={styles.head}>Total Tests Contributed</div>
//                         <div className={styles.count}>{teacherTests.length<10? `0${teacherTests.length}`:teacherTests.length}</div>
//                     </div>
//                 </div>                
//                 <div className={styles.addTest}>
//                     <div className={styles.box}>
//                         <button className={styles.addTestBtn} onClick={()=>navigate('/upload-test')}>
//                             <IoIosAdd className={styles.pluslogo}/> Create Test
//                         </button>
//                     </div>
//                 </div>
//             </div>
            

//             <div className={styles.testHistory}>
//                <h4>Tests Uploaded</h4>
//                <table>
//                   <thead>
//                      <tr>
//                         <th>Test Name</th>
//                         <th>Stream/Tag</th>
//                         <th>Duration</th>
//                         <th>Total Marks</th>
//                         <th>Action</th>
//                      </tr>
//                   </thead>
//                   <tbody>
//                      {teacherTests.map((test, index) => (
//                         <tr key={index}>
//                            <td>{test.details.title}</td>
//                            <td>{test.details.stream} / {test.details.tag}</td>
//                            <td>{test.details.time / 60} minutes</td>
//                            <td>Completed</td>
//                            <td><button className={styles.viewBtn}>View</button></td>
//                         </tr>
//                      ))}
//                   </tbody>
//                </table>
//             </div>
//          </div>
//       </div>
//       <Footer></Footer>
//       </>}
//     {!isDetailsVisible && <>
//       <div className={styles.profileWrapper}>
//          <button className={styles.backButton} onClick={() => {setIsDetailsVisible(true)}}>
//             <IoIosArrowBack />
//             <span>Back</span>
//          </button>

//          <h2 className={styles.editTitle}>Edit Profile</h2>

//          <div className={styles.profileSection}>
//             <div className={styles.imageSection}>
//                <div className={styles.imageContainer}>
//                   <img
//                      src="https://via.placeholder.com/150"
//                      alt="Profile"
//                      className={styles.profilePic}
//                   />
//                   <input
//                       type="file"
//                       accept="image/*"
//                       style={{ display: 'none' }}
//                       ref={fileInputRef}
//                       onChange={handleImageChange}
//                     />
//                   <div className={styles.editIcon} onClick={() => fileInputRef.current.click()}><FaPen /></div>
//                </div>
//                <label className={styles.descLabel}>Description</label>
//                <textarea
//                   className={styles.descriptionBox}
//                   placeholder="Tell us something about yourself"
//                />
//             </div>

//             <form className={styles.formSection}>
//                <div className={styles.inputPair}>
//                   <div>
//                      <label>Name</label>
//                      <input type="text" placeholder="Name" />
//                   </div>
//                   <div>
//                      <label>Gender</label>
//                      <select>
//                         <option>Select</option>
//                         <option>Male</option>
//                         <option>Female</option>
//                         <option>Other</option>
//                      </select>
//                   </div>
//                </div>

//                <div className={styles.inputPair}>
//                   <div>
//                      <label>Address</label>
//                      <input type="text" placeholder="Address" />
//                   </div>
//                   <div>
//                      <label>Date of Birth</label>
//                      <input type="date" placeholder="2003-05-23"/>
//                   </div>
//                </div>

//                <div className={styles.inputPair}>
//                   <div>
//                      <label>Username</label>
//                      <input type="text" placeholder="Username" />
//                   </div>
//                   <div>
//                      <label>Email</label>
//                      <input type="email" placeholder="Email" />
//                   </div>
//                </div>

//                <div className={styles.inputPair}>
//                   <div>
//                      <label>Mobile Number</label>
//                      <input type="text" placeholder="Mobile Number" />
//                   </div>
//                   <div>
//                      <label>Field</label>
//                      <input type="text" placeholder="Field" />
//                   </div>
//                </div>

//                <button type="submit" className={styles.saveBtn}>Save Changes</button>
//             </form>
//          </div>
//       </div>
//       </>}
//     </>
//    );
// }


// ...same imports
import styles from './Teacherprofile.module.css';
import { FaEdit, FaUniversity, FaLinkedin, FaUserGraduate } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';
import { Navbar } from './Navbar';
import { Footer } from './footer';
import { IoIosAdd, IoIosArrowBack } from "react-icons/io";
import { FaPen } from "react-icons/fa";
import { useState, useRef, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';
import axios from 'axios';

export function Teacherprofile() {
   const { teacherData, updateTeacherProfile } = useContext(AppContext);
   const navigate = useNavigate();

   const [isDetailsVisible, setIsDetailsVisible] = useState(true);
   const fileInputRef = useRef();
   const [image, setImage] = useState(null);
   const [teacher, setTeacher] = useState(null);
   const [teacherTests, setTeacherTests] = useState([]);

   // Form states
   const [form, setForm] = useState({
      name: '',
      gender: '',
      address: '',
      dob: '',
      username: '',
      email: '',
      phone: '',
      field: '',
      description: ''
   });

   // Fetch profile data
   useEffect(() => {
      const fetchTeacherprofile = async () => {
         const itoken = localStorage.getItem('itoken');
         if (!itoken) return;

         try {
            const { data } = await axios.get('http://localhost:8080/api/teacher/get-profile-data', {
               headers: { itoken }
            });
            if (data.success && data.data) {
               setTeacher(data.data);
               setForm({
                  name: data.data.name || '',
                  gender: data.data.gender || '',
                  address: data.data.address || '',
                  dob: data.data.dob ? data.data.dob.slice(0, 10) : '',
                  username: data.data.username || '',
                  email: data.data.email || '',
                  phone: data.data.phone || '',
                  field: data.data.field || '',
                  description: data.data.description || ''
               });
            }
         } catch (err) {
            console.log("Failed to fetch Teacher Profile: ", err);
         }
      };

      fetchTeacherprofile();
   }, []);

   // Fetch teacher tests
   useEffect(() => {
      const fetchTeacherTests = async () => {
         const itoken = localStorage.getItem('itoken');
         if (!itoken || !teacher) return;
         try {
            const { data } = await axios.get('http://localhost:8080/api/tests/my-tests', {
               headers: { itoken }
            });
            if (data.success && data.tests) {
               setTeacherTests(data.tests);
            }
         } catch (err) {
            console.log("Failed to fetch Teacher Tests: ", err);
         }
      };

      fetchTeacherTests();
   }, [teacher]);

   // Image change
   const handleImageChange = (e) => {
      setImage(e.target.files[0]);
   };

   // Input change
   const handleInputChange = (e) => {
      const { name, value } = e.target;
      setForm(prev => ({ ...prev, [name]: value }));
   };

   // handleSubmit logic
   const handleSubmit = async (e) => {
      e.preventDefault();
      const formData = new FormData();
      const itoken = localStorage.getItem('itoken');

      if (!itoken) return alert("Login again");

      formData.append('teacherId', teacherData._id);
      Object.entries(form).forEach(([key, value]) => {
         formData.append(key, value);
      });

      if (image) {
         formData.append("image", image);
      }

      await updateTeacherProfile(formData);
      setIsDetailsVisible(true);
   };

   return (
      <>
         {isDetailsVisible && (
            <>
               <Navbar />
               <div className={styles.container}>
                  <div className={styles.sidebar}>
                     <div className={styles.sidebarbox}>
                        <img src="https://i.imgur.com/Cw8g8Xx.png" className={styles.avatar} alt="Avatar" />
                        <h2>{form.name} <span className={styles.tag}>{form.field}</span></h2>
                        <p>{form.description}</p>
                        <p>{form.address}</p>
                        <p>{form.email}</p>
                        <p>{form.phone}</p>
                        <button className={styles.editBtn} onClick={() => setIsDetailsVisible(false)}> Edit Profile</button>
                     </div>
                  </div>

                  <div className={styles.dashboard}>
                     <div className={styles.testInfo}>
                        <div className={styles.countTest}>
                           <div className={styles.box}>
                              <div className={styles.head}>Total Tests Contributed</div>
                              <div className={styles.count}>{teacherTests.length < 10 ? `0${teacherTests.length}` : teacherTests.length}</div>
                           </div>
                        </div>
                        <div className={styles.addTest}>
                           <div className={styles.box}>
                              <button className={styles.addTestBtn} onClick={() => navigate('/upload-test')}>
                                 <IoIosAdd className={styles.pluslogo} /> Create Test
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
               <Footer />
            </>
         )}

         {!isDetailsVisible && (
            <div className={styles.profileWrapper}>
               <button className={styles.backButton} onClick={() => setIsDetailsVisible(true)}>
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
                        <div className={styles.editIcon} onClick={() => fileInputRef.current.click()}>
                           <FaPen />
                        </div>
                     </div>
                     <label className={styles.descLabel}>Description</label>
                     <textarea
                        className={styles.descriptionBox}
                        name="description"
                        value={form.description}
                        onChange={handleInputChange}
                        placeholder="Tell us something about yourself"
                     />
                  </div>

                  <form className={styles.formSection} onSubmit={handleSubmit}>
                     <div className={styles.inputPair}>
                        <div>
                           <label>Name</label>
                           <input name="name" value={form.name} onChange={handleInputChange} type="text" placeholder="Name" />
                        </div>
                        <div>
                           <label>Gender</label>
                           <select name="gender" value={form.gender} onChange={handleInputChange}>
                              <option>Select</option>
                              <option>Male</option>
                              <option>Female</option>
                              <option>Other</option>
                           </select>
                        </div>
                     </div>

                     <div className={styles.inputPair}>
                        <div>
                           <label>Address</label>
                           <input name="address" value={form.address} onChange={handleInputChange} type="text" placeholder="Address" />
                        </div>
                        <div>
                           <label>Date of Birth</label>
                           <input name="dob" value={form.dob} onChange={handleInputChange} type="date" />
                        </div>
                     </div>

                     <div className={styles.inputPair}>
                        <div>
                           <label>Username</label>
                           <input name="username" value={form.username} onChange={handleInputChange} type="text" placeholder="Username" />
                        </div>
                        <div>
                           <label>Email</label>
                           <input name="email" value={form.email} onChange={handleInputChange} type="email" placeholder="Email" />
                        </div>
                     </div>

                     <div className={styles.inputPair}>
                        <div>
                           <label>Phone Number</label>
                           <input name="phone" value={form.phone} onChange={handleInputChange} type="text" placeholder="Phone Number" />
                        </div>
                        <div>
                           <label>Field</label>
                           <input name="field" value={form.field} onChange={handleInputChange} type="text" placeholder="Field" />
                        </div>
                     </div>

                     <button type="submit" className={styles.saveBtn} >Save Changes</button>
                  </form>
               </div>
            </div>
         )}
      </>
   );
}
