import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import styles from "./index.module.css";
import NovelHeader from "@/component/novel/NovelHeader";
import NovelFooter from "@/component/novel/NovelFooter";
import Content from "@/component/novel/Content";

type Props = {};

export type ContentDetailType = {
  contentIndex?: number;
  text: string;
  options?: OptionType[];
};

export type OptionType = {
  optionId?: number;
  optionContent?: string;
  isFirst?: boolean;
  isSelected?: boolean;
};

export const dummyContent =
  "누구든지 체포 또는 구속을 당한 때에는 적부의 심사를 법원에 청구할 권리를 가진다. 타인의 범죄행위로 인하여 생명·신체에 대한 피해를 받은 국민은 법률이 정하는 바에 의하여 국가로부터 구조를 받을 수 있다. 이 헌법시행 당시의 법령과 조약은 이 헌법에 위배되지 아니하는 한 그 효력을 지속한다. 모든 국민은 신체의 자유를 가진다. 누구든지 법률에 의하지 아니하고는 체포·구속·압수·수색 또는 심문을 받지 아니하며, 법률과 적법한 절차에 의하지 아니하고는 처벌·보안처분 또는 강제노역을 받지 아니한다. ";
export const dummyOptionContent = "A가 지금 당장 죽는다.";

export default function Novel({}: Props) {
  const router = useRouter();
  console.log("router", router.query);
  const lastContentRef = useRef<HTMLDivElement>(null);
  const [data, setData] = useState<ContentDetailType[]>([]);
  const [storyIndex, setStoryIndex] = useState<number>(0);

  const clickOption = (targetContentId: number, newData: ContentDetailType) => {
    // 선택지 업데이트하고 결과 전송하고
    const updatedData = data.map((content) => {
      if (content.contentIndex === targetContentId) {
        return newData;
      } else {
        return content;
      }
    });
    // 다음 내용 불러오기
    const newContent: ContentDetailType = {
      text: dummyContent,
      contentIndex: data.length,
      options:
        data.length === 1
          ? [
              { optionContent: dummyOptionContent, optionId: 2 },
              { optionContent: dummyOptionContent, optionId: 3 },
            ]
          : undefined,
    };
    setData([...updatedData, newContent]);
  };

  const getStoryBefore = () => {
    // title, email, index
    setStoryIndex(storyIndex - 1);
  };

  const getStoryNext = () => {
    // title, email, index
    setStoryIndex(storyIndex + 1);
  };

  const goSurvey = () => {
    router.push("/survey");
  };

  useEffect(() => {
    // 첫 번째 내용 불러오기
    setData([
      {
        text: dummyContent,
        contentIndex: 0,
        options: [
          {
            isFirst: true,
            optionContent: dummyOptionContent,
            optionId: 0,
          },
          {
            isFirst: false,
            optionContent: dummyOptionContent,
            optionId: 1,
          },
        ],
      },
    ]);
  }, []);

  return (
    <div>
      <NovelHeader
        novelTitle="내 최애 찾기 프로젝트 by 청몽채화"
        storyTitle="1. 국무총리를 국무위원의 해임을"
        storyIndex={storyIndex}
        getStoryBefore={getStoryBefore}
        getStoryNext={getStoryNext}
      />
      <div>
        <div>회차 제목</div>
        <div>
          {data.map((content) => {
            return (
              // <Content
              //   ref={lastContentRef}
              //   key={`content_${content.contentIndex}`}
              //   data={content}
              //   clickOption={clickOption}
              // />
              <div key={`content_${content.contentIndex}`}>Content</div>
            );
          })}
        </div>
        {data.length === 3 && (
          <NovelFooter
            isLast={storyIndex === 2}
            getStoryNext={getStoryNext}
            goSurvey={goSurvey}
          />
        )}
      </div>
    </div>
  );
}
