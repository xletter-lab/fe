import styles from "./Button.module.css";
type Props = {
  buttonText: string;
  buttonWidth?: number;
  isActive?: boolean;
  onClick: () => void;
  className?: string;
  children?: React.ReactNode;
};
export default function Button({
  buttonText,
  buttonWidth,
  onClick,
  isActive = true,
  className = "",
  children,
}: Props) {
  return (
    <>
      <button
        onClick={onClick}
        type="button"
        disabled={!isActive}
        className={`${styles.button} ${!isActive && "inactive"} ${className}`}>
        {buttonText}
      </button>
    </>
  );
}
