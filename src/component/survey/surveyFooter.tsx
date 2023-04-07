import styles from "./surveyFooter.module.css";
type Props = {
  leftButtonText?: string;
  rightButtonText?: string;
  clickLeftButton?: () => void;
  clickRightButton?: () => void;
};
export default function SurveyFooter({
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
    <div>
      <button onClick={onClickLeftButton}>{leftButtonText}</button>
      <button onClick={onClickRightButton}>{rightButtonText}</button>
    </div>
  );
}
