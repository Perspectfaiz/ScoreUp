import { useState, useEffect, useMemo } from 'react';
import { Navbar } from '../Navbar';
import styles from './styles/resources.module.css';
import { resourceService } from '../../services/resourceService';
import { ContributeForm } from './ContributeForm';
import { ResourceCard } from './ResourceCard';
import { TagFilters } from './TagFilters';
import { SearchBar } from './SearchBar';

export function FreeReso() {
    const [resources, setResources] = useState([]);
    const [allResources, setAllResources] = useState([]);
    const [allAvailableTags, setAllAvailableTags] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedTag, setSelectedTag] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showContributeForm, setShowContributeForm] = useState(false);

    const fetchResources = async () => {
        try {
            setLoading(true);
            const data = await resourceService.getResources();
            setAllResources(data);

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

    useEffect(() => {
        fetchResources();
    }, []);

    const filteredResources = useMemo(() => {
        return allResources.filter(resource => {
            const matchesSearch = searchTerm === '' || 
                resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                resource.description.toLowerCase().includes(searchTerm.toLowerCase());

            const matchesTag = selectedTag === '' || resource.tags.includes(selectedTag);

            return matchesSearch && matchesTag;
        });
    }, [allResources, searchTerm, selectedTag]);

    useEffect(() => {
        setResources(filteredResources);
    }, [filteredResources]);

    const handleDownload = async (resource) => {
        try {
            await resourceService.incrementDownloadCount(resource._id);
            const downloadUrl = resource.fileUrl;
            if (!downloadUrl) {
                alert('No download URL available for this resource.');
                return;
            }
            const link = document.createElement('a');
            link.href = downloadUrl;
            link.download = `${resource.title}.pdf`;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            document.body.appendChild(link);
            link.click();
            setTimeout(() => {
                document.body.removeChild(link);
            }, 100);
        } catch (error) {
            console.error('Download failed:', error);
            alert('Failed to download the resource. Please try again later.');
        }
    };

    const handleTagClick = (e, tag) => {
        e.preventDefault();
        setSelectedTag(tag === selectedTag ? '' : tag);
    };

    return (
        <>
            <Navbar />
            <div className={styles.container}>
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

                <section className={styles.searchSection}>
                    <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                    <TagFilters
                        allAvailableTags={allAvailableTags}
                        selectedTag={selectedTag}
                        handleTagClick={handleTagClick}
                    />
                </section>

                {loading && <div className={styles.loading}>Loading resources...</div>}

                {error && <div className={styles.error}>{error}</div>}

                {!loading && !error && (
                    <section className={styles.resourcesGrid}>
                        {resources.length === 0 ? (
                            <div className={styles.noResults}>
                                No resources found. Try adjusting your search or filters.
                            </div>
                        ) : (
                            filteredResources.map(resource => (
                                <ResourceCard
                                    key={resource._id}
                                    resource={resource}
                                    handleDownload={handleDownload}
                                    handleTagClick={handleTagClick}
                                    selectedTag={selectedTag}
                                />
                            ))
                        )}
                    </section>
                )}

                {showContributeForm && (
                    <ContributeForm onClose={() => {
                        setShowContributeForm(false);
                        fetchResources();
                    }} />
                )}
            </div>
        </>
    );
}
