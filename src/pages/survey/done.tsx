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
  return <div>베타 테스트에 참여해주셔서 감사합니다!</div>;
}
