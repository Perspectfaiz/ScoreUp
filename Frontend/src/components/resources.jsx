import { useState, useEffect, useMemo } from 'react';
import { Navbar } from './Navbar'
import styles from './resources.module.css'
import { resourceService } from '../services/resourceService';
import { ContributeForm } from './ContributeForm';

export function FreeReso(){
    const [resources, setResources] = useState([]);
    const [allResources, setAllResources] = useState([]); // Store all resources
    const [allAvailableTags, setAllAvailableTags] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedTag, setSelectedTag] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showContributeForm, setShowContributeForm] = useState(false);

    // Fetch all resources
    const fetchResources = async () => {
        try {
            setLoading(true);
            const data = await resourceService.getResources();
            setAllResources(data);
            
            // Get all unique tags from all resources
            const tags = [...new Set(data.flatMap(resource => resource.tags))].sort();
            setAllAvailableTags(tags);
            
            setError(null);
        } catch (err) {
            setError('Failed to fetch resources. Please try again later.');
            console.error('Error fetching resources:', err);
        } finally {
            setLoading(false);
        }
    };

    // Initial fetch of resources
    useEffect(() => {
        fetchResources();
    }, []);

    // Filter resources based on search term and selected tag
    const filteredResources = useMemo(() => {
        return allResources.filter(resource => {
            const matchesSearch = searchTerm === '' || 
                resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                resource.description.toLowerCase().includes(searchTerm.toLowerCase());
            
            const matchesTag = selectedTag === '' || resource.tags.includes(selectedTag);
            
            return matchesSearch && matchesTag;
        });
    }, [allResources, searchTerm, selectedTag]);

    // Update filtered resources whenever the filters change
    useEffect(() => {
        setResources(filteredResources);
    }, [filteredResources]);

    // Handle resource download
    const handleDownload = async (resource) => {
        try {
            // First try to increment the download count
            await resourceService.incrementDownloadCount(resource._id);
            
            // Then open the resource URL in a new tab
            window.open(resource.fileUrl, '_blank');
        } catch (error) {
            // If download count update fails, still try to open the resource
            console.warn('Failed to update download count, but proceeding with download:', error);
            window.open(resource.fileUrl, '_blank');
        }
    };

    const handleTagClick = (e, tag) => {
        e.preventDefault();
        setSelectedTag(tag === selectedTag ? '' : tag);
    };

    return <>
    <Navbar/>
    <div className={styles.container}>
        {/* Hero Section */}
        <section className={styles.hero}>
            <h1>Free Educational Resources</h1>
            <p>Access high-quality study materials, practice papers, and video lectures to excel in your exams</p>
            <button 
                type="button" 
                className={styles.contributeBtn}
                onClick={() => setShowContributeForm(true)}
            >
                Contribute Resources
            </button>
        </section>

        {/* Search and Filter Section */}
        <section className={styles.searchSection}>
            <div className={styles.searchBar}>
                <input
                    type="text"
                    placeholder="Search resources..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
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
        </section>

        {/* Loading State */}
        {loading && (
            <div className={styles.loading}>
                Loading resources...
            </div>
        )}

        {/* Error State */}
        {error && (
            <div className={styles.error}>
                {error}
            </div>
        )}

        {/* Resources Grid */}
        {!loading && !error && (
            <section className={styles.resourcesGrid}>
                {resources.length === 0 ? (
                    <div className={styles.noResults}>
                        No resources found. Try adjusting your search or filters.
                    </div>
                ) : (
                    resources.map(resource => (
                        <div key={resource._id} className={styles.resourceCard}>
                            <div className={styles.resourceType}>{resource.type}</div>
                            <div className={styles.thumbnailContainer}>
                                {resource.thumbnailUrl ? (
                                    <img 
                                        src={resource.thumbnailUrl} 
                                        alt={resource.title}
                                        className={styles.thumbnail}
                                        onError={(e) => {
                                            e.target.src = resource.type === 'PDF' 
                                                ? '/pdf-placeholder.jpg' 
                                                : '/video-placeholder.jpg';
                                        }}
                                    />
                                ) : (
                                    <div className={styles.placeholderThumbnail}>
                                        {resource.type === 'PDF' ? '📄' : '🎥'}
                                    </div>
                                )}
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
                    ))
                )}
            </section>
        )}

        {showContributeForm && (
            <ContributeForm onClose={() => {
                setShowContributeForm(false);
                // Refresh resources after contribution
                fetchResources();
            }} />
        )}
    </div>
    </>
    
}