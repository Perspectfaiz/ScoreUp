import React, { useState, useRef } from 'react';
import styles from './styles/ContributeForm.module.css';
import { uploadPDF } from '../../services/supabaseStorageService';
import { ContributeFormFields } from './ContributeFormFields';

export function ContributeForm({ onClose }) {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        type: 'PDF',
        tags: '',
        file: null,
        thumbnailUrl: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const fileInputRef = useRef(null);

    // Exam image options (update these paths as needed)
    const examImages = [
        { label: 'CAT', value: '/cat.png' },
        { label: 'NEET', value: '/neet.png' },
        { label: 'CLAT', value: '/clat.png' },
        { label: 'UPSC', value: '/upsc.png' },
        { label: 'CUET', value: '/cuet.png' },
        { label: 'JEE', value: '/jee.png' },
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (file.type !== 'application/pdf') {
                setError('Please upload a PDF file');
                return;
            }
            if (file.size > 10 * 1024 * 1024) { // 10MB limit
                setError('File size should be less than 10MB');
                return;
            }
            setFormData(prev => ({
                ...prev,
                file
            }));
            setError('');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');
        try {
            if (!formData.file) {
                throw new Error('Please select a file to upload');
            }
            if (!formData.thumbnailUrl) {
                throw new Error('Please select an exam image as thumbnail');
            }
            // Upload file to Supabase Storage
            const filePath = await uploadPDF(formData.file);
            const fileUrl = filePath ? `https://jheytdveryzjwznjluwj.supabase.co/storage/v1/object/public/pdf/${filePath}` : '';
            const tagsArray = formData.tags.split(',').map(tag => tag.trim());
            const response = await fetch('http://localhost:8080/api/resources', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title: formData.title,
                    description: formData.description,
                    type: formData.type,
                    tags: tagsArray,
                    fileUrl,
                    publicId: filePath,
                    thumbnailUrl: formData.thumbnailUrl,
                    downloadCount: 0
                }),
            });
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to submit resource');
            }
            setSuccess(true);
            setTimeout(() => {
                onClose();
            }, 2000);
        } catch (err) {
            setError(err.message || 'Failed to submit resource. Please try again.');
            console.error('Error:', err);
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
                    <ContributeFormFields
                        formData={formData}
                        handleChange={handleChange}
                        handleFileChange={handleFileChange}
                        handleSubmit={handleSubmit}
                        isSubmitting={isSubmitting}
                        error={error}
                        fileInputRef={fileInputRef}
                        examImages={examImages}
                    />
                )}
            </div>
        </div>
    );
} 