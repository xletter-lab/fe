import styles from "./Welcome.module.css";
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
      <div>logo</div>
      <div>Vote & Read</div>
      <div>
        인터랙티브 웹소설 XLetter의 클로즈드 베타에 오신 것을 환영합니다!
      </div>
      <div>
        <input
          value={email}
          onChange={onChangeEmail}
          placeholder={"이메일 입력하고 소설 읽기!"}
        />
        <button onClick={clickReadig}>&gt;&gt;</button>
      </div>
    </div>
  );
}
