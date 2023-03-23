import Content from "@/component/reading/content";
import Last from "@/component/reading/last";
import Title from "@/component/reading/title";
import { useEffect, useRef, useState } from "react";
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

export const dummyContent =
  "누구든지 체포 또는 구속을 당한 때에는 적부의 심사를 법원에 청구할 권리를 가진다. 타인의 범죄행위로 인하여 생명·신체에 대한 피해를 받은 국민은 법률이 정하는 바에 의하여 국가로부터 구조를 받을 수 있다. 이 헌법시행 당시의 법령과 조약은 이 헌법에 위배되지 아니하는 한 그 효력을 지속한다. 모든 국민은 신체의 자유를 가진다. 누구든지 법률에 의하지 아니하고는 체포·구속·압수·수색 또는 심문을 받지 아니하며, 법률과 적법한 절차에 의하지 아니하고는 처벌·보안처분 또는 강제노역을 받지 아니한다. ";
export default function Reading({ NovelId }: Props) {
  const lastContentRef = useRef<HTMLDivElement>(null);
  // novel id로 default content, default options 불러오기

  // 불러온 내용 컴포넌트에 넣어주기

  // 유저가 선택지 선택하면 선택 결과 반영하고 그 값에 따라 다음 내용과 options 불러오기

  // 마지막 내용 불러올 때까지 반복
  const [currentContents, setCurrentContent] = useState<
    NovelDetailType[] | undefined
  >();
  const [tempOptionId, setTempOptionId] = useState<number>(1);

  const getLastContent = (selectedOption?: number) => {
    console.log("last content");
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
        id: tempOptionId + 1,
        contentText: dummyContent,
      },
    ]);
  };

  const getNextContent = (selectedOption?: number) => {
    // default 이후
    if (currentContents == undefined) {
      console.log("분기 진입");
      setCurrentContent([
        {
          id: tempOptionId,
          contentText: dummyContent,
          options: [
            { id: tempOptionId, text: "A가 지금 당장 죽는다" },
            {
              id: tempOptionId + 1,
              text: "A,B 다 같이 죽는다. C는 다시 살아난다",
            },
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
            contentText: dummyContent,
            options: [
              { id: tempOptionId, text: "A가 지금 당장 죽는다" },
              {
                id: tempOptionId + 1,
                text: "A,B 다 같이 죽는다. C는 다시 살아난다",
              },
            ],
          },
        ]);
        // 그냥 옵션 아이디 안 겹치게
        setTempOptionId(tempOptionId + 2);
      }
    }
  };

  console.log("current content", currentContents);

  useEffect(() => {
    getNextContent();
  }, []);

  return (
    <div>
      <div>
        <div className={styles.novelContentContainer}>
          <div className={styles.titleContentContainer}>
            {/*title*/}
            <div className={styles.ContentContainer}>
              <Title title="회차 제목" />
            </div>
            {/*content*/}
            <div>
              {currentContents?.map((item, index) => {
                console.log(
                  "item index",
                  index,
                  "content length",
                  currentContents.length
                );
                if (index === currentContents.length - 1) {
                  return (
                    <Content
                      ref={lastContentRef}
                      key={`novelContent_${item.id}_${index}`}
                      novelDetail={item}
                      getNextContent={
                        index === 1 ? getLastContent : getNextContent
                      }
                      isLast={index === 2}
                    />
                  );
                } else {
                  return (
                    <Content
                      key={`novelContent_${item.id}_${index}`}
                      novelDetail={item}
                      getNextContent={getNextContent}
                      isLast={index === 2}
                    />
                  );
                }
              })}
            </div>
          </div>
        </div>
        {/*last*/}
        {currentContents?.length > 2 && <Last />}
      </div>
    </div>
  );
}
