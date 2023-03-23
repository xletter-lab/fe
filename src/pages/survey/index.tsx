import Button from "@/component/common/button/Button";
import Question from "@/component/survey/question";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "./index.module.css";
type Props = {};
export type SurveyType = {
  id: number;
  question: string;
  options?: OptionType[];
  selected?: number;
  content?: string;
  type?: number;
  questionType: number;
};

export type OptionType = {
  id: number;
  text: string;
};
export default function Survey({}: Props) {
  const [contents, setContents] = useState<SurveyType[] | undefined>([]);
  const isValid = contents.every((item) => {
    if (item?.selected != undefined) {
      return item.selected > -1;
    } else {
      return item.content?.length > 0;
    }
  });
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);

  const router = useRouter();
  const changeOption = ({
    questionId,
    selectedOptionId,
    enteredContent,
  }: {
    questionId: number;
    selectedOptionId?: number;
    enteredContent?: string;
  }) => {
    setContents(
      contents.map((item) => {
        if (item.id === questionId) {
          if (item.options != undefined) {
            console.log("selected option id", selectedOptionId);
            return {
              ...item,
              selected: selectedOptionId,
            };
          } else {
            return {
              ...item,
              content: enteredContent,
            };
          }
        } else {
          return item;
        }
      })
    );
  };

  const clickBack = () => {
    setCurrentQuestion(currentQuestion - 1);
  };
  const clickNext = () => {
    setCurrentQuestion(currentQuestion + 1);
    contents.forEach((item) => {
      if (item?.selected != undefined) {
        console.log(item.selected > -1);
      } else {
        console.log(item.content?.length > 0);
      }
    });

    if (isValid) {
      router.push("./survey/done");
    }
  };

  console.log("contenst", contents);

  useEffect(() => {
    setContents([
      {
        id: 1,
        question: "첫 번째 질문 내용",
        questionType: 1,
        options: [
          { id: 1, text: "A,B 다 같이 죽는다. C는 다시 살아난다.  " },
          { id: 2, text: "A,B 다 같이 죽는다. C는 다시 살아난다.  " },
          { id: 3, text: "A,B 다 같이 죽는다. C는 다시 살아난다.  " },
          { id: 4, text: "A,B 다 같이 죽는다. C는 다시 살아난다.  " },
        ],
        selected: -1,
      },
      {
        id: 2,
        question: "두 번째 질문 내용",
        questionType: 1,
        options: [
          { id: 1, text: "A,B 다 같이 죽는다. C는 다시 살아난다.  " },
          { id: 2, text: "A,B 다 같이 죽는다. C는 다시 살아난다.  " },
          { id: 3, text: "A,B 다 같이 죽는다. C는 다시 살아난다.  " },
          { id: 4, text: "A,B 다 같이 죽는다. C는 다시 살아난다.  " },
        ],
        selected: -1,
      },
      {
        id: 3,
        question: "세 번째 질문 내용",
        questionType: 2,
        content: "",
      },
    ]);
  }, []);

  return (
    <div>
      <div className="center">
        <input type={"range"} />
        <input type={"range"} />
      </div>

      <div>
        <Question
          key={`survey_qustion_${contents[currentQuestion]?.id}`}
          item={contents[currentQuestion]}
          changeItem={changeOption}
        />
      </div>
      <div className="center">
        <Button
          buttonText="Back"
          className={`button ${styles.back}`}
          onClick={clickBack}
        />
        <Button
          buttonText="Next"
          className={`button ${styles.next}`}
          onClick={clickNext}
        />
      </div>
    </div>
  );
}
