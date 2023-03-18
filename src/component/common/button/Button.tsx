import styles from "./Button.module.css";
type Props = {
  buttonText: string;
  buttonWidth: number;
  isActive: boolean;
  onClick: () => void;
};
export default function Button({
  buttonText,
  buttonWidth,
  onClick,
  isActive = true,
}: Props) {
  return (
    <>
      <button
        onClick={onClick}
        type="button"
        className={`${styles.button} ${!isActive && "inactive"}`}
        style={{ width: `${buttonWidth}px` }}>
        {buttonText}
      </button>
    </>
  );
}
