// import styles from '../Studentprofile.module.css';
// import { LiaEditSolid } from "react-icons/lia";
// import { FaMapMarkerAlt, FaUniversity, FaLinkedin, FaUserGraduate } from 'react-icons/fa';

// export default function ProfileCard({ onEdit, studentData }) {
//     return (
//         <div className={styles.profileCard}>
//             <img src={studentData?.image || "/dp.jpeg"} alt="Profile" className={styles.profilePic} />
//             <div className={styles.profileInfo}>
//                 <div className={styles.nameRow}>
//                     <span className={styles.name}>{studentData?.name || 'Name not set'}</span>
//                     <span className={styles.stream}>{studentData?.stream || 'Stream not set'}</span>
//                 </div>
//                 <div className={styles.desc}>{studentData?.description || 'No description set.'}</div>
//                 <div className={styles.infoRow}><FaMapMarkerAlt /> {studentData?.location || 'Location not set'}</div>
//                 <div className={styles.infoRow}><FaUniversity /> {studentData?.university || 'University not set'}</div>
//                 <div className={styles.infoRow}><FaLinkedin /> {studentData?.linkedin || studentData?.username || 'LinkedIn/Username not set'}</div>
//                 <div className={styles.infoRow}><FaUserGraduate /> {studentData?.course || studentData?.classes || 'Course/Class not set'}</div>
//             </div>
//             <button className={styles.editBtn} onClick={onEdit}>
//                 <LiaEditSolid size={20} /> Edit Profile
//             </button>
//         </div>
//     );
// } 

import { useEffect, useState } from 'react';
import styles from '../Studentprofile.module.css';
import { LiaEditSolid } from "react-icons/lia";
import { FaMapMarkerAlt, FaUniversity, FaLinkedin, FaUserGraduate } from 'react-icons/fa';

export default function ProfileCard({ onEdit, studentData }) {
   const [profile, setProfile] = useState(null);

   useEffect(() => {
      if (studentData && studentData.name) {
         setProfile(studentData);
      }
   }, [studentData]);

   if (!profile) {
      return <div className={styles.loading}>Loading profile...</div>; // You can style this
   }

   return (
      <div className={styles.profileCard}>
         <img
            src={profile.image || "/dp.jpeg"}
            alt={`${profile.name}'s profile`}
            className={styles.profilePic}
         />
         <div className={styles.profileInfo}>
            <div className={styles.nameRow}>
               <span className={styles.name}>{profile.name}</span>
               <span className={styles.stream}>{profile.stream || 'Stream not set'}</span>
            </div>
            <div className={styles.desc}>{profile.description || 'No description set.'}</div>
            <div className={styles.infoRow}><FaMapMarkerAlt /> {profile.location || 'Location not set'}</div>
            <div className={styles.infoRow}><FaUniversity /> {profile.university || 'University not set'}</div>
            <div className={styles.infoRow}><FaLinkedin /> {profile.linkedin || profile.username || 'LinkedIn/Username not set'}</div>
            <div className={styles.infoRow}><FaUserGraduate /> {profile.course || profile.classes || 'Course/Class not set'}</div>
         </div>
         <button className={styles.editBtn} onClick={onEdit}>
            <LiaEditSolid size={20} /> Edit Profile
         </button>
      </div>
   );
}
