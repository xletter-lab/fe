import styles from "./Button.module.css";
type Props = {
  buttonText: string;
  isActive?: boolean;
  onClick: () => void;
  className?: string;
};
export default function Button({
  buttonText,

  onClick,
  isActive = true,
  className = "",
}: Props) {
  return (
    <button
      onClick={onClick}
      type="button"
      disabled={!isActive}
      className={`${styles.button} ${!isActive && "inactive"} ${className}`}>
      {buttonText}
    </button>
  );
}
