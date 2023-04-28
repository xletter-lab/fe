import SurveyFooter from "@/component/survey/surveyFooter/surveyFooter";
import styles from "./etc.module.css";
import { Router, useRouter } from "next/router";
import React, { useState } from "react";
import { postSurveyResult, surveyResultType } from "@/api/api";
import Image from "next/image";
type Props = {};
export default function ETC({}: Props) {
  const router = useRouter();
  const email = router.query.email?.toString();
  const content = JSON.parse(router?.query?.contents?.toString() ?? "{}");
  console.log(content);
  const [text, setText] = useState<string>("");
  const [wallet, setWallet] = useState<string>("");
  const onChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const onChangeWallet = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWallet(e.target.value);
  };
  const onClickLeftButton = () => {
    router.push("/survey/");
  };
  const onClickRightButton = () => {
    const temp = {
      sid: content.surveyId,
      res: [
        ...content.totalQuestionGroups
          ?.map((data) => {
            return data.questions.map((q) => {
              if (typeof q.selected === "number") {
                return {
                  questionId: q.questionId,
                  responseChoice: q.selected,
                };
              } else {
                return q.selected
                  ?.map((answer) => {
                    return {
                      questionId: q.questionId,
                      responseChoice: answer,
                    };
                  })
                  .flat();
              }
            });
          })
          .flat(),
        { questionId: 12, resonseText: text },
        { questionId: 13, resonseText: wallet },
      ]
        .flat()
        .filter((item) => item !== undefined),
    };

    postSurveyResult(temp.sid, email, temp.res).then((res) => {
      console.log(res);
    });

    router.push("/survey/done");
  };
  return (
    <div className={styles.container}>
      <Image
        src={"/png/logo.png"}
        alt="logo"
        width={125}
        height={80}
        className={styles.logo}
      />

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
            value={text}
            onChange={onChangeContent}
            placeholder="여기에 입력하세요."></textarea>
          <div>
            <div className={styles.title}>지갑주소를 남겨주세요.</div>
            <div className={styles.sub_text}>
              오픈베타 이후 에어드랍 이벤트 진행 예정입니다.
            </div>
            <div className={styles.input_area}>
              <input
                value={wallet}
                onChange={onChangeWallet}
                className={styles.input}
                placeholder="지갑 주소를 입력하세요."></input>
            </div>
          </div>
        </div>
      </div>
      <SurveyFooter
        isDone={true}
        progress={4}
        clickLeftButton={onClickLeftButton}
        clickRightButton={onClickRightButton}
        leftButtonText="< 이전"
        rightButtonText="설문 완료하기🎉"
      />
    </div>
  );
}
