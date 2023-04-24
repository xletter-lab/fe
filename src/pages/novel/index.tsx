import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import styles from "./index.module.css";
import NovelHeader from "@/component/novel/novelHeader/novelHeader";
import NovelFooter from "@/component/novel/novelFooter/novelFooter";
import Content from "@/component/novel/content/content";
import { getNovelStory } from "@/api/api";
import { OperationCanceledException } from "typescript";

type Props = {};

export type StoryType = {
  contents: string[];
  selected?: Option;
  withOption: boolean;
  title: string;
  options?: OptionType[];
};

export type OptionType = {
  optionId: string;
  optionValue: Option;
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
  const email = router?.query?.email?.toString() ?? "aaa@user.com";
  const [myOption, setMyOption] = useState<Option[]>([
    Option.None,
    Option.None,
    Option.None,
  ]);

  const [data, setData] = useState<StoryType>({
    contents: [""],
    title: "",
    withOption: false,
  });
  const [storyIndex, setStoryIndex] = useState<StoryIndex>(StoryIndex.Story1);
  const withFooter =
    !data?.withOption || (data?.withOption && data?.selected != Option.None);

  const onClickOption = (option: Option) => {
    // 선택지 업데이트하고 결과 전송하고
    const beforeOptions = JSON.parse(
      window.localStorage.getItem("xletter_option")
    );
    if (storyIndex === StoryIndex.Story2) {
      beforeOptions[0] = option;
    } else if (storyIndex === StoryIndex.Story3) {
      beforeOptions[1] = option;
    } else {
      beforeOptions[2] = option;
    }
    console.log("after", beforeOptions);
    window.localStorage.setItem(
      "xletter_option",
      JSON.stringify(beforeOptions)
    );
    getNovelStory(email, storyIndex + 1, option).then((res) => {
      setData({
        ...data,
        contents: [...data.contents, res.content],
        selected: option,
      });
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
    router.push({ pathname: "/survey/", query: { email } }, "/survey");
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    if (withOptionStoryIndex.includes(storyIndex)) {
      getNovelStory(email, storyIndex + 1, Option.None).then((res) => {
        setData({
          contents: [res.content],
          title: res.title,
          withOption: true,
          options: [
            {
              optionId: "A",
              optionValue: Option.A,
              optionText: res.optionAText,
            },
            {
              optionId: "B",
              optionValue: Option.B,
              optionText: res.optionBText,
            },
          ],
        });
      });
    } else {
      getNovelStory(email, storyIndex + 1, Option.None).then((res) => {
        setData({
          contents: [res.content],
          title: res.title,
          withOption: false,
        });
      });
    }
    window.scrollTo(0, 0);
  }, [storyIndex]);

  useEffect(() => {
    // 선택했던 옵션 불러오기
    const tempOption = window.localStorage.getItem("xletter_option");
    if (tempOption) {
      setMyOption(JSON.parse(tempOption));
    } else {
      window.localStorage.setItem("xletter_option", JSON.stringify(myOption));
    }
    // 첫 번째 내용 불러오기
    getNovelStory(email, storyIndex + 1, myOption[storyIndex]).then((res) => {
      console.log("res", typeof res.content);
      setData({
        contents: [res.content],
        title: res.title,
        withOption: false,
      });
    });
  }, []);

  return (
    <div className={styles.container}>
      <NovelHeader
        novelTitle="위험한 인터뷰 by 청몽채화"
        storyTitle={data?.title}
        storyIndex={storyIndex}
        getStoryBefore={getStoryBefore}
        getStoryNext={getStoryNext}
      />
      <div className={styles.novel_container}>
        <div className={styles.novel}>
          <div className={styles.story_title}>{data?.title}</div>
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
