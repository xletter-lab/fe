import styles from "./noTooltipOption.module.css";
import { Option } from "@/pages/novel";

type Props = {
  selected: Option;
  optionId: Option;
  optionText: string;
  onClickOption: (optionId: Option) => void;
};

export default function NoTooltipOption({
  onClickOption,
  optionId,
  optionText,
  selected,
}: Props) {
  return (
    <div
      className={`${styles.container} ${
        selected != Option.None
          ? selected === optionId
            ? styles.selected_option
            : styles.unselected_option
          : ""
      }`}
      onClick={() => onClickOption(optionId)}>
      <div
        className={`${styles.option_id} ${
          selected != Option.None
            ? selected === optionId
              ? styles.selected_option_id
              : ""
            : ""
        }`}>
        {optionId}
      </div>
      <div className={styles.option_text}>{optionText}</div>
    </div>
  );
}
