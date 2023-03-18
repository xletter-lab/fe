import { ContentType, OptionType } from "@/pages/reading";
import Button from "../common/button/Button";

type Props = {
  options: OptionType[];
  selectOption?: (selectedId: number) => void;
};
export default function Options({ options, selectOption }: Props) {
  const onClickOption = (optionId: number) => {
    console.log("버튼 클릭 optino 컨포넌트");
    selectOption?.(optionId);
  };
  return (
    <div>
      {options.map((item) => {
        return (
          <Button
            key={`option_${item.id}`}
            buttonText={item.text}
            buttonWidth={500}
            isActive={item.isSelected}
            onClick={() => onClickOption(item.id)}
          />
        );
      })}
    </div>
  );
}
