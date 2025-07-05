import styles from './tagcard.module.css'

export function Tagcard({tag, isSelected = false, onClick}) {
    return (
        <>
            <div 
                className={`${styles.tagcard} ${isSelected ? styles.selected : ''}`}
                onClick={onClick}
                style={{ cursor: onClick ? 'pointer' : 'default' }}
            >
                <div className={styles.tagname}>{tag}</div>
                <div className={styles.focusbar}></div>
            </div>
        </>
    )
}