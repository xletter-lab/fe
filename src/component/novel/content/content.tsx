import { Option, StoryType, StoryIndex } from "@/pages/novel";
import { useState } from "react";
import styles from "./content.module.css";
import NoTooltipOption from "../options/noTooptipOption/noTooltipOption";
import TooltipOption from "../options/tooptipOption/tooltipOption";

type Props = {
  storyIndex: number;
  data: StoryType;
  onSelectOption: (option: Option) => void;
};
export default function Content({ storyIndex, data, onSelectOption }: Props) {
  console.log("data", data);
  console.log("story index", storyIndex);
  const { withOption, contents, options, selected, title } = data;
  const [tooltipOpen, setToolTipOpen] = useState<boolean>(
    storyIndex === StoryIndex.Story2 ? true : false
  );

  const handleTooltipClose = () => {
    setToolTipOpen(false);
  };

  const handleTooltipOpen = () => {
    setToolTipOpen(true);
  };
  return (
    <div className={`${styles.container}`}>
      <div className={styles.content_none}>{contents[0]}</div>
      {withOption && (
        <div className={styles.with_option_content}>
          <div className={styles.options_container}>
            {options.map((option, index) => {
              if (index == 0)
                return (
                  <TooltipOption
                    key={`option_A`}
                    selected={selected}
                    handleTooltipClose={handleTooltipClose}
                    handleTooltipOpen={handleTooltipOpen}
                    onClickOption={onSelectOption}
                    optionId={option.optionId}
                    optionText={option.optionText}
                    tooltipOpen={tooltipOpen}
                  />
                );
              else
                return (
                  <NoTooltipOption
                    key={`option_B`}
                    selected={selected}
                    onClickOption={onSelectOption}
                    optionId={option.optionId}
                    optionText={option.optionText}
                  />
                );
            })}
          </div>
          {selected != Option.None && (
            <div className={styles.content_after_select}>{contents[1]}</div>
          )}
        </div>
      )}
    </div>
  );
}
