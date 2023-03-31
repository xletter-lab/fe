import { OptionType } from "@/pages/novel";
import Image from "next/image";
import Button from "../common/button/Button";
import styles from "./options.module.css";
type Props = {
  options: OptionType[];
  selectOption?: (selectedId: number) => void;
};
export default function Options({ options, selectOption }: Props) {
  const onClickOption = (optionId: number) => {
    selectOption?.(optionId);
  };

  return (
    <div className={styles.option_container}>
      <div>
        {options.map((item, index) => {
          const iconSrc =
            item?.isSelected === true
              ? index === 0
                ? "/png/a_white.png"
                : "/png/b_white.png"
              : item.isSelected === undefined
              ? index === 0
                ? "/png/a.png"
                : "/png/b.png"
              : index === 0
              ? "/png/a_gray.png"
              : "/png/b_gray.png";
          const optionColor =
            item?.isSelected === undefined
              ? ""
              : item.isSelected === true
              ? `${styles.selected_option}`
              : `${styles.discarded_option}`;
          return (
            <div key={`item_${index}`}>
              <Image
                className={`${styles.option_icon}`}
                src={iconSrc}
                width={20}
                height={20}
                alt=""
              />
              <Button
                className={`${styles.option} ${optionColor}`}
                key={`option_${item.id}`}
                buttonText={item.text}
                buttonWidth={1035}
                isActive={item.isSelected === undefined}
                onClick={() => onClickOption(item.id)}></Button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
