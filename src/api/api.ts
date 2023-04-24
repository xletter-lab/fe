import { Option } from "@/pages/novel";
import axios from "axios";

export const getAllSurvey = async () => {
  return await axios
    .get("http://43.201.113.249:3000/survey/current")
    .then((res) => {
      console.log(res);
      return {
        surveyId: res.data?.[0].surveyId,
        totalQuestionGroups: res.data?.[0].totalQuestionGroups.map((group) => {
          return {
            questionGroupId: group.questionGroupId,
            questions: group.questions.map((question) => {
              return {
                questionId: question.questionId,
                questionOrder: question.questionOrder,
                questionType: question.questionType,
                questionText: question.questionText,
                questionDescription: question.questionDescription,
                choices: question.choices.map((choice) => {
                  return {
                    id: choice.choiceId,
                    text: choice.choiceText,
                  };
                }),
              };
            }),
          };
        }),
      };
    });
};

export type surveyResultType = {
  questionId: number;
  responseChoice?: number;
  responseText?: string;
};

export const postSurveyResult = async (
  surveyId: number,
  email: string,
  responses: surveyResultType[]
) => {
  console.log("id", surveyId);
  console.log("emil", email);
  console.log("res", responses);
  return await axios.post("http://43.201.113.249:3000/survey/submit", {
    surveyId,
    email,
    responses,
  });
};

export const getNovelStory = async (
  email: string,
  story: number,
  option?: Option
) => {
  return await axios
    .get(`http://43.201.113.249:3000/novel/${email}/${story}/${option}`)
    .then((res) => {
      console.log(res.data.result);
      return res.data.result;
    });
};
