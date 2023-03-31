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
  index: number;
};

export default function Question({ item, changeItem, index }: Props) {
  if (item?.questionType === 1) {
    return <RadioQuestion changeItem={changeItem} item={item} index={index} />;
  } else {
    return <DescriptiveQuestion changeItem={changeItem} item={item} />;
  }
}
