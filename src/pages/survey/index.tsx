import { useEffect, useState } from "react";
import styles from "./index.module.css";
import { useRouter } from "next/router";
import SurveyHeader from "@/component/survey/surveyHeader/surveyHeader";
import SurveyFooter from "@/component/survey/surveyFooter/surveyFooter";
import Question from "@/component/survey/question/question";
import { getAllSurvey } from "@/api/api";
import { StoryIndex } from "@/types";

type Props = {};

export type SurveyType = {
  surveyId: number;
  totalQuestionGroups: SurveyQuestionGroupType[];
};

export type SurveyQuestionGroupType = {
  questionGroupId: number;
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

export default function Survey({}: Props) {
  const router = useRouter();
  const queryStoryIndex = router.query.storyIndex ?? "4";

  const [progress, setProgress] = useState<number>(0);
  const [contents, setContents] = useState<SurveyType>();
  const [isDone, setIsDone] = useState<boolean>(false);
  // console.log(router.query, "queryStoryIndex", queryStoryIndex);

  const clickBeforeButton = () => {
    if (progress == 0) {
      // 이전에 읽던 소설 화면으로 넘어간다는 툴팁
      router.push({
        pathname: "/novel",
        query: { storyIndex: queryStoryIndex },
      });
    } else {
      setProgress(progress - 1);
      setIsDone(true);
    }
  };

  const clickNextButton = () => {
    if (progress < 3) {
      setProgress(progress + 1);
      setIsDone(false);
      window.scrollTo(0, 0);
    } else {
      router.push(
        {
          pathname: "/survey/etc",
          query: { contents: JSON.stringify(contents) },
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
                        ? optionId == 28
                          ? 28
                          : typeof q.selected === "number"
                          ? q.selected == 28
                            ? [
                                q.choices.find(
                                  (choice) => choice.id === optionId
                                )?.id,
                              ]
                            : [
                                q.selected,
                                q.choices.find(
                                  (choice) => choice.id === optionId
                                )?.id,
                              ]
                          : q.selected.includes(optionId)
                          ? q.selected.filter((item) => item !== optionId)
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
          return typeof question.selected === "number"
            ? question.selected !== undefined
            : question.selected?.length > 0;
        }
      );

      setIsDone(checkDone.every((data) => data === true));
    }
  };

  useEffect(() => {
    getAllSurvey().then((res) => {
      setContents(res);
    });
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
