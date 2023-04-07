import styles from "./RadioButton.module.css";
type Props = {
  withRadio?: boolean;
  text?: string;
  quetionId?: string;
};
export default function Button({
  text,
  quetionId = "",
  withRadio = true,
}: Props) {
  const onClickButton = () => {};
  return (
    <div onClick={onClickButton}>
      {withRadio && (
        <input
          type="radio"
          name={quetionId}
          style={{ accentColor: "#5729e9" }}
        />
      )}
      {text}
    </div>
  );
}
