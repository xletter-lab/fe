import { useRouter } from "next/router";
import styles from "./Info.module.css";
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
      <div>당신의 선택이 미래를 바꿉니다</div>
      <div>
        <div>
          지독한 서브병,
          <span>;XLetter</span>에서 완치하세요
          <span>외전이 나올 때까지 기다리는 건 이제 그만!</span>
        </div>
        <div>
          결말까지 완주하면 최애 NFT가 내 지갑에!
          <span>외전이 나올 때까지 기다리는 건 그만!</span>
        </div>
        <div>
          이뤄지길 바라는 커플이 있나요? 투표로 최애커플 응원하기!
          <span>외전이 나올 때까지 기다리는 건 그만!</span>
        </div>
      </div>
      <div>
        <input
          value={email}
          onChange={onChangeEmail}
          placeholder={"xletter.lab@gmail.com"}
        />
        <button onClick={clickReadig}>소설 읽기</button>
      </div>
    </div>
  );
}
