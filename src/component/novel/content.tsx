import styles from "./Content.module.css";
import { ForwardedRef, forwardRef } from "react";
import { ContentDetailType } from "@/pages/novel/[storyIndex]";
import Option from "./Option";

type Props = {
  data: ContentDetailType;
  clickOption: (targetContentId: number, newData: ContentDetailType) => void;
};

export default function Content({ clickOption, data }: Props) {
  const selectOption = (selectOptionId: number) => {
    clickOption(data.contentIndex, {
      ...data,
      options: data.options.map((option) => {
        return {
          ...option,
          isSelected: selectOptionId === option.optionId,
        };
      }),
    });
  };
  return (
    <div>
      <div>{data.text}</div>
      <div>
        {data.options?.map((option, index) => {
          return (
            <Option
              key={`option_${data.contentIndex}_${option.optionId}`}
              optionType={option}
              optionIndex={index}
              clickOption={selectOption}
              isFirst={option.isFirst}
            />
          );
        })}
      </div>
    </div>
  );
}
