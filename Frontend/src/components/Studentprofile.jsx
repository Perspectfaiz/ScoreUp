import { Footer } from './footer'
import styles from './Studentprofile.module.css'
import { LiaEditSolid } from "react-icons/lia";
import { IoIosArrowBack } from "react-icons/io";
import { useContext, useState,useEffect } from 'react'
import { AppContext } from '../Context/AppContext'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export function Studentprofile() {
    const [isDetailsVisible, setIsDetailsVisible] = useState(true);
    const {studentData}=useContext(AppContext);
    const [name, setName] = useState('');
    const [dob, setDob] = useState('');
    const [username, setUsername] = useState('');
    const [stream, setStream] = useState('');
    const [university, setUniversity] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');
    const [classes, setClasses] = useState('');
    const [gender, setGender] = useState('');
    useEffect(() => {
        if (studentData) {
            setName(studentData.name);
            setDob(studentData.dob);
            setUsername(studentData.username);
            setStream(studentData.stream);
            setUniversity(studentData.university);
            setAddress(studentData.address);
            setPhone(studentData.phone);
            setEmail(studentData.email);
            setDescription(studentData.description);
            setClasses(studentData.classes);
            setGender(studentData.gender);
        }
    }, [studentData]);
    const {token}=useContext(AppContext);
    console.log(username)
    const navigate = useNavigate();
    const onSubmitHandler = async(event) => {
        event.preventDefault();
        try{
            const {data}= await axios.post('http://localhost:8080/api/student/update-profile-data',{name,dob,username,stream,university,address,phone,email,description,classes}, {headers: {token}});
            console.log(data);
            if(data.success){
                toast.success(data.message);
                navigate('/studentprofile');
            }
            else{
                toast.error(data.message);
            }
        }
        catch(error) {
            console.log(error);
            toast.error(error.message);
        }
    }
    return (
        <>
        {isDetailsVisible && (
        <div className={styles.details}>
            <div className={styles.studprofile}>
                <div className={styles.left}>
                    <div className={styles.profile}>
                        <div className={styles.personal}>
                            <div className={styles.dp}>
                                <img src="../../public/dp.jpeg" alt="imagine..." className={styles.dpimg}/>
                            </div>
                            <div className={styles.txt}>
                                <p className={styles.name}>Sameer Mishra</p>
                                <p className={styles.stream}>JEE</p>
                            </div>
                        </div>
                        {/* <div className={styles.description}>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae corporis ipsam porro eaque sit quis quasi, ipsum eius asperiores vel, aperiam earum doloremque maiores ea quisquam, perspiciatis inventore beatae nihil.
                        </div> */}
                        <div className={styles.edit}>
                            <button className={styles.editbtn} onClick={() => {
                                setIsDetailsVisible(!isDetailsVisible)
                            }}>Edit Profile</button>
                        </div>
                    </div>
                    <div className={styles.fav}>
                        Fav loading...
                    </div>
                </div> 
                <div className={styles.right}>
                    <div className={styles.stats}>Stats loading...</div>
                    <div className={styles.list}>Lists loading...</div>
                </div>
                
            </div>
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
                            <img src="../../public/dp.jpeg" alt="imagine..." className={styles.dpimg} />
                            <button className={styles.dpbtn}><LiaEditSolid size={60}/></button>
                        </div>
                        
                    </div>
                    <div className={styles.description}>
                        <p>Description</p>
                        <textarea name="description" className={styles.dtxt} onChange={
                            (e) => {
                                setDescription(e.target.value)
                            }
                        }></textarea>
                    </div>
                </div>

                <div className={styles.detail}>
                <div className={styles.basic}>
                    <div className={styles.name}>
                        <p>Name</p>
                        <input type="text" className={`${styles.input} ${styles.name_input}`} value={name} onChange={
                            (e) => {
                                setName(e.target.value)
                            }
                        }/>
                    </div>
                    <div className={styles.dob}>
                        <p>Date of birth</p>
                        <input type="date" className={`${styles.input} ${styles.dob_input}`} value={dob} placeholder="Date"onChange={
                            (e) => {
                                setDob(e.target.value)
                            }
                        }/>
                    </div>
                    <div className={styles.username}>
                        <p>Username</p>
                        <input type="text" className={`${styles.input} ${styles.username_input}`} value={username} placeholder="Username" onChange={
                            (e) => {
                                setUsername(e.target.value)
                            }
                        }/>
                    </div>
                    <div className={styles.gender}>
                        <p>Gender</p>
                        <select name="Gender" id={styles.gender} className={`${styles.input} ${styles.gender_select}`} value={gender} onChange={
                            (e) => {
                                setGender(e.target.value)
                            }
                        }>
                            <option value="M">Male</option>
                            <option value="F">Female</option>
                            <option value="O">Others</option>
                        </select>
                    </div>
                </div>

                <div className={styles.other}>
                    <div className={styles.class}>
                        <p>Class</p>
                        <select name="Class" id={styles.class} className={`${styles.input} ${styles.class_select}`} value={classes} onChange={
                            (e) => {
                                setClasses(e.target.value)
                            }
                        }>
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
                        <input type="text" className={`${styles.input} ${styles.stream_input}`} placeholder="Stream" onChange={
                            (e) => {
                                setStream(e.target.value)
                            }
                        }/>
                    </div>
                    <div className={styles.university}>
                        <p>University</p>
                        <input type="text" className={`${styles.input} ${styles.university_input}`} placeholder="University" onChange={
                            (e) => {
                                setUniversity(e.target.value)
                            }
                        }/>
                    </div>
                    <div className={styles.address}>
                        <p>Address</p>
                        <input type="text" className={`${styles.input} ${styles.address_input}`} placeholder="Address" onChange={
                            (e) => {
                                setAddress(e.target.value)
                            }
                        }/>
                    </div>
                </div>

                <div className={styles.contact}>
                    <div className={styles.phone}>
                        <p>Phone No.</p>
                        <input type="number" className={`${styles.input} ${styles.phone_input}`} placeholder="Phone No." onChange={
                            (e) => {
                                setPhone(e.target.value)
                            }
                        }/>
                    </div>
                    <div className={styles.email}>
                        <p>Email</p>
                        <input type="email" className={`${styles.input} ${styles.email_input}`} placeholder="Email" onChange={
                            (e) => {
                                setEmail(e.target.value)
                            }
                        }/>
                    </div>
                </div>

                </div>
            </div>
            <div className={styles.base}>
                <button className={styles.savebtn} onClick={onSubmitHandler}>Save Changes</button>
            </div>
        </div> )}
        </>
    )
}
