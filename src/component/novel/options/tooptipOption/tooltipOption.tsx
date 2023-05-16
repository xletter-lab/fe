import { useState } from "react";
import styles from "./tooltipOption.module.css";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { createTheme, ThemeProvider } from "@mui/material";
import { Option } from "@/types";

const theme = createTheme({
  typography: {
    fontFamily: "SUIT-R",
  },
});
type Props = {
  selected: Option;
  tooltipOpen: boolean;
  optionId: string;
  optionValue: Option;
  optionText: string;
  onClickOption: (optionId: string) => void;
  handleTooltipClose: () => void;
  handleTooltipOpen: () => void;
};

export default function TooltipOption({
  selected,
  tooltipOpen,
  onClickOption,
  optionId,
  optionValue,
  optionText,
  handleTooltipClose,
  handleTooltipOpen,
}: Props) {
  const MyTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "var(--tooltip-background)",
      color: "var(--hot-pink-font)",
      padding: "9px 27px",
      lineHeight: "150%",
      height: "30px",
      width: "280px",
    },
    [`& .${tooltipClasses.arrow}`]: {
      "&:before": {
        border: `1px solid var(--tooltip-background)`,
      },
      color: "var(--tooltip-background)",
    },
    [`& .${tooltipClasses.popperArrow}`]: {
      displace: "relative",
      right: "10px",
    },
    [`& .${tooltipClasses.tooltipPlacementTop}`]: {
      bottom: "10px",
    },
  }));

  // console.log("tooltipOption", tooltipOpen, selected);
  return (
    <ThemeProvider theme={theme}>
      <div className={styles.container}>
        <div
          className={`${styles.option_container} ${
            selected === undefined ||
            (selected !== undefined && selected === Option.None)
              ? ""
              : selected === optionValue
              ? styles.selected_option
              : styles.unselected_option
          }`}
          onClick={() => onClickOption(optionId)}>
          <div
            className={`${styles.option_id}  ${
              selected === undefined ||
              (selected !== undefined && selected === Option.None)
                ? ""
                : selected === optionValue
                ? styles.selected_option_id
                : styles.unselected_option
            }`}>
            {optionId}
          </div>
          <div className={styles.option_text}>{optionText}</div>
        </div>
        <ClickAwayListener onClickAway={handleTooltipClose}>
          <div className={styles.tooltip_wrappper}>
            <MyTooltip
              PopperProps={{
                disablePortal: true,
              }}
              placement="top-end"
              title={
                "두 선택지 중 한 가지를 골라 클릭하시면 다음 내용이 나타납니다.한 번 클릭하면 되돌릴 수 없으니 신중히 선택해주세요!"
              }
              arrow
              open={
                selected !== undefined && selected !== Option.None
                  ? false
                  : tooltipOpen
              }
              onClose={handleTooltipClose}
              disableHoverListener
              disableFocusListener
              disableTouchListener>
              <div
                className={`${styles.question_mark} ${
                  selected !== undefined &&
                  selected !== Option.None &&
                  styles.no_tooltip
                }`}
                onClick={handleTooltipOpen}>
                ?
              </div>
            </MyTooltip>
          </div>
        </ClickAwayListener>
      </div>
    </ThemeProvider>
  );
}
