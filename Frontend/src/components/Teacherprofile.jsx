import styles from './Teacherprofile.module.css';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { IoIosAdd, IoIosArrowBack } from "react-icons/io";
import { FaPen } from "react-icons/fa";
import { useState, useRef, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';
import { LiaEditSolid } from "react-icons/lia";
import axios from 'axios';
import { useLocation } from 'react-router-dom';

export function Teacherprofile() {
   const { teacherData, updateTeacherProfile } = useContext(AppContext);
   const navigate = useNavigate();
   const location = useLocation();

   const [isDetailsVisible, setIsDetailsVisible] = useState(true);
   const [isDisable, setIsDisable] = useState(false);
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
      description: '',
      image: ''
   });

   // Fetch profile data
         const fetchTeacherprofile = async () => {
         const itoken = localStorage.getItem('itoken');
         if (!itoken) return;

         try {
            const { data } = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/teacher/get-profile-data`, {
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
                  description: data.data.description || '',
                  image: data.data.image || ''
               });
            }
         } catch (err) {
            console.log("Failed to fetch Teacher Profile: ", err);
         }
      };
   useEffect(() => {
      fetchTeacherprofile();
   }, []);

   // Fetch teacher tests

      const fetchTeacherTests = async () => {
         const itoken = localStorage.getItem('itoken');
         if (!itoken || !teacher) return;
         try {
            const { data } = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/tests/my-tests`, {
               headers: { itoken }
            });
            if (data.success && data.tests) {
               setTeacherTests(data.tests);
            }
         } catch (err) {
            console.log("Failed to fetch Teacher Tests: ", err);
         }
      };

   useEffect(() => {
      fetchTeacherTests();
   }, [teacher]);

   useEffect(() => {
      if(location.state?.refreshTests) {
         fetchTeacherTests();
         window.history.replaceState({}, document.title);
      }
   }, [location.state])

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
      setIsDisable(true);
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
      fetchTeacherprofile();
      setIsDisable(false);
   };

   // console.log(data.data);

   return (
      <>
         {isDetailsVisible && (
            <>
               <Navbar />
               <div className={styles.container}>
                  <div className={styles.sidebar}>
                     <div className={styles.sidebarbox}>
                        <img 
                           src={form.image || "/pic.jpg"}
                           className={styles.avatar} alt="Avatar" />
                        <h2>{form.name} <span className={styles.tag}>{form.field}</span></h2>
                        <p>{form.description}</p>
                        <p>{form.address}</p>
                        <p>{form.email}</p>
                        <p>{form.phone}</p>
                        <button className={styles.editBtn} onClick={() => setIsDetailsVisible(false)}>
                           <LiaEditSolid className={styles.editicon}/> Edit Profile
                        </button>
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
                              {[...teacherTests].reverse().map((test, index) => (
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
               <div className={styles.edittop}>
                  <div className={styles.backbutton} onClick={() => {setIsDetailsVisible(true)}}>
                     <IoIosArrowBack className={styles.iconback} size={28} />
                     <p className={styles.txtback}>Back</p>
                  </div>

                  <div className={styles.edittitlecontainer}>
                     <h2 className={styles.editTitle}>Edit Profile</h2>    
                  </div>              
               </div>


               <div className={styles.profileSection}>
                  <div className={styles.imageSection}>
                     <div className={styles.imageContainer}>
                        <img
                           src={image ? URL.createObjectURL(image) : (form?.image || "/pic.jpg")}
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

                     <button type="submit" className={styles.saveBtn} disabled={isDisable}>Save Changes</button>
                  </form>
               </div>
            </div>
         )}
      </>
   );
}
