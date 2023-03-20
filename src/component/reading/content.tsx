import { NovelDetailType } from "@/pages/reading";
import { MutableRefObject } from "react";
import styles from "./content.module.css";
import Options from "./options";
type Props = {
  novelDetail: NovelDetailType;
  getNextContent?: (selectedOption?: number) => void;
};

export default function Content({ novelDetail, getNextContent }: Props) {
  const selectOption = (optionId: number) => {
    getNextContent?.(optionId);
  };
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.content}>{novelDetail.contentText}</div>
        {novelDetail.options && (
          <Options options={novelDetail.options} selectOption={selectOption} />
        )}
      </div>
    </div>
  );
}
