import styles from "./surveyHeader.module.css";
type Props = {
  progress: number;
};
export default function SurveyHeader({ progress }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>;XLetter</div>
      <div className={styles.progress_bar}>
        <div
          className={styles.active_bar}
          style={{ width: `${(progress + 1) * 200}px` }}
        />
        <div className={styles.total_bar} />
      </div>
    </div>
  );
}
