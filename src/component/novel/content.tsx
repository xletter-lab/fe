import styles from "./Content.module.css";
import { ForwardedRef, forwardRef } from "react";
import { ContentDetailType } from "@/pages/novel/[storyIndex]";
import Option from "./option";
type Props = {
  data: ContentDetailType;
  clickOption: (targetContentId: number, newData: ContentDetailType) => void;
};
const Content = forwardRef(
  ({ clickOption, data }: Props, ref: ForwardedRef<HTMLDivElement>) => {
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
      <div ref={ref}>
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
);
Content.displayName = "Content";
export default Content;
