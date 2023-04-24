import { SurveyQuestionGroupType, SurveyType } from "@/pages/survey";
import styles from "./Question.module.css";
import Button from "../button/button";

type Props = {
  progress: number;
  data?: SurveyQuestionGroupType;
  answerQuestion: (anwser: string | number) => void;
};
export default function Question({ progress, data, answerQuestion }: Props) {
  return (
    <div className={styles.container}>
      {data?.questions?.map((question, index) => {
        return (
          <div
            key={`question_${question.questionId}`}
            className={styles.question_group}>
            <div>{`Q${progress + 1}-${index + 1}`}</div>
            <div>{question.questionText}</div>
            <div>
              {question.choices.map((option) => {
                return (
                  <Button
                    key={`qeustion_${question.questionId}_option_${option.id}`}
                    text={option.text}
                    withRadio
                    quetionId={`${option.id}`}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
