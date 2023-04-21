import styles from "./welcome.module.css";
type Props = {
  email: string;
  changeEmail: (newEmail: string) => void;
  clickReadig: () => void;
};
export default function Welcome({ email, changeEmail, clickReadig }: Props) {
  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeEmail(e.currentTarget.value);
  };
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.logo}>;XLetter</div>
        <div className={styles.text_bold}>Vote & Read</div>
        <div className={styles.text_thin}>
          인터랙티브 웹소설 XLetter의 클로즈드 베타에 오신 것을 환영합니다!
        </div>
        <div className={styles.email_input_area}>
          <input
            className={styles.email_input}
            value={email}
            onChange={onChangeEmail}
            placeholder={"이메일 입력하고 소설 읽기!"}></input>
          <button
            className={styles.email_button}
            onClick={clickReadig}
            disabled={email.length == 0}>
            &gt;&gt;
          </button>
        </div>
      </div>
    </div>
  );
}
