import { Navbar } from './Navbar'
import styles from './About.module.css'

export function About(){
    
    return <>
    <Navbar/>
    <div className={styles.about}>
       About is comming soon..
    </div>
    </>
    
}