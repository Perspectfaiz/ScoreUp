import styles from './Card.module.css'
export function Card({subjects}) {
    // const {name}=subjects;
    return (
        <>
            <div className={styles.bgcolor}>
                
                <div className={styles.top}>
                <img 
                src={subjects.image} 
                alt={subjects.name} 
                className={styles.img} 
                />

                </div>
                <div className={styles.bottom} /*style={{ backgroundColor: subjects.clr }}*/>
                    <p className={styles.txt}>
                        {subjects.name}
                    </p>
                </div>
            </div>
        </>
    )
}