import { Option } from "@/types";
import styles from "./noTooltipOption.module.css";

type Props = {
  selected: Option;
  optionId: string;
  optionValue: Option;
  optionText: string;
  onClickOption: (optionId: Option) => void;
};

export default function NoTooltipOption({
  onClickOption,
  optionId,
  optionText,
  optionValue,
  selected,
}: Props) {
  return (
    <div
      className={`${styles.container} ${
        selected === undefined || selected === Option.None
          ? ""
          : selected === optionValue
          ? styles.selected_option
          : styles.unselected_option
      }`}
      onClick={() => onClickOption(optionValue)}>
      <div
        className={`${styles.option_id} ${
          selected === undefined || selected === Option.None
            ? ""
            : selected === optionValue
            ? styles.selected_option_id
            : ""
        }`}>
        {optionId}
      </div>
      <div className={styles.option_text}>{optionText}</div>
    </div>
  );
}
