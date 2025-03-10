import styles from './List.module.css'
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { TbClipboardCheck } from "react-icons/tb";
// color='#11b73d'

export function List({info}) {
    // console.log(info)
    return (
        <>
            <div className={styles.listcard}>
                <div className={styles.status}><TbClipboardCheck size={25} color='#11b73d'/></div>
                <abbr className={styles.topic} title={info.title}><div>{info.title}</div></abbr>
                <div className={styles.duration}><div>{info.time}</div></div>
                <div className={styles.attempted}><div>{info.attempted}</div></div>
                <abbr className={styles.teacher} title={info.teachername}><div>{info.teachername}</div></abbr>
            </div>
        </>
    )
}