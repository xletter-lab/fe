import styles from "./Button.module.css";
type Props = {
  buttonText: string;
  buttonWidth: number;
  isActive: boolean;
};
export default function Button({ buttonText, buttonWidth, isActive }: Props) {
  return (
    <>
      <button
        className={`${styles.button} ${isActive && "inactive"}`}
        style={{ width: `${buttonWidth}px` }}>
        {buttonText}
      </button>
    </>
  );
}
