import { SurveyType } from "@/pages/survey";
import styles from "./radioQuestion.module.css";
type Props = {
  item: SurveyType;
  changeItem: ({
    questionId,
    selectedOptionId,
  }: {
    questionId: number;
    selectedOptionId?: number;
  }) => void;
  index: number;
};
export default function RadioQuestion({ item, changeItem, index }: Props) {
  const onChangeItem = (optionId: number) => {
    changeItem({ questionId: item.id, selectedOptionId: optionId });
  };

  const onClickItem = () => {};

  return (
    <div>
      <div className={styles.question_title}>{`Q${index + 1}. ${
        item.question
      }`}</div>
      <div>
        {item.options.map((option, optionIndex) => {
          return (
            <div
              key={`question_${item.id}_option_${option.id}`}
              className={`${styles.question_box}`}>
              <input
                className={styles.radio}
                type="radio"
                value={optionIndex}
                name={`question_${item.id}`}
                onClick={() => onChangeItem(option.id)}
              />
              {option.text}
            </div>
          );
        })}
      </div>
    </div>
  );
}
