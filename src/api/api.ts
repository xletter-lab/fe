import { Option } from '@/pages/novel';
import axios from 'axios';

export const getAllSurvey = async () => {
  return await axios.get('https://api.xletter.io/survey/current').then((res) => {
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

export const postSurveyResult = async (surveyId: number, email: string, responses: surveyResultType[]) => {
  console.log('id', surveyId);
  console.log('emil', email);
  console.log('res', responses);
  return await axios.post('https://api.xletter.io/survey/submit', {
    surveyId,
    email,
    responses,
  });
};

export const getNovelStory = async (email: string, story: number, option?: Option) => {
  try {
    return await axios.get(`https://api.xletter.io/novel/${email}/${story}/${option}`).then((res) => {
      console.log(res.data.result);
      return res.data.result;
    });
  } catch (e) {
    console.log(e);
  }
};
