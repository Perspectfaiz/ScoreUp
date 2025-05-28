import { Footer } from './footer'
import styles from './Studentprofile.module.css'
import { LiaEditSolid } from "react-icons/lia";
import { IoIosArrowBack } from "react-icons/io";
import { useState } from 'react'

export function Studentprofile({hid}) {
    const [isDetailsVisible, setIsDetailsVisible] = useState(true);

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
                                <div className={styles.name}>Sameer Mishra</div>
                                <div className={styles.stream}>JEE</div>
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
            <Footer></Footer>
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