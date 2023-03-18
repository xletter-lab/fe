import Content from "@/component/reading/content";
import Title from "@/component/reading/title";
import { useEffect, useState } from "react";
import styles from "./index.module.css";

type Props = {
  NovelId: number;
};

export type ContentType = {
  id: number;
  text: string;
};

export type OptionType = {
  id: number;
  text: string;
  isSelected?: boolean;
};

export type NovelDetailType = {
  id: number;
  contentText: string;
  options?: OptionType[];
};

export default function Reading({ NovelId }: Props) {
  // novel id로 default content, default options 불러오기

  // 불러온 내용 컴포넌트에 넣어주기

  // 유저가 선택지 선택하면 선택 결과 반영하고 그 값에 따라 다음 내용과 options 불러오기

  // 마지막 내용 불러올 때까지 반복
  const [currentContents, setCurrentContent] = useState<
    NovelDetailType[] | undefined
  >();
  const [tempOptionId, setTempOptionId] = useState<number>(1);

  const getNextContent = (selectedOption?: number) => {
    console.log("함수 진입", currentContents);
    // default 이후
    if (currentContents == undefined) {
      console.log("분기 진입");
      setCurrentContent([
        {
          id: tempOptionId,
          contentText:
            "Horem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.",
          options: [
            { id: tempOptionId, text: "선택지1" },
            { id: tempOptionId + 1, text: "선택지2" },
          ],
        },
      ]);
      setTempOptionId(tempOptionId + 2);
      console.log("content 업데이트함");
    }
    // default 내용
    else {
      // 사실 무조건 선택지 골라야 다음 내용 불러옴
      if (selectedOption) {
        console.log("select option", selectedOption);
        // 선택한 선택지 정보 업데이트, is selected 바꾸기
        let lastContent = currentContents.pop();
        lastContent.options = lastContent.options.map((option) => {
          return {
            ...option,
            isSelected: selectedOption === option.id,
          };
        });
        // 다음 내용 불러오기
        setCurrentContent([
          ...currentContents,
          lastContent,
          {
            id: tempOptionId,
            contentText:
              "Horem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.",
            options: [
              { id: tempOptionId, text: "선택지1" },
              { id: tempOptionId + 1, text: "선택지2" },
            ],
          },
        ]);
        // 그냥 옵션 아이디 안 겹치게
      }
    }
  };

  useEffect(() => {
    getNextContent();
  }, []);

  return (
    <div className={styles.novelContentContainer}>
      <Title title="Title" />
      <div>
        {currentContents?.map((item, index) => {
          if (index === currentContents.length - 1) {
            <Content
              key={`novelContent_${item.id}`}
              novelDetail={item}
              getNextContent={getNextContent}
            />;
          }
          return (
            <Content
              key={`novelContent_${item.id}`}
              novelDetail={item}
              getNextContent={getNextContent}
            />
          );
        })}
      </div>
    </div>
  );
}
