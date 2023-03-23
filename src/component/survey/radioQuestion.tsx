import { SurveyType } from "@/pages/survey";
import styles from "./question.module.css";
type Props = {
  item: SurveyType;
  changeItem: ({
    questionId,
    selectedOptionId,
  }: {
    questionId: number;
    selectedOptionId?: number;
  }) => void;
};
export default function RadioQuestion({ item, changeItem }: Props) {
  const onChangeItem = (optionId: number) => {
    changeItem({ questionId: item.id, selectedOptionId: optionId });
  };

  return (
    <div>
      <div>{item.question}</div>
      <div>
        {item.options.map((option) => {
          return (
            <div key={`question_${item.id}_option_${option.id}`}>
              <input
                type="radio"
                value={option.text}
                name={`question_${item.id}`}
                onClick={() => onChangeItem(option.id)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
