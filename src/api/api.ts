import { Option, surveyResultType } from "@/types";
import axios from "axios";

axios.defaults.baseURL = "https://api.xletter.io";

export const getAllSurvey = async () => {
  return await axios.get("/survey/current").then((res) => {
    // console.log(res);
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

export const postSurveyResult = async (
  surveyId: number,
  email: string,
  responses: surveyResultType[]
) => {
  // console.log("id", surveyId);
  // console.log("emil", email);
  // console.log("res", responses);
  return await axios.post("/survey/submit", {
    surveyId,
    email,
    responses,
  });
};

export const getNovelStory = async ({
  email,
  story,
  option,
}: {
  email: string;
  story: number;
  option: Option;
}) => {
  // console.log("meail", email, "story", story, "option", option);
  return await axios
    .get(`/novel/${email}/${story}/${option}`, {
      // withCredentials: true,
    })
    .then((res) => {
      if (res.data.result === null) {
        throw new Error("Invalid access");
      } else {
        return res.data.result;
      }
    })
    .catch((e) => {
      // console.log(e);
      throw new Error("error");
    });
};
export const getNovelTitle = async ({ idx }: { idx: number }) => {
  // console.log(idx);
  return await axios
    .get(`/novel-title/${idx}`)
    .then((res) => {
      if (res.data.result === null) {
        throw new Error("Invalid access");
      } else {
        // console.log(res.data.result);
        return res.data.result;
      }
    })
    .catch((e) => {
      // console.log(e);
      throw new Error("error");
    });
};

export const getValidUser = async ({ email }: { email: string }) => {
  return await axios
    .get(`valid-user/${email}`)
    .then((res) => {
      if (res.data.result === null) {
        throw new Error("Invalid access");
      } else {
        return res.data.result;
      }
    })
    .catch((e) => {
      // console.log(e);
      throw new Error("error");
    });
};
