import { SurveyType } from "@/pages/survey";
import styles from "./Question.module.css";
import Button from "./Button";
type Props = {
  data?: SurveyType;
};
export default function Question({ data }: Props) {
  console.log("question", data);
  return (
    <div>
      <div>Q1-1</div>
      <div>{data.question}</div>
      <div>
        {data.options.map((option) => {
          return (
            <Button
              key={`qeustion_${data.id}_option_${option.id}`}
              text={option.text}
              withRadio={data.withRadio}
              quetionId={`${data.id}`}
            />
          );
        })}
      </div>
    </div>
  );
}
