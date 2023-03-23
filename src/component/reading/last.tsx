import { useRouter } from "next/router";
import Button from "../common/button/Button";
import styles from "./last.module.css";

export default function Last() {
  const router = useRouter();
  const clickEvaluate = () => {
    router.push("../survey");
  };
  return (
    <div className={`${styles.outer_container}`}>
      <div className={styles.container}>
        <div>
          <div className={`${styles.text} bold `}>다음 내용이 궁금하다면?</div>
          <Button
            buttonText="평가 하러 가기"
            onClick={clickEvaluate}
            buttonWidth={400}
            className={styles.button}
          />
        </div>
      </div>
    </div>
  );
}
