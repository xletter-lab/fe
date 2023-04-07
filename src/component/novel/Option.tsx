import { OptionType } from "@/pages/novel/[storyIndex]";
import styles from "./Option.module.css";
import Tooltip from "@mui/material/Tooltip";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { useState } from "react";

type Props = {
  optionType?: OptionType;
  optionIndex?: number;
  isFirst?: boolean;
  clickOption?: (selectOptionId: number) => void;
};
export default function Option({
  optionIndex,
  optionType,
  clickOption,
  isFirst = false,
}: Props) {
  const [toolTipOpen, setToolTipOpen] = useState<boolean>(
    isFirst ? true : false
  );
  const handleTooltipClose = () => {
    setToolTipOpen(false);
  };

  const handleTooltipOpen = () => {
    setToolTipOpen(true);
  };

  const onClickOption = () => {
    clickOption(optionIndex);
  };

  console.log("tooltip", toolTipOpen);

  return (
    <div>
      <div onClick={onClickOption}>
        <div>{optionType.optionContent}</div>
      </div>
      {optionIndex === 0 && (
        <ClickAwayListener onClickAway={handleTooltipClose}>
          <div>
            <Tooltip
              PopperProps={{
                disablePortal: true,
              }}
              placement="top-end"
              title={
                "두 선택지 중 한 가지를 골라 클릭하시면 다음 내용이 나타납니다.한 번 클릭하면 되돌릴 수 없으니 신중히 선택해주세요!"
              }
              arrow
              open={toolTipOpen}
              onClose={handleTooltipClose}
              disableHoverListener
              disableFocusListener
              disableTouchListener>
              <div onClick={handleTooltipOpen}>?</div>
            </Tooltip>
          </div>
        </ClickAwayListener>
      )}
    </div>
  );
}
