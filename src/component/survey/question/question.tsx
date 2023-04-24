import { SurveyQuestionGroupType, SurveyType } from "@/pages/survey";
import styles from "./question.module.css";
import Button from "../button/button";
import { useState } from "react";

type Props = {
  progress: number;
  data: SurveyQuestionGroupType;
  answerQuestion: (
    questionId: number,
    optionId: number,
    answer?: string
  ) => void;
};
export default function Question({ progress, data, answerQuestion }: Props) {
  console.log(data);

  const clickButton = (questionId: number, optionId: number) => {
    answerQuestion(questionId, optionId);
  };

  return (
    <div className={styles.container}>
      {data?.questions?.map((question, index) => {
        return (
          <div
            key={`question_${question.questionId}`}
            className={styles.question_group}>
            <div className={styles.question_number}>{`Q${progress + 1}-${
              index + 1
            }`}</div>
            <div className={styles.question_text}>{question.questionText}</div>
            <div className={styles.question_options}>
              <div
                className={`${styles.question_options_wrapper} ${
                  question.choices.length > 5 &&
                  styles.question_options_wrapper_long
                }`}>
                {question.choices.map((option, index) => {
                  return (
                    <Button
                      key={`qeustion_${question.questionId}_option_${option.id}`}
                      text={option.text}
                      withRadio
                      className={
                        question.choices.length > 5 && styles.half_button
                      }
                      quetionId={
                        question.questionType === "multiple"
                          ? option.id
                          : question.questionId
                      }
                      selected={question.selected === option.id}
                      onClickButton={() =>
                        clickButton(question.questionId, option.id)
                      }
                    />
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
