import { useRouter } from "next/router";
import styles from "./info.module.css";
4;
type Props = {
  email: string;
  changeEmail: (newEmail: string) => void;
  clickReadig: () => void;
};
export default function Info({ email, changeEmail, clickReadig }: Props) {
  const router = useRouter();

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeEmail(e.currentTarget.value);
  };
  return (
    <div className={styles.container}>
      <div className={styles.title}>당신의 선택이 미래를 바꿉니다</div>
      <div className={styles.box_container}>
        <div className={`${styles.box} ${styles.box1}`}>
          <div className={styles.content}>
            지독한 서브병,
            <br />
            <span className={styles.logo}>;XLetter</span>에서 완치하세요.
            <div className={styles.text}>
              외전이 나올 때까지 기다리는 건 이제 그만!
            </div>
          </div>
        </div>

        <div className={`${styles.box} ${styles.box2}`}>
          <div className={styles.content}>
            결말까지 완주하면 <br />
            최애 NFT가 내 지갑에!
            <div className={styles.text}>
              외전이 나올 때까지 기다리는 건 그만!
            </div>
          </div>
        </div>
        <div className={`${styles.box} ${styles.box3}`}>
          <div className={styles.content}>
            이뤄지길 바라는 커플이 있나요?
            <br /> 투표로 최애커플 응원하기!
            <div className={styles.text}>
              외전이 나올 때까지 기다리는 건 그만!
            </div>
          </div>
        </div>
      </div>
      <div className={styles.input_area}>
        <input
          className={styles.input}
          value={email}
          onChange={onChangeEmail}
          placeholder={"이메일 입력하고 소설 읽기!"}
        />
        <button
          className={styles.button}
          onClick={clickReadig}
          disabled={email.length == 0}>
          &gt;&gt;
        </button>
      </div>
    </div>
  );
}
