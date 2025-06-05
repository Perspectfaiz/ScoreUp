import styles from './styles/resources.module.css';

export function ResourceCard({ resource, handleDownload, handleTagClick, selectedTag }) {
    return (
        <div className={styles.resourceCard}>
            <div className={styles.resourceType}>{resource.type}</div>
            <div className={styles.thumbnailContainer}>
                <img
                    src={resource.thumbnailUrl}
                    alt={resource.title}
                    className={styles.thumbnail}
                    onError={(e) => {
                        const img = e.target;
                        if (!img.dataset.fallbackApplied) {
                          img.dataset.fallbackApplied = 'true';
                          img.src = '/pdf-placeholder.jpg';
                        }
                      }}
                />
            </div>
            <h3>{resource.title}</h3>
            <p>{resource.description}</p>
            <div className={styles.tags}>
                {resource.tags.map(tag => (
                    <span
                        key={tag}
                        className={styles.tag}
                        onClick={(e) => handleTagClick(e, tag)}
                        style={{ cursor: 'pointer' }}
                    >
                        {tag}
                    </span>
                ))}
            </div>
            <div className={styles.resourceMeta}>
                <span>{resource.downloadCount} downloads</span>
                <span>Uploaded by {resource.uploadedBy?.name || 'Anonymous'}</span>
            </div>
            <button
                type="button"
                className={styles.downloadBtn}
                onClick={() => handleDownload(resource)}
            >
                {resource.type === 'Video' ? 'Watch Now' : 'Download'}
            </button>
        </div>
    );
} 