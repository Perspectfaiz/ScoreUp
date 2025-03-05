import { Card } from './card'
import styles from './Explore.module.css'
import { TbWorld } from "react-icons/tb";

export function Explore() {
    const arr = 
    [
        {
            name:"JEE",
            image:"#",
            link:"#"
        },
        {
            name:"NEET",
            image:"#",
            link:"#"
        },
        {
            name:"UPSE",
            image:"#",
            link:"#"
        },
        {
            name:"GATE",
            image:"#",
            link:"#"
        },
        {
            name:"CAT",
            image:"#",
            link:"#"
        },
        {
            name:"CLAT",
            image:"#",
            link:"#"
        }  
    ];
    return (
        <>
            <div className={styles.explore}>
                <div className={styles.txt}>
                    <TbWorld className={styles.exploreicon}size={40}/>
                    <p>Explore Tests</p>
                </div>
                <div className={styles.section}>
                    {
                        arr.map((item,index) => {
                           return <div className={styles.test} key={index}><Card subjects={item}></Card></div>
                        }) 
                    }
                    
                    
                </div>
            </div>
            
        </>
    )
}