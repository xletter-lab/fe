import styles from "./surveyFooter.module.css";
type Props = {
  progress: number;
  isDone: boolean;
  leftButtonText?: string;
  rightButtonText?: string;
  clickLeftButton?: () => void;
  clickRightButton?: () => void;
};
export default function SurveyFooter({
  progress,
  isDone,
  clickLeftButton,
  clickRightButton,
  leftButtonText,
  rightButtonText,
}: Props) {
  const onClickLeftButton = () => {
    clickLeftButton?.();
  };
  const onClickRightButton = () => {
    clickRightButton?.();
  };
  return (
    <div className={styles.container}>
      <button className={styles.left_button} onClick={onClickLeftButton}>
        {leftButtonText}
      </button>
      <button
        className={`${styles.right_button} ${
          progress > 3 ? styles.survey_end : ""
        } ${!isDone && styles.disabled}`}
        onClick={onClickRightButton}
        disabled={!isDone}>
        {rightButtonText}
      </button>
    </div>
  );
}
