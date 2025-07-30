import { Card } from './Card'
import styles from './Explore.module.css'
import { TbWorld } from "react-icons/tb";

export function Explore() {
    const arr = 
    [
        {
            name:"JEE",
            image:"/jee.png",
            link:"#"
        },
        {
            name:"NEET",
            image:"/neet.png",
            link:"#"
        },
        {
            name:"UPSE",
            image:"/upsc.png",
            link:"#"
        },
        {
            name:"CUET",
            image:"/cuet.png",
            link:"#"
        },
        {
            name:"CAT",
            image:"/cat.png",
            link:"#"
        },
        {
            name:"CLAT",
            image:"/clat.png",
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