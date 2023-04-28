import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "./index.module.css";
import NovelHeader from "@/component/novel/novelHeader/novelHeader";
import NovelFooter from "@/component/novel/novelFooter/novelFooter";
import Content from "@/component/novel/content/content";
import { getNovelStory } from "@/api/api";
import { Option, StoryIndex, StoryType, defaultOptions } from "@/types";

type Props = {};

const withOptionStoryIndex = [
  StoryIndex.Story2,
  StoryIndex.Story3,
  StoryIndex.Story5,
];

export default function Novel({}: Props) {
  const router = useRouter();
  const queryStoryIndex = router.query.storyIndex?.toString() ?? "0";
  const defaultStory: StoryIndex =
    parseInt(queryStoryIndex) ?? StoryIndex.Story1;

  const [invalid, setInvalid] = useState<boolean>(false);

  const [storyIndex, setStoryIndex] = useState<StoryIndex>(defaultStory);
  const [nextStoryTitle, setNextStoryTitle] = useState<string>("");
  const [data, setData] = useState<StoryType>({
    contents: [""],
    title: "",
    withOption: false,
  });

  const withFooter =
    !data?.withOption ||
    (data?.withOption &&
      data?.selected !== undefined &&
      data?.selected != Option.None);

  const onClickOption = (option: Option) => {
    let beforeOptions =
      JSON.parse(window.localStorage.getItem("xletter_options")) ??
      defaultOptions;
    let email = window.localStorage.getItem("xletter_email");
    // 먼저 요청 보내고 괜찮으면 저장
    getNovelStory({
      email,
      story: storyIndex + 1,
      option,
    })
      .then((res) => {
        setData({
          ...data,
          contents: [...data.contents, res.content],
          selected: option,
        });
        // localstorage update
        if (storyIndex === StoryIndex.Story2) {
          beforeOptions[0] = option;
        } else if (storyIndex === StoryIndex.Story3) {
          beforeOptions[1] = option;
        } else {
          beforeOptions[2] = option;
        }
        window.localStorage.setItem(
          "xletter_option",
          JSON.stringify(beforeOptions)
        );
      })
      .catch((e) => {
        // 안괜찮으면 다른 옵션 선택했다는 메시지
        let realOption = option === Option.A ? Option.B : Option.A;
        getNovelStory({
          email,
          story: storyIndex + 1,
          option: realOption,
        }).then((res) => {
          setData({
            ...data,
            contents: [...data.contents, res.content],
            selected: realOption,
          });

          // localstorage update
          if (storyIndex === StoryIndex.Story2) {
            beforeOptions[0] = realOption;
          } else if (storyIndex === StoryIndex.Story3) {
            beforeOptions[1] = realOption;
          } else {
            beforeOptions[2] = realOption;
          }
          window.localStorage.setItem(
            "xletter_option",
            JSON.stringify(beforeOptions)
          );
        });
      });

    console.log("after", beforeOptions);
  };

  const getStoryBefore = () => {
    if (storyIndex > StoryIndex.Story1) setStoryIndex(storyIndex - 1);
  };

  const getStoryNext = () => {
    if (storyIndex < StoryIndex.Story5) setStoryIndex(storyIndex + 1);
  };

  const goSurvey = () => {
    router.push("/survey");
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    let email = window.localStorage.getItem("xletter_email");
    let myOptions = JSON.parse(window.localStorage.getItem("xletter_option"));
    if (myOptions === null) {
      window.localStorage.setItem(
        "xletter_option",
        JSON.stringify(defaultOptions)
      );
      myOptions = defaultOptions;
    }
    console.log("myOptions", myOptions, "storyIndex", storyIndex);
    // 1. 첫 번째 파트 호출
    getNovelStory({
      email,
      story: storyIndex + 1,
      option: Option.None,
    })
      .then((res) => {
        console.log("첫 번째 파트 호출", res);
        // 1.1 선택지 있는 화-다음 옵션에 따라
        if (withOptionStoryIndex.includes(storyIndex)) {
          let selected =
            storyIndex === StoryIndex.Story2
              ? myOptions[0]
              : storyIndex === StoryIndex.Story3
              ? myOptions[1]
              : myOptions[2];
          //// None: pass
          if (selected === Option.None) {
            setData({
              contents: [res.content],
              title: res.title,
              withOption: true,
              options: [
                {
                  optionId: Option.A,
                  optionText: res.optionAText,
                  optionValue: Option.A,
                },
                {
                  optionId: Option.B,
                  optionText: res.optionBText,
                  optionValue: Option.B,
                },
              ],
            });
          }
          //// A : 호출 - 에러 없으면 세팅하고 에러 있으면 B로 세팅
          else if (selected === Option.A) {
            getNovelStory({
              email,
              story: storyIndex + 1,
              option: selected,
            })
              .then((secondStory) => {
                setData({
                  contents: [res.content, secondStory.content],
                  title: res.title,
                  withOption: true,
                  options: [
                    {
                      optionId: Option.A,
                      optionText: res.optionAText,
                      optionValue: Option.A,
                    },
                    {
                      optionId: Option.B,
                      optionText: res.optionBText,
                      optionValue: Option.B,
                    },
                  ],
                  selected,
                });
              })
              .catch((e) => {
                // 다른 선택지 골랐었다는 메시지
                getNovelStory({
                  email,
                  story: storyIndex + 1,
                  option: Option.B,
                }).then((realStory) => {
                  setData({
                    contents: [res.content, realStory.content],
                    title: res.title,
                    withOption: true,
                    options: [
                      {
                        optionId: Option.A,
                        optionText: res.optionAText,
                        optionValue: Option.A,
                      },
                      {
                        optionId: Option.B,
                        optionText: res.optionBText,
                        optionValue: Option.B,
                      },
                    ],
                    selected: Option.B,
                  });
                });
              });
          }
          //// B : 호출 - 에러 없으면 세팅하고 에러 있으면 A로 세팅
          else {
            getNovelStory({
              email,
              story: storyIndex + 1,
              option: Option.None,
            })
              .then((secondStory) => {
                setData({
                  contents: [res.content, secondStory.content],
                  title: res.title,
                  withOption: true,
                  options: [
                    {
                      optionId: Option.A,
                      optionText: res.optionAText,
                      optionValue: Option.A,
                    },
                    {
                      optionId: Option.B,
                      optionText: res.optionBText,
                      optionValue: Option.B,
                    },
                  ],
                  selected,
                });
              })
              .catch((e) => {
                // 다른 선택지 골랐었다는 메시지
                getNovelStory({
                  email,
                  story: storyIndex + 1,
                  option: Option.B,
                }).then((realStory) => {
                  setData({
                    contents: [res.content, realStory.content],
                    title: res.title,
                    withOption: true,
                    options: [
                      {
                        optionId: Option.A,
                        optionText: res.optionAText,
                        optionValue: Option.A,
                      },
                      {
                        optionId: Option.B,
                        optionText: res.optionBText,
                        optionValue: Option.B,
                      },
                    ],
                    selected: Option.B,
                  });
                });
              });
          }
        }
        // 1.2 선택지 없는 화
        else {
          setData({
            contents: [res.content],
            title: res.title,
            withOption: false,
          });
        }

        // 2. 다음 화 제목 호출
        if (storyIndex != StoryIndex.Story5) {
          getNovelStory({
            email,
            story: storyIndex + 2,
            option: Option.None,
          }).then((nextStory) => {
            setNextStoryTitle(nextStory.title);
          });
        }

        // 3. 맨 위로 이동
        window.scrollTo(0, 0);
      })
      .catch((e) => {
        // 사전등록 안 한 메일 경고
        setInvalid(true);
      });
  }, [storyIndex]);

  if (invalid) {
    return <div className={styles.invalid}>invalid</div>;
  } else {
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
            nextStoryIndex={storyIndex + 2}
            nextStoryTitle={nextStoryTitle}
          />
        )}
      </div>
    );
  }
}
