import styles from "./Button.module.css";
type Props = {
  buttonText: string;
  buttonWidth?: number;
  isActive?: boolean;
  onClick: () => void;
  className?:string;
};
export default function Button({
  buttonText,
  buttonWidth,
  onClick,
  className='',
  isActive = true,
}: Props) {
  return (
    <>
      <button
        onClick={onClick}
        type="button"
        className={`${styles.button} ${!isActive && "inactive"} ${className}`}
        style={{ width: `${buttonWidth}px` }}>
        {buttonText}
      </button>
    </>
  );
}
