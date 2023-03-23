import { NovelDetailType } from "@/pages/reading";
import Last from "./last";
import styles from "./content.module.css";
import Options from "./options";
import { ForwardedRef } from "react";
type Props = {
  novelDetail?: NovelDetailType;
  getNextContent?: (selectedOption?: number) => void;
  isLast?: boolean;
  ref?: ForwardedRef<HTMLDivElement>;
};

export default function Content({
  novelDetail,
  getNextContent,
  ref,
  isLast = false,
}: Props) {
  const selectOption = (optionId: number) => {
    getNextContent?.(optionId);
  };

  return (
    <div>
      <div className={styles.container} ref={ref}>
        <div>
          <div className={styles.content}>{novelDetail.contentText}</div>
        </div>
      </div>

      <div className={styles.content_option}>
        {novelDetail.options?.length > 0 && (
          <Options options={novelDetail.options} selectOption={selectOption} />
        )}
      </div>
    </div>
  );
}
