import React, { useState } from 'react';
import styles from './ContributeForm.module.css';

export function ContributeForm({ onClose }) {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        type: 'PDF',
        tags: '',
        fileUrl: '',
        thumbnailUrl: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');

        try {
            const tagsArray = formData.tags.split(',').map(tag => tag.trim());

            const response = await fetch('http://localhost:5000/api/resources', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    tags: tagsArray,
                    downloadCount: 0
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to submit resource');
            }

            setSuccess(true);
            setTimeout(() => {
                onClose();
            }, 2000);

        } catch (err) {
            setError('Failed to submit resource. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className={styles.overlay} onClick={(e) => e.target.className === styles.overlay && onClose()}>
            <div className={styles.formContainer}>
                <button className={styles.closeButton} onClick={onClose}>×</button>
                
                {success ? (
                    <div className={styles.successContainer}>
                        <div className={styles.successIcon}>✓</div>
                        <h2>Success!</h2>
                        <p>Your resource has been submitted successfully.</p>
                    </div>
                ) : (
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
                                        <option value="Video">Video</option>
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
                                <label htmlFor="fileUrl">
                                    File URL <span className={styles.required}>*</span>
                                </label>
                                <input
                                    type="url"
                                    id="fileUrl"
                                    name="fileUrl"
                                    value={formData.fileUrl}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter the URL where your resource is hosted"
                                    className={styles.input}
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="thumbnailUrl">
                                    Thumbnail URL
                                    <span className={styles.optional}> (optional)</span>
                                </label>
                                <input
                                    type="url"
                                    id="thumbnailUrl"
                                    name="thumbnailUrl"
                                    value={formData.thumbnailUrl}
                                    onChange={handleChange}
                                    placeholder="Enter a URL for the resource thumbnail"
                                    className={styles.input}
                                />
                            </div>

                            {error && <div className={styles.error}>{error}</div>}

                            <button 
                                type="submit" 
                                className={styles.submitButton}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <span className={styles.spinner}>
                                        <span className={styles.spinnerDot}></span>
                                        <span className={styles.spinnerDot}></span>
                                        <span className={styles.spinnerDot}></span>
                                    </span>
                                ) : 'Submit Resource'}
                            </button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
}
//update by me 