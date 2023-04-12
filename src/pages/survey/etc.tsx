import SurveyFooter from "@/component/survey/surveyFooter/surveyFooter";
import styles from "./etc.module.css";
import { useRouter } from "next/router";
type Props = {};
export default function ETC({}: Props) {
  const router = useRouter();
  const onClickLeftButton = () => {
    router.push("/survey/");
  };
  const onClickRightButton = () => {
    router.push("/survey/done");
  };
  return (
    <div className={styles.container}>
      <div className={styles.logo}>;XLetter</div>

      <div className={styles.content_container}>
        <div>
          <div className={styles.optional}>선택사항</div>
          <div className={styles.title}>
            기타 의견이 있으시면 자유롭게 남겨주세요.
          </div>
          <div className={styles.sub_text}>
            개선되면 좋을 것 같은 점, 기대되는 부분, 기존 웹소설 플랫폼과
            달랐으면 하는 부분 등등!
          </div>
          <textarea
            className={styles.textarea}
            placeholder="여기에 입력하세요."></textarea>
          <div>
            <div className={styles.title}>지갑주소를 남겨주세요.</div>
            <div className={styles.sub_text}>
              오픈베타 이후 에어드랍 이벤트 진행 예정입니다.
            </div>
            <div className={styles.input_area}>
              <input
                className={styles.input}
                placeholder="지갑 주소를 입력하세요."></input>
            </div>
          </div>
        </div>
      </div>
      <SurveyFooter
        clickLeftButton={onClickLeftButton}
        clickRightButton={onClickRightButton}
        leftButtonText="< 이전"
        rightButtonText="설문 완료하기🎉"
      />
    </div>
  );
}
