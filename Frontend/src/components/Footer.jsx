import styles from './Footer.module.css'
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { RiTelegram2Line } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
// import { RiSendPlane2Fill } from "react-icons/ri";
import { TbSend } from "react-icons/tb";


export function Footer() {
    return(
        <>
            <div className={styles.foot}>
                <div className={styles.detail}>
                    <div className={styles.links}>
                        <div className={styles.sec}>
                            <p className={styles.head}>EXAMS</p>
                            <a href="#" className={styles.field}>JEE Main</a>
                            <a href="#" className={styles.field}>JEE Advanced</a>
                            <a href="#" className={styles.field}>NEET</a>
                            <a href="#" className={styles.field}>UPSC</a>
                            <a href="#" className={styles.field}>GATE</a>
                            <a href="#" className={styles.field}>CAT</a>
                            <a href="#" className={styles.field}>CLAT</a>
                        </div>
                        <div className={styles.sec}>
                            <p className={styles.head}>CLASSES</p>
                            <a href="#" className={styles.field}>Class 6</a>
                            <a href="#" className={styles.field}>Class 7</a>
                            <a href="#" className={styles.field}>Class 8</a>
                            <a href="#" className={styles.field}>Class 9</a>
                            <a href="#" className={styles.field}>Class 10</a>
                            <a href="#" className={styles.field}>Class 11</a>
                            <a href="#" className={styles.field}>Class 12</a>
                        </div>
                        <div className={styles.sec}>
                            <p className={styles.head}>RESOUCES</p>
                            <a href="#" className={styles.field}>Study Material</a>
                            <a href="#" className={styles.field}>NCERT Books</a>
                            <a href="#" className={styles.field}>Cheat Sheets</a>
                            <a href="#" className={styles.field}>One Shorts</a>
                            <a href="#" className={styles.field}>Reference</a>
                        </div>
                        <div className={styles.sec}>
                            <p className={styles.head}>ABOUT</p>
                            <a href="#" className={styles.field}>About Us</a>
                            <a href="#" className={styles.field}>Contact Us</a>
                            <a href="#" className={styles.field}>Feedback</a>
                            <a href="#" className={styles.field}>Terms & Conditions</a>
                        </div>
                    </div>
                    <div className={styles.feedback}>
                        <p className={styles.head}>FEEDBACK</p>
                        <textarea className={styles.comment} rows={4} cols={10} placeholder='Share your thoughts'></textarea>
                        <button className={styles.send}>
                            <div className={styles.sendtxt}>Send</div>
                            <TbSend className={styles.sendicon} size={20}/>
                        </button>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <a href='#' className={styles.brand}>
                        <img src="../public/6527325.png" alt="ScoreUp" />
                        <div className={styles.brandname}>ScoreUp</div>
                    </a>
                    <div className={styles.social}>
                        <div className={styles.title}>Follow us on : </div>
                        <div className={styles.icon}>
                            <a href="#"><FaWhatsapp size={20}/></a>
                            <a href="#"><FaInstagram size={20}/></a>
                            <a href="#"><AiOutlineYoutube size={20}/></a>
                            <a href="#"><RiTelegram2Line size={20}/></a>
                            <a href="#"><FaLinkedinIn size={20}/></a>
                            <a href="#"><FaFacebook size={20}/></a>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}