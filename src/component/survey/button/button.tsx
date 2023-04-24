import styles from "./button.module.css";
type Props = {
  withRadio: boolean;
  text: string;
  quetionId: number;
  selected?: boolean;
  className?: string;
  onClickButton?: (optionId: number) => void;
};
export default function Button({
  onClickButton,
  text,
  className = "",
  withRadio,
  quetionId,
  selected = false,
}: Props) {
  const clickButton = () => {
    onClickButton?.(quetionId);
  };
  return (
    <div
      onClick={clickButton}
      className={`${styles.container} ${className} ${
        selected && styles.container_selected
      }`}>
      {withRadio && (
        <input
          className={`${styles.input} ${selected && styles.input_selected}`}
          type="radio"
          name={quetionId.toString()}
          style={{ accentColor: "#5729e9" }}
          checked={selected}
        />
      )}
      {text}
    </div>
  );
}
