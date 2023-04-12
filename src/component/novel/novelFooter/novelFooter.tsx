import { useRouter } from "next/router";
import styles from "./novelFooter.module.css";
type Props = {
  isLast?: boolean;
  getStoryNext?: () => void;
  goSurvey?: () => void;
};
export default function NovelFooter({
  getStoryNext,
  goSurvey,
  isLast = true,
}: Props) {
  const clickNext = () => {
    getStoryNext?.();
  };
  const clickStop = () => {
    goSurvey?.();
  };
  return (
    <div>
      {isLast ? (
        <div className={styles.container}>
          <div>
            <div className={styles.text}>
              &#40;소설 내용 관련 카피 문구&#41;
            </div>
            <div className={styles.sub_text}>
              재미있게 읽으셨다면 평가 설문 참여하고 에어드랍 받아가세요!
            </div>
            <button className={styles.button_next} onClick={clickStop}>
              XLetter 평가하러 가기
            </button>
          </div>
        </div>
      ) : (
        <div className={styles.container}>
          <div>
            <div className={styles.content}>
              <div className={styles.text}>다음 내용이 궁금하다면!</div>
              <button className={styles.button_next} onClick={clickNext}>
                다음 화 : N화 - 회차 제목{" "}
              </button>
            </div>
            <div className={styles.content}>
              <div className={styles.text}>그만 읽고 싶으신가요?😭</div>
              <button className={styles.button_survey} onClick={clickStop}>
                XLetter 평가하러 가기
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
