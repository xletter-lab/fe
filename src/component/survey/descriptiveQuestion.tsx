import { SurveyType } from "@/pages/survey";
import styles from "./question.module.css";
type Props = {
  item: SurveyType;
  changeItem: ({
    questionId,
    selectedOptionId,
    enteredContent,
  }: {
    questionId: number;
    selectedOptionId?: number;
    enteredContent?: string;
  }) => void;
};
export default function DescriptiveQuestion({ item, changeItem }: Props) {
  const onChangeItem = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log("textarea balue", e.currentTarget.value);
    changeItem({ questionId: item.id, enteredContent: e.currentTarget.value });
  };

  return (
    <div>
      <div>{item?.question}</div>
      <textarea value={item?.content} onChange={onChangeItem} />
    </div>
  );
}
