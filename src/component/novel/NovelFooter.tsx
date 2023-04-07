import { useRouter } from "next/router";
import styles from "./NovelFooter.module.css";
type Props = {
  isLast?: boolean;
  getStoryNext?: () => void;
  goSurvey?: () => void;
};
export default function NovelFooter({
  getStoryNext,
  goSurvey,
  isLast = false,
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
        <div>
          <div>&#40;소설 내용 관련 카피 문구&#40;</div>
          <div>재미있게 읽으셨다면 평가 설문 참여하고 에어드랍 받아가세요!</div>
          <button onClick={clickStop}>XLetter 평가하러 가기</button>
        </div>
      ) : (
        <div>
          <div>
            <div>다음 내용이 궁금하다면!</div>
            <button onClick={clickNext}>다음 화 : N화 - 회차 제목 </button>
          </div>
          <div>
            <div>그만 읽고 싶으신가요?😭</div>
            <button onClick={clickStop}>XLetter 평가하러 가기</button>
          </div>
        </div>
      )}
    </div>
  );
}
