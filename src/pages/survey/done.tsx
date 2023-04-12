import { SurveyType } from "@/pages/survey";
import Image from "next/image";
import styles from "./done.module.css";
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
export default function Done({ item, changeItem }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>;XLetter</div>
      <div className={styles.content_container}>
        <div>
          <div className={styles.title}>
            베타 테스트에 참여해주셔서 감사합니다!
          </div>
          <div className={styles.text}>
            다양한 SNS 채널에서 XLetter를 응원해 주세요 :{")"}
          </div>
          <div className={styles.sns}>
            <Image
              className={styles.discord}
              alt="discord"
              src={"/png/discord.png"}
              width={60}
              height={60}
            />
            <Image
              className={styles.twitter}
              alt="twitter"
              src={"/png/twitter.png"}
              width={60}
              height={60}
            />
            <Image
              className={styles.telegram}
              alt="telegram"
              src={"/png/telegram.png"}
              width={60}
              height={60}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
