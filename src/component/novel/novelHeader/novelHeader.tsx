import styles from "./novelHeader.module.css";
type Props = {
  novelTitle?: string;
  storyTitle?: string;
  storyIndex?: number;
  getStoryBefore?: () => void;
  getStoryNext?: () => void;
};
export default function NovelHeader({
  novelTitle,
  storyTitle,
  storyIndex,
  getStoryBefore,
  getStoryNext,
}: Props) {
  const onClickBeforeButton = () => {
    if (storyIndex > 0) {
      getStoryBefore();
    }
  };

  const onClickNextButton = () => {
    if (storyIndex < 3) {
      getStoryNext();
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.logo}>;XLetter</div>
      <div className={styles.header}>
        <div
          className={`${styles.previous_story} ${
            storyIndex > 0 ? "" : "disabled"
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
            storyIndex > 0 ? "active" : "disabled"
          }`}
          onClick={onClickNextButton}>
          다음 화 &gt;
        </div>
      </div>
    </div>
  );
}
