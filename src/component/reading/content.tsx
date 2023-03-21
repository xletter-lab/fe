import { NovelDetailType } from "@/pages/reading";
import Last from "./last";
import styles from "./content.module.css";
import Options from "./options";
type Props = {
  novelDetail?: NovelDetailType;
  getNextContent?: (selectedOption?: number) => void;
  isLast?: boolean;
};

export default function Content({
  novelDetail,
  getNextContent,
  isLast = false,
}: Props) {
  const selectOption = (optionId: number) => {
    getNextContent?.(optionId);
  };

  if (isLast) {
    return <Last />;
  } else {
    return (
      <div className={styles.container}>
        <div>
          <div className={styles.content}>{novelDetail.contentText}</div>
          {novelDetail.options && (
            <Options
              options={novelDetail.options}
              selectOption={selectOption}
            />
          )}
        </div>
      </div>
    );
  }
}
