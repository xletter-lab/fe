import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import styles from "./index.module.css";
import NovelHeader from "@/component/novel/novelHeader/novelHeader";
import NovelFooter from "@/component/novel/novelFooter/novelFooter";
import Content from "@/component/novel/content/content";

type Props = {};

export type StoryType = {
  contents: string[];
  selected: Option;
  withOption: boolean;
  title: string;
  options?: OptionType[];
};

export type OptionType = {
  optionId: Option;
  optionText: string;
};

export enum Option {
  None = "NONE",
  A = "A",
  B = "B",
}

export enum StoryIndex {
  Story1,
  Story2,
  Story3,
  Story4,
  Story5,
}
export const dummyContent =
  "누구든지 체포 또는 구속을 당한 때에는 적부의 심사를 법원에 청구할 권리를 가진다. 타인의 범죄행위로 인하여 생명·신체에 대한 피해를 받은 국민은 법률이 정하는 바에 의하여 국가로부터 구조를 받을 수 있다. 이 헌법시행 당시의 법령과 조약은 이 헌법에 위배되지 아니하는 한 그 효력을 지속한다. 모든 국민은 신체의 자유를 가진다. 누구든지 법률에 의하지 아니하고는 체포·구속·압수·수색 또는 심문을 받지 아니하며, 법률과 적법한 절차에 의하지 아니하고는 처벌·보안처분 또는 강제노역을 받지 아니한다. ";
export const dummyOptionContent = "A가 지금 당장 죽는다.";

export const unselectedOptionDD = {
  contents: [dummyContent],
  title: "회차 제목",
  withOption: true,
  options: [
    { optionId: Option.A, optionText: dummyOptionContent },
    { optionId: Option.B, optionText: dummyOptionContent },
  ],
  selected: Option.None,
};
export const selectedOptionDD = {
  contents: [dummyContent, dummyContent],
  title: "회차 제목",
  withOption: true,
  options: [
    { optionId: Option.A, optionText: dummyOptionContent },
    { optionId: Option.B, optionText: dummyOptionContent },
  ],
  selected: Option.A,
};
export const noOptionDD = {
  contents: [dummyContent],
  title: "회차 제목",
  withOption: false,
  selected: Option.None,
};

const withOptionStoryIndex = [
  StoryIndex.Story2,
  StoryIndex.Story3,
  StoryIndex.Story5,
];

export default function Novel({}: Props) {
  const router = useRouter();
  const email = router.query.email;
  console.log("email", email);
  const [data, setData] = useState<StoryType>(noOptionDD);
  const [storyIndex, setStoryIndex] = useState<StoryIndex>(StoryIndex.Story1);
  const withFooter =
    !data.withOption || (data.withOption && data.selected != Option.None);

  const onClickOption = (option: Option) => {
    // 선택지 업데이트하고 결과 전송하고
    // 다음 내용 불러오기
    // 데이터세팅
    setData({
      ...data,
      selected: option,
      contents: [...data.contents, dummyContent],
    });
  };

  const getStoryBefore = () => {
    // title, email, index
    if (storyIndex > StoryIndex.Story1) setStoryIndex(storyIndex - 1);
  };

  const getStoryNext = () => {
    // title, email, index
    if (storyIndex < StoryIndex.Story5) setStoryIndex(storyIndex + 1);
  };

  const goSurvey = () => {
    router.push("/survey");
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    // 첫 번째 내용 불러오기
    if (withOptionStoryIndex.includes(storyIndex)) {
      setData({
        ...unselectedOptionDD,
        withOption: true,
        selected: Option.None,
      });
    } else {
      setData({
        ...noOptionDD,
        withOption: false,
        selected: Option.None,
      });
    }
    window.scrollTo(0, 0);
  }, [storyIndex]);

  return (
    <div className={styles.container}>
      <NovelHeader
        novelTitle="내 최애 찾기 프로젝트 by 청몽채화"
        storyTitle="1. 국무총리를 국무위원의 해임을"
        storyIndex={storyIndex}
        getStoryBefore={getStoryBefore}
        getStoryNext={getStoryNext}
      />
      <div className={styles.novel_container}>
        <div className={styles.novel}>
          <div className={styles.story_title}>{data.title}</div>
          <div className={styles.novel_content_container}>
            <Content
              storyIndex={storyIndex}
              data={data}
              onSelectOption={onClickOption}
            />
          </div>
        </div>
      </div>
      {withFooter && (
        <NovelFooter
          isLastStory={storyIndex === StoryIndex.Story5}
          getStoryNext={getStoryNext}
          goSurvey={goSurvey}
        />
      )}
    </div>
  );
}
