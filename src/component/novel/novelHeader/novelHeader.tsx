import { StoryIndex } from "@/types";
import styles from "./novelHeader.module.css";
import Image from "next/image";
type Props = {
  novelTitle?: string;
  storyTitle?: string;
  storyIndex?: number;
  getStoryBefore?: () => void;
  getStoryNext?: () => void;
  ableToGoNext: boolean;
};
export default function NovelHeader({
  novelTitle,
  storyTitle,
  storyIndex,
  ableToGoNext,
  getStoryBefore,
  getStoryNext,
}: Props) {
  const onClickBeforeButton = () => {
    if (storyIndex > 0) {
      getStoryBefore();
    }
  };

  const onClickNextButton = () => {
    if (storyIndex < 4) {
      getStoryNext();
    }
  };
  return (
    <div className={styles.container}>
      <Image
        alt="logo"
        src={"/png/logo.png"}
        width={125}
        height={80}
        className={styles.logo}
      />
      <div className={styles.header}>
        <div
          className={`${styles.previous_story} ${
            storyIndex == 0 ? styles.disabled : "active"
          }`}
          onClick={onClickBeforeButton}>
          &lt; 이전 화
        </div>
        <div className={styles.title_area}>
          <div className={styles.novel_title}>{novelTitle}</div>
          <div className={styles.story_title}>{storyTitle}</div>
        </div>
        <div
          className={`${styles.next_story} ${
            storyIndex < StoryIndex.Story5 && ableToGoNext
              ? "active"
              : styles.disabled
          }`}
          onClick={onClickNextButton}>
          다음 화 &gt;
        </div>
      </div>
    </div>
  );
}
