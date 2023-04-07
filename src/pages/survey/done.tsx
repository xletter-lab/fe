import { SurveyType } from "@/pages/survey";
import Image from "next/image";
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
  return (
    <div>
      <div>베타 테스트에 참여해주셔서 감사합니다!</div>
      <div>다양한 SNS 채널에서 XLetter를 응원해 주세요 :{")"}</div>
      <div>
        <Image alt="discord" src={"/png/discord.png"} width={60} height={60} />
        <Image alt="twitter" src={"/png/twitter.png"} width={60} height={60} />
        <Image
          alt="telegram"
          src={"/png/telegram.png"}
          width={60}
          height={60}
        />
      </div>
    </div>
  );
}
