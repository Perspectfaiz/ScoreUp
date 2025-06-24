import ProgressBar from '../ProgressBar';
import styles from '../Studentprofile.module.css';

export default function StatsSummary({ stats }) {
    return (
        <div className={styles.statsCard}>
            <ProgressBar
                solved={stats.solved}
                total={stats.total}
                attempting={5}
                rank={stats.rank}
                percentile={stats.percentile}
                testsGiven={stats.testsGiven}
                totalTests={stats.totalTests}
            />
        </div>
    );
} 