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
      <button
        className={styles.left_button}
        onClick={onClickLeftButton}
        disabled={progress < 1}>
        {leftButtonText}
      </button>
      <button
        className={styles.right_button}
        onClick={onClickRightButton}
        disabled={!isDone}>
        {rightButtonText}
      </button>
    </div>
  );
}
