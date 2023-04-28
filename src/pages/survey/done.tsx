import { SurveyType } from "@/pages/survey";
import Image from "next/image";
import styles from "./done.module.css";
import Link from "next/link";
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
      <Image
        alt="logo"
        src={"/png/logo.png"}
        width={125}
        height={80}
        className={styles.logo}
      />
      <div className={styles.content_container}>
        <div>
          <div className={styles.title}>
            베타 테스트에 참여해주셔서 감사합니다!
          </div>
          <div className={styles.text}>
            다양한 SNS 채널에서 XLetter를 응원해 주세요 :{")"}
          </div>

          <div className={styles.sns}>
            <Link href={"https://discord.gg/jPrQxwVE"}>
              <Image
                className={styles.discord}
                alt="discord"
                src={"/png/discord.png"}
                width={60}
                height={60}
              />
            </Link>
            <Link
              href={
                "https://twitter.com/Xletter_Labs?t=YrHSixULDYM2HzXg0wEU3w&s=09"
              }>
              <Image
                className={styles.twitter}
                alt="twitter"
                src={"/png/twitter.png"}
                width={60}
                height={60}
              />
            </Link>

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
