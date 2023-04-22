import { useEffect, useState } from "react";
import styles from "./index.module.css";
import { useRouter } from "next/router";
import SurveyHeader from "@/component/survey/surveyHeader/surveyHeader";
import SurveyFooter from "@/component/survey/surveyFooter/surveyFooter";
import Question from "@/component/survey/question/question";

type Props = {};
export type SurveyType = {
  id: number;
  question: string;
  options?: OptionType[];
  selected?: number;
  withRadio?: boolean;
};

export type OptionType = {
  id: number;
  text: string;
};
export default function Survey({}: Props) {
  const router = useRouter();
  const [progress, setProgress] = useState<number>(0);
  const [contents, setContents] = useState<SurveyType[]>([]);

  const getSurveyQuestion = (currentProgress: number) => {
    setProgress(progress + 1);
    setContents([
      {
        id: 0,
        question: "테스터님의 연령대를 선택해주세요.",
        options: [
          { id: 0, text: "20~24세" },
          { id: 1, text: "25~29세" },
          { id: 2, text: "30~34세" },
          { id: 3, text: "35~39세" },
          { id: 4, text: "40대 이상" },
        ],
        withRadio: true,
      },
      {
        id: 1,
        question: "테스터님의 성별을 선택해주세요.",
        options: [
          { id: 0, text: "여성" },
          { id: 1, text: "남성" },
          { id: 2, text: "기타" },
        ],
        withRadio: true,
      },
    ]);
  };

  const clickBeforeButton = () => {
    setProgress(progress - 1);
    // 이전 질문 불러오기
  };
  const clickNextButton = () => {
    if (progress < 3) {
      setProgress(progress + 1);
    } else {
      router.push("/survey/etc");
    }
  };

  useEffect(() => {
    // get survey question
    getSurveyQuestion(progress);
  }, []);

  return (
    <div className={styles.survey_container}>
      <SurveyHeader />
      {contents.map((data) => {
        return <Question key={`survey_content_${data.id}`} data={data} />;
      })}
      <SurveyFooter
        leftButtonText={"< 이전"}
        rightButtonText={`${progress > 3 ? "설문 완료하기🎉" : "다음"}`}
        clickLeftButton={clickBeforeButton}
        clickRightButton={clickNextButton}
      />
    </div>
  );
}
