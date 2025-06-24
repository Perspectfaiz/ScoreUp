import styles from '../Studentprofile.module.css';

export default function TestHistory({ testHistory }) {
    return (
        <div className={styles.historyCard}>
            <div className={styles.historyHeader}>Test History</div>
            <table className={styles.historyTable}>
                <thead>
                    <tr>
                        <th>Test Name</th>
                        <th>Date</th>
                        <th>Score</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {testHistory.map((test, idx) => (
                        <tr key={idx}>
                            <td>{test.name}</td>
                            <td>{test.date}</td>
                            <td>{test.score}</td>
                            <td>{test.status}</td>
                            <td><button className={styles.viewBtn}>View</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
} 