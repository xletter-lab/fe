import styles from "./header.module.css";
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
    <div>
      <div
        className={`${storyIndex > 0 ? "active" : "disabled"}`}
        onClick={onClickBeforeButton}>
        &lt; 이전 화
      </div>
      <div>
        <div>{novelTitle}</div>
        <div>{storyTitle}</div>
      </div>
      <div
        className={`${storyIndex > 0 ? "active" : "disabled"}`}
        onClick={onClickNextButton}>
        &gt;다음 화
      </div>
    </div>
  );
}
