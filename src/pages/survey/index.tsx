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
  const clickComplete = () => {
    console.log("버튼클릭", isValid);
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
        options: [
          { id: 1, text: "첫 번째 선택지" },
          { id: 2, text: "두 번째 선택지" },
          { id: 3, text: "세 번째 선택지" },
          { id: 4, text: "기타" },
        ],
        selected: -1,
      },
      {
        id: 2,
        question: "두 번째 질문 내용",
        options: [
          { id: 1, text: "첫 번째 선택지" },
          { id: 2, text: "두 번째 선택지" },
          { id: 3, text: "세 번째 선택지" },
          { id: 4, text: "기타" },
        ],
        selected: -1,
      },
      {
        id: 3,
        question: "세 번째 질문 내용(주관식)",
        content: "",
      },
    ]);
  }, []);
  return (
    <div>
      <div>설문조사</div>
      <div>
        {contents.map((item) => {
          return (
            <Question
              key={`survey_qustion_${item.id}`}
              item={item}
              changeItem={changeOption}
            />
          );
        })}
      </div>
      <Button
        buttonText="설문 완료하기"
        buttonWidth={500}
        onClick={clickComplete}
      />
    </div>
  );
}
