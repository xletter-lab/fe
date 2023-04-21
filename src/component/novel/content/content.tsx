import { OptionType, StoryType } from "@/pages/novel/[index]";
import styles from "./content.module.css";
type Props = {
  data: StoryType;
};
export default function Content({ data }: Props) {
  const { withOption, contents, options, selected, title } = data;
  const getSelectedOptionIndex = (selected) => {
    if (selected === OptionType.None) {
      return -1;
    } else if (selected === OptionType.A) {
      return 0;
    } else {
      return 1;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.content_none}>{contents[0]}</div>
      {withOption && (
        <div className={styles.with_option_content}>
          <div className={styles.options_container}>
            {options.map((option, index) => {
              return (
                <div
                  key={`option_${index}`}
                  className={`${styles.option_line}  ${
                    getSelectedOptionIndex(selected) === index
                      ? ""
                      : styles.option_none
                  }`}>
                  <div
                    className={`${styles.option} ${
                      getSelectedOptionIndex(selected) === index
                        ? styles.option_selected
                        : styles.option_discared
                    }`}>
                    <div
                      className={`${styles.option_id} ${
                        getSelectedOptionIndex(selected) === index
                          ? styles.option_selected
                          : styles.option_discared
                      }`}>
                      {index == 0 ? "A" : "B"}
                    </div>
                    {option}
                  </div>
                  {index === 0 &&
                    getSelectedOptionIndex(selected) !== index && (
                      <div className={styles.question_mark}>?</div>
                    )}
                </div>
              );
            })}
          </div>
          {selected != OptionType.None && (
            <div className={styles.content_after_select}>{contents[1]}</div>
          )}
        </div>
      )}
    </div>
  );
}
