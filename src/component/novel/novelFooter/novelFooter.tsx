import { useRouter } from "next/router";
import styles from "./novelFooter.module.css";
type Props = {
  isLastStory?: boolean;
  getStoryNext?: () => void;
  goSurvey?: () => void;
  nextStoryIndex?: number;
  nextStoryTitle?: string;
  storyIndex: number;
};
export default function NovelFooter({
  getStoryNext,
  goSurvey,
  storyIndex,
  isLastStory = false,
  nextStoryIndex = 1,
  nextStoryTitle = "",
}: Props) {
  const clickNext = () => {
    getStoryNext?.();
  };
  const clickStop = () => {
    goSurvey?.();
  };
  return (
    <div className={styles.novel_footer_container}>
      {isLastStory ? (
        <div className={styles.container}>
          <div>
            <div className={styles.text}>
              ‘위험한 인터뷰’를 끝까지 읽어주신 여러분 감사합니다🙇‍♀
            </div>
            <div className={styles.sub_text}>
              재미있게 읽으셨다면 평가 설문 참여하고 에어드랍 받아가세요!
            </div>
            <div className={styles.footer_button}>
              <button className={styles.button_next} onClick={clickStop}>
                XLetter 평가하러 가기
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.container}>
          <div>
            <div className={styles.content}>
              <div className={styles.text}>다음 내용이 궁금하다면!</div>
              <button className={styles.button_next} onClick={clickNext}>
                {`다음 화 : ${nextStoryIndex}화 - ${nextStoryTitle}`}
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
