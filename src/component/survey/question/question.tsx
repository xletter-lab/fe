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
                  question.choices.length > 7
                    ? styles.question_options_wrapper_long
                    : ""
                }`}>
                {question.choices.map((option, index) => {
                  return (
                    <Button
                      key={`qeustion_${question.questionId}_option_${option.id}`}
                      text={option.text}
                      withRadio={question.questionType == "single"}
                      className={
                        question.choices.length > 7 ? styles.half_button : ""
                      }
                      quetionId={
                        question.questionType === "multiple"
                          ? option.id
                          : question.questionId
                      }
                      selected={
                        typeof question.selected === "number"
                          ? question.selected === option.id
                          : question.selected?.includes(option.id)
                      }
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
