import styles from './tagcard.module.css'

export function Tagcard({tag}) {
    return (
        <>
            <div className={styles.tagcard}>
                <div className={styles.tagname}>{tag}</div>
                <div className={styles.focusbar}></div>
            </div>
        </>
    )
}