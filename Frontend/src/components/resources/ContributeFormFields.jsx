
import styles from './styles/ContributeForm.module.css';

export function ContributeFormFields({
    formData,
    handleChange,
    handleFileChange,
    handleSubmit,
    isSubmitting,
    error,
    fileInputRef,
    examImages
}) {
    return (
        <>
            <div className={styles.formHeader}>
                <h2>Contribute a Resource</h2>
                <p>Share educational materials with the community</p>
            </div>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                    <label htmlFor="title">
                        Title <span className={styles.required}>*</span>
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                        placeholder="e.g., JEE Advanced Physics Notes 2024"
                        className={styles.input}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="description">
                        Description <span className={styles.required}>*</span>
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                        placeholder="Provide a detailed description of your resource..."
                        className={styles.textarea}
                        rows="4"
                    />
                </div>
                <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                        <label htmlFor="type">
                            Type <span className={styles.required}>*</span>
                        </label>
                        <select
                            id="type"
                            name="type"
                            value={formData.type}
                            onChange={handleChange}
                            required
                            className={styles.select}
                        >
                            <option value="PDF">PDF</option>
                            {/* <option value="Video">Video</option> */}
                        </select>
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="tags">
                            Tags <span className={styles.required}>*</span>
                        </label>
                        <input
                            type="text"
                            id="tags"
                            name="tags"
                            value={formData.tags}
                            onChange={handleChange}
                            required
                            placeholder="e.g., JEE, Physics, Class 12 (comma-separated)"
                            className={styles.input}
                        />
                    </div>
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="file">
                        PDF File <span className={styles.required}>*</span>
                    </label>
                    <div className={styles.fileUploadContainer}>
                        <input
                            type="file"
                            id="file"
                            name="file"
                            onChange={handleFileChange}
                            accept=".pdf"
                            required
                            className={styles.fileInput}
                            ref={fileInputRef}
                        />
                        <div className={styles.fileUploadInfo}>
                            {formData.file ? (
                                <div className={styles.fileInfo}>
                                    <span className={styles.fileName}>{formData.file.name}</span>
                                    <span className={styles.fileSize}>
                                        ({(formData.file.size / 1024 / 1024).toFixed(2)} MB)
                                    </span>
                                </div>
                            ) : (
                                <div className={styles.fileUploadPlaceholder}>
                                    <span>Click to upload PDF</span>
                                    <span className={styles.fileUploadHint}>
                                        Max size: 10MB
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className={styles.formGroup}>
                    <label>
                        Select Exam <span className={styles.required}>*</span>
                    </label>
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
                        {examImages.map((img, idx) => (
                            <div key={img.value} style={{ textAlign: 'center' }}>
                                <input
                                    type="radio"
                                    id={`exam-img-${idx}`}
                                    name="thumbnailUrl"
                                    value={img.value}
                                    checked={formData.thumbnailUrl === img.value}
                                    onChange={() => handleChange({ target: { name: 'thumbnailUrl', value: img.value } })}
                                    style={{ display: 'none' }}
                                />
                                <label htmlFor={`exam-img-${idx}`} style={{ cursor: 'pointer', display: 'block' }}>
                                    <img
                                        src={img.value}
                                        alt={img.label}
                                        style={{
                                            border: formData.thumbnailUrl === img.value ? '3px solid #703ed1' : '2px solid #e2e8f0',
                                            borderRadius: '8px',
                                            width: 60,
                                            height: 60,
                                            objectFit: 'cover',
                                            marginBottom: 4
                                        }}
                                    />
                                    <div style={{ fontSize: 12 }}>{img.label}</div>
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
                {error && <div className={styles.error}>{error}</div>}
                <button 
                    type="submit" 
                    className={styles.submitButton}
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Submitting...' : 'Submit Resource'}
                </button>
            </form>
        </>
    );
} 