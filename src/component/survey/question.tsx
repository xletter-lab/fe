import { SurveyType } from "@/pages/survey";
import DescriptiveQuestion from "./descriptiveQuestion";

import RadioQuestion from "./radioQuestion";
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
export default function Question({ item, changeItem }: Props) {
  if (item.type === 1) {
    return <RadioQuestion changeItem={changeItem} item={item} />;
  } else {
    return <DescriptiveQuestion changeItem={changeItem} item={item} />;
  }
}
