import { useEffect, useState } from "react";
import styles from "./index.module.css";
import { useRouter } from "next/router";
import SurveyHeader from "@/component/survey/surveyHeader/surveyHeader";
import SurveyFooter from "@/component/survey/surveyFooter/surveyFooter";
import Question from "@/component/survey/question/question";

type Props = {};

export type SurveyType = {
  surveyId: number;
  totalQuestionGroups: SurveyQuestionGroupType[];
};

export type SurveyQuestionGroupType = {
  questionGroupId: number;
  isRequired: boolean;
  questions: SurveyQuestionType[];
};

export type SurveyQuestionType = {
  questionId: number;
  questionOrder: number;
  questionType: string;
  questionText: string;
  questionDescription?: string;
  choices: OptionType[];
  selected?: number | number[];
};

export type OptionType = {
  id: number;
  text: string;
};

export const surveyDD: SurveyType = {
  surveyId: 1,
  totalQuestionGroups: [
    {
      questionGroupId: 1,
      isRequired: true,
      questions: [
        {
          questionId: 1,
          questionOrder: 1,
          questionType: "single",
          questionText: "테스터님의 연령대를 선택해주세요.",
          questionDescription: undefined,
          choices: [
            {
              id: 1,
              text: "20~24세",
            },
            {
              id: 2,
              text: "25~29세",
            },
            {
              id: 3,
              text: "30~34세",
            },
            {
              id: 4,
              text: "35~39세",
            },
            {
              id: 5,
              text: "40대 이상",
            },
          ],
        },
        {
          questionId: 2,
          questionOrder: 2,
          questionType: "single",
          questionText: "테스터님의 성별을 선택해주세요.",
          questionDescription: null,
          choices: [
            {
              id: 6,
              text: "여성",
            },
            {
              id: 7,
              text: "남성",
            },
            {
              id: 8,
              text: "기타",
            },
          ],
        },
      ],
    },
    {
      questionGroupId: 2,
      isRequired: true,
      questions: [
        {
          questionId: 3,
          questionOrder: 1,
          questionType: "single",
          questionText: "웹소설을 즐겨 읽으시나요?",
          questionDescription: null,
          choices: [
            {
              id: 9,
              text: "매일",
            },
            {
              id: 10,
              text: "일주일에 3~4번",
            },
            {
              id: 11,
              text: "일주일에 1~2번",
            },
            {
              id: 12,
              text: "1개월에 2~3번",
            },
            {
              id: 13,
              text: "1개월에 1번 이하",
            },
          ],
        },
        {
          questionId: 4,
          questionOrder: 2,
          questionType: "multiple",
          questionText:
            "XLetter에서 만나보고 싶은 장르가 있나요? (다중 선택 가능)",
          questionDescription: null,
          choices: [
            {
              id: 14,
              text: "로맨스",
            },
            {
              id: 15,
              text: "로맨스 판타지",
            },
            {
              id: 16,
              text: "BL",
            },
            {
              id: 17,
              text: "GL",
            },
            {
              id: 18,
              text: "판타지",
            },
            {
              id: 19,
              text: "현대 판타지",
            },
            {
              id: 20,
              text: "무협",
            },
            {
              id: 21,
              text: "미스터리",
            },
            {
              id: 22,
              text: "라이트 노벨",
            },
            {
              id: 23,
              text: "기타",
            },
          ],
        },
        {
          questionId: 5,
          questionOrder: 3,
          questionType: "multiple",
          questionText:
            "평소에 주로 이용하시는 플랫폼은 어디인가요? (다중 선택 가능)",
          questionDescription: null,
          choices: [
            {
              id: 24,
              text: "네이버 웹소설 / 시리즈",
            },
            {
              id: 25,
              text: "카카오 페이지",
            },
            {
              id: 26,
              text: "포스타입",
            },
            {
              id: 27,
              text: "리디북스",
            },
            {
              id: 28,
              text: "이용해본 적이 없다",
            },
            {
              id: 29,
              text: "조아라",
            },
            {
              id: 30,
              text: "문피아",
            },
            {
              id: 31,
              text: "노벨피아",
            },
            {
              id: 32,
              text: "조아라",
            },
          ],
        },
      ],
    },
    {
      questionGroupId: 3,
      isRequired: true,
      questions: [
        {
          questionId: 6,
          questionOrder: 1,
          questionType: "single",
          questionText: "인터렉티브형(투표형) 전개 방식이 소설 감상에",
          questionDescription: null,
          choices: [
            {
              id: 33,
              text: "더 몰입하게 한다.",
            },
            {
              id: 34,
              text: "방해가 된다.",
            },
            {
              id: 35,
              text: "아무 영향을 미치지 않는다.",
            },
          ],
        },
        {
          questionId: 7,
          questionOrder: 2,
          questionType: "single",
          questionText: "선택지 선택 뒤, 전개 내용을 읽은 후",
          questionDescription: null,
          choices: [
            {
              id: 36,
              text: "선택지를 다시 선택하고 싶었다.",
            },
            {
              id: 37,
              text: "다른 선택지 내용도 궁금하다.",
            },
            {
              id: 38,
              text: "별 감흥 없다.",
            },
          ],
        },
        {
          questionId: 8,
          questionOrder: 3,
          questionType: "single",
          questionText: "투표 방식에 대한 테스터님의 흥미도는",
          questionDescription: null,
          choices: [
            {
              id: 39,
              text: "매우 재미있다.",
            },
            {
              id: 40,
              text: "재미있다.",
            },
            {
              id: 41,
              text: "그저 그렇다.",
            },
            {
              id: 42,
              text: "재미없다.",
            },
            {
              id: 43,
              text: "매우 재미없다.",
            },
          ],
        },
      ],
    },
    {
      questionGroupId: 4,
      isRequired: true,
      questions: [
        {
          questionId: 9,
          questionOrder: 1,
          questionType: "single",
          questionText: "웹소설 유료 결제 경험이 있나요?",
          questionDescription: null,
          choices: [
            {
              id: 44,
              text: "예",
            },
            {
              id: 45,
              text: "아니오",
            },
          ],
        },
        {
          questionId: 10,
          questionOrder: 2,
          questionType: "single",
          questionText: "유료 결제 빈도는 어떻게 되나요?",
          questionDescription: null,
          choices: [
            {
              id: 46,
              text: "거의 매일",
            },
            {
              id: 47,
              text: "일주일에 3~4번",
            },
            {
              id: 48,
              text: "일주일에 1~2번",
            },
            {
              id: 49,
              text: "1개월에 2~3번",
            },
            {
              id: 50,
              text: "1개월에 1번 이하",
            },
            {
              id: 51,
              text: "기다무(기다리면 무료), 출석 이벤트, 광고 등을 이용한다.",
            },
            {
              id: 52,
              text: "유료 결제 경험이 없다.",
            },
          ],
        },
        {
          questionId: 11,
          questionOrder: 3,
          questionType: "single",
          questionText: "월 평균 지출 비용은 어떻게 되나요?",
          questionDescription: null,
          choices: [
            {
              id: 53,
              text: "5천원~1만원 미만",
            },
            {
              id: 54,
              text: "1~3만원 미만",
            },
            {
              id: 55,
              text: "3~5만원 미만",
            },
            {
              id: 56,
              text: "5~10만원 미만",
            },
            {
              id: 57,
              text: "10만원 이상",
            },
            {
              id: 58,
              text: "유료 결제를 하지 않는다.",
            },
          ],
        },
      ],
    },
    {
      questionGroupId: 5,
      isRequired: false,
      questions: [
        {
          questionId: 12,
          questionOrder: 1,
          questionType: "form",
          questionText: "기타 의견이 있으시면 자유롭게 남겨주세요.",
          questionDescription:
            "개선되면 좋을 것 같은 점, 기대되는 부분, 기존 웹소설 플랫폼과 달랐으면 하는 부분 등등!",
          choices: [],
        },
        {
          questionId: 13,
          questionOrder: 2,
          questionType: "form",
          questionText: "지갑주소를 남겨주세요.",
          questionDescription: "오픈베타 이후 에어드랍 이벤트 진행 예정입니다.",
          choices: [],
        },
      ],
    },
  ],
};
export default function Survey({}: Props) {
  const router = useRouter();
  const [progress, setProgress] = useState<number>(0);
  const [contents, setContents] = useState<SurveyType>();
  const [isDone, setIsDone] = useState<boolean>(false);

  const clickBeforeButton = () => {
    setProgress(progress - 1);
  };

  const clickNextButton = () => {
    if (progress < 3) {
      setProgress(progress + 1);
    } else {
      router.push(
        {
          pathname: "/survey/etc",
          query: { progress },
        },
        "/survey/etc"
      );
    }
  };

  const answerQuestion = (
    questionId: number,
    optionId: number,
    answer?: string
  ) => {
    if (answer !== undefined) {
    } else {
      // 객관식
      const newContent = {
        ...contents,
        totalQuestionGroups: contents.totalQuestionGroups.map((questions) => {
          return {
            ...questions,
            questions: questions.questions.map((q) => {
              if (questionId === q.questionId) {
                if (q.questionType === "multiple") {
                  return {
                    ...q,
                    selected:
                      q.selected !== undefined
                        ? typeof q.selected === "number"
                          ? [
                              q.selected,
                              q.choices.find((choice) => choice.id === optionId)
                                ?.id,
                            ]
                          : [
                              ...q.selected,
                              q.choices.find((choice) => choice.id === optionId)
                                ?.id,
                            ]
                        : [
                            q.choices.find((choice) => choice.id === optionId)
                              ?.id,
                          ],
                  };
                } else {
                  return {
                    ...q,
                    selected: q.choices.find((choice) => choice.id === optionId)
                      ?.id,
                  };
                }
              } else {
                return q;
              }
            }),
          };
        }),
      };
      setContents(newContent);
      const checkDone = newContent.totalQuestionGroups[progress].questions.map(
        (question) => {
          return question.selected !== undefined;
        }
      );
      console.log("check", checkDone);
      setIsDone(checkDone.every((data) => data === true));
    }
  };

  useEffect(() => {
    setContents(surveyDD);
  }, []);

  return (
    <div className={styles.survey_container}>
      <SurveyHeader progress={progress} />

      <Question
        key={`survey_content_${contents?.surveyId}`}
        progress={progress}
        data={contents?.totalQuestionGroups[progress]}
        answerQuestion={answerQuestion}
      />

      <SurveyFooter
        progress={progress}
        isDone={isDone}
        leftButtonText={"< 이전"}
        rightButtonText={`${progress > 3 ? "설문 완료하기🎉" : "다음 >"}`}
        clickLeftButton={clickBeforeButton}
        clickRightButton={clickNextButton}
      />
    </div>
  );
}
