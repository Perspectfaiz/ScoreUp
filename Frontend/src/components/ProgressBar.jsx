import React from "react";
import styles from './ProgressBar.module.css';

const CIRCLE_SIZE = 180;
const STROKE = 12;
const RADIUS = (CIRCLE_SIZE - STROKE) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export default function ProgressBar({
  solved = 0,
  total = 100,
  attempting = 0,
  rank = 0,
  percentile = 0,
  duration = 1200,
  testsGiven = 0,
  totalTests = 0,
}) {
  const percent = Math.min(solved / total, 1);
  const progress = percent * CIRCUMFERENCE;

  const [offset, setOffset] = React.useState(CIRCUMFERENCE);
  React.useEffect(() => {
    setTimeout(() => setOffset(CIRCUMFERENCE - progress), 50);
  }, [progress]);

  return (
    <div className={styles.progressBarCard}>
      {/* Left Side: Progress and Attempting */}
      <div className={styles.leftSide}>
        {/* Progress Circle */}
        <div className={styles.progressCircleWrapper}>
          <svg width={CIRCLE_SIZE} height={CIRCLE_SIZE} className={styles.progressSvg}>
            <circle
              cx={CIRCLE_SIZE / 2}
              cy={CIRCLE_SIZE / 2}
              r={RADIUS}
              fill="none"
              stroke="#e5e7eb"
              strokeWidth={STROKE}
            />
            <circle
              cx={CIRCLE_SIZE / 2}
              cy={CIRCLE_SIZE / 2}
              r={RADIUS}
              fill="none"
              stroke="url(#progress-gradient)"
              strokeWidth={STROKE}
              strokeDasharray={CIRCUMFERENCE}
              strokeDashoffset={offset}
              strokeLinecap="round"
              className={styles.progressCircle}
            />
            <defs>
              <linearGradient id="progress-gradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#a78bfa" />
                <stop offset="100%" stopColor="#7c3aed" />
              </linearGradient>
            </defs>
          </svg>

          {/* Inside Circle: Solved / Total */}
          <div className={styles.circleTextContent}>
            <span className={styles.solvedValue}>
              {solved}
              <span className={styles.totalValue}>/{total}</span>
            </span>
            <div className={styles.solvedLabelRow}>
              <span className={styles.solvedCheck}>&#10003;</span>
              <span className={styles.solvedLabel}>Solved</span>
            </div>
          </div>
        </div>

        {/* Below Progress: Test Given and Attempting */}
        <div className={styles.testStatsSection}>
          {/* <div className={styles.testStatItem}>
            <span className={styles.testStatLabel}>Tests Given:</span>
            <span className={styles.testStatValue}>{testsGiven}/{totalTests}</span>
          </div> */}
          <div className={styles.testStatItem}>
            <span className={styles.testStatLabel}>Attempting:</span>
            <span className={styles.testStatValue}>{attempting}</span>
          </div>
        </div>
      </div>

      {/* Right Side: Rank and Percentile */}
      <div className={styles.rightSide}>
        <div className={styles.statsRow}>
          <div className={styles.rankCard}>
            <p className={styles.statLabel}>Rank</p>
            <p className={styles.rankValue}>{rank.toLocaleString()}</p>
          </div>
          <div className={styles.percentileCard}>
            <p className={styles.statLabel}>Beats</p>
            <p className={styles.percentileValue}>{percentile}%</p>
          </div>
        </div>
      </div>
    </div>
  );
}
