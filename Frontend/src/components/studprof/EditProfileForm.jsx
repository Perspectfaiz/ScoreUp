import styles from '../Studentprofile.module.css';
import { IoIosArrowBack } from "react-icons/io";
import { LiaEditSolid } from "react-icons/lia";
import { useContext, useRef, useState, useEffect } from 'react';
import { AppContext } from '../../Context/AppContext';

export default function EditProfileForm({ onBack, studentData, isDisable, setIsDisable }) {
   const { updateStudentProfile } = useContext(AppContext);
   const [form, setForm] = useState(null);
   const [image, setImage] = useState(null);
   const fileInputRef = useRef();

   // Initialize form state when studentData is available
   useEffect(() => {
      if (studentData && studentData.name) {
         setForm({
            name: studentData.name || '',
            gender: studentData.gender || '',
            location: studentData.location || '',
            dob: studentData.dob || '',
            username: studentData.username || '',
            email: studentData.email || '',
            phone: studentData.phone || '',
            address: studentData.address || '',
            stream: studentData.stream || '',
            university: studentData.university || '',
            classes: studentData.classes || '',
            description: studentData.description || '',
         });
      }
   }, [studentData]);

   const handleChange = (e) => {
      const { name, value } = e.target;
      setForm(prev => ({ ...prev, [name]: value }));
   };

   const handleImageChange = (e) => {
      setImage(e.target.files[0]);
   };

   const handleSubmit = async (e) => {
      setIsDisable(true);
      e.preventDefault();
      if (!form) return;

      const formData = new FormData();
      formData.append('studentId', studentData._id);
      Object.entries(form).forEach(([key, value]) => formData.append(key, value));
      if (image) formData.append('image', image);

      await updateStudentProfile(formData);
      onBack();
   };

   if (!form) {
      return <div className={styles.loading}>Loading profile editor...</div>;
   }

   return (
      <form className={styles.update} onSubmit={handleSubmit}>
         <div className={styles.heading}>
            <div className={styles.backbutton} onClick={onBack}>
               <IoIosArrowBack className={styles.iconback} size={28} />
               <p className={styles.txtback}>Back</p>
            </div>
            <p className={styles.editprofile}>Edit Profile</p>
         </div>
         <div className={styles.main}>
            <div className={styles.left}>
               <div className={styles.dpbox} style={{ position: 'relative' }}>
                  <div className={styles.bccolor}>
                     <img
                        src={image ? URL.createObjectURL(image) : (studentData?.image || "/pic.jpg")}
                        alt="Profile"
                        className={styles.dpimg}
                     />
                     <input
                        type="file"
                        accept="image/*"
                        style={{ display: 'none' }}
                        ref={fileInputRef}
                        onChange={handleImageChange}
                     />
                     <img
                        src="/pencil.png"
                        alt="Edit"
                        style={{
                           position: 'absolute',
                           bottom: 10,
                           right: 10,
                           width: 36,
                           height: 36,
                           background: '#fff',
                           borderRadius: '50%',
                           boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                           cursor: 'pointer',
                           border: '2px solid #eee',
                           padding: 4,
                           zIndex: 2
                        }}
                        onClick={() => fileInputRef.current.click()}
                     />
                  </div>
               </div>
               <div className={styles.description}>
                  <p>Description</p>
                  <textarea
                     name="description"
                     className={styles.dtxt}
                     placeholder="Tell us something about yourself"
                     value={form.description}
                     onChange={handleChange}
                  />
               </div>
            </div>
            <div className={styles.detail}>
               <div className={styles.basic}>
                  <div className={styles.name}>
                     <p>Name</p>
                     <input
                        type="text"
                        name="name"
                        className={`${styles.input} ${styles.name_input}`}
                        placeholder="Name"
                        value={form.name}
                        onChange={handleChange}
                     />
                  </div>
                  <div className={styles.gender}>
                     <p>Gender</p>
                     <select
                        name="gender"
                        id={styles.gender}
                        className={`${styles.input} ${styles.gender_select}`}
                        value={form.gender}
                        onChange={handleChange}
                     >
                        <option value="">Select</option>
                        <option value="M">Male</option>
                        <option value="F">Female</option>
                        <option value="O">Others</option>
                     </select>
                  </div>
                  <div className={styles.location}>
                     <p>Location</p>
                     <input
                        type="text"
                        name="location"
                        className={`${styles.input} ${styles.location_input}`}
                        placeholder="e.g., India"
                        value={form.location}
                        onChange={handleChange}
                     />
                  </div>
                  <div className={styles.dob}>
                     <p>Date of Birth</p>
                     <input
                        type="date"
                        name="dob"
                        className={`${styles.input} ${styles.dob_input}`}
                        value={form.dob}
                        onChange={handleChange}
                     />
                  </div>
                  <div className={styles.username}>
                     <p>Username</p>
                     <input
                        type="text"
                        name="username"
                        className={`${styles.input} ${styles.username_input}`}
                        placeholder="Username"
                        value={form.username}
                        onChange={handleChange}
                     />
                  </div>
                  <div className={styles.email}>
                     <p>Email</p>
                     <input
                        type="email"
                        name="email"
                        className={`${styles.input} ${styles.email_input}`}
                        placeholder="Email"
                        value={form.email}
                        onChange={handleChange}
                     />
                  </div>
                  <div className={styles.phone}>
                     <p>Mobile Number</p>
                     <input
                        type="text"
                        name="phone"
                        className={`${styles.input} ${styles.phone_input}`}
                        placeholder="Mobile Number"
                        value={form.phone}
                        onChange={handleChange}
                     />
                  </div>
               </div>
               <div className={styles.other}>
                  <div className={styles.address}>
                     <p>Address</p>
                     <input
                        type="text"
                        name="address"
                        className={`${styles.input} ${styles.address_input}`}
                        placeholder="Address"
                        value={form.address}
                        onChange={handleChange}
                     />
                  </div>
                  <div className={styles.stream}>
                     <p>Stream</p>
                     <input
                        type="text"
                        name="stream"
                        className={`${styles.input} ${styles.stream_input}`}
                        placeholder="Stream"
                        value={form.stream}
                        onChange={handleChange}
                     />
                  </div>
                  <div className={styles.university}>
                     <p>University</p>
                     <input
                        type="text"
                        name="university"
                        className={`${styles.input} ${styles.university_input}`}
                        placeholder="University"
                        value={form.university}
                        onChange={handleChange}
                     />
                  </div>
                  <div className={styles.class}>
                     <p>Class</p>
                     <select
                        name="classes"
                        id={styles.class}
                        className={`${styles.input} ${styles.class_select}`}
                        value={form.classes}
                        onChange={handleChange}
                     >
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
            <button className={styles.savebtn} disabled={isDisable} type="submit">Save Changes</button>
         </div>
      </form>
   );
}
