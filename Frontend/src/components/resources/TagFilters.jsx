import styles from './styles/resources.module.css';

export function TagFilters({ allAvailableTags, selectedTag, handleTagClick }) {
    return (
        <div className={styles.tagFilters}>
            <button
                type="button"
                className={`${styles.tagBtn} ${selectedTag === '' ? styles.active : ''}`}
                onClick={(e) => handleTagClick(e, '')}
            >
                All
            </button>
            {allAvailableTags.map(tag => (
                <button
                    key={tag}
                    type="button"
                    className={`${styles.tagBtn} ${selectedTag === tag ? styles.active : ''}`}
                    onClick={(e) => handleTagClick(e, tag)}
                >
                    {tag}
                </button>
            ))}
        </div>
    );
} 