import styles from './styles/resources.module.css';

export function SearchBar({ searchTerm, setSearchTerm }) {
    return (
        <div className={styles.searchBar}>
            <input
                type="text"
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
    );
} 