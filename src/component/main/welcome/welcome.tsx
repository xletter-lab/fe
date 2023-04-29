import Image from "next/image";
import logo from "../../../../public/png/logo.png";
import styles from "./welcome.module.css";
import { getNovelStory } from "@/api/api";
import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import { Option } from "@/types";
type Props = {
  email: string;
  changeEmail: (newEmail: string) => void;
  clickReadig: () => void;
};
export default function Welcome({ email, changeEmail, clickReadig }: Props) {
  const onClickButton = () => {
    getNovelStory({ email, option: Option.None, story: 1 })
      .then((res) => {
        clickReadig();
        toast.dismiss();
      })
      .catch((e) => {
        toast.error(
          "사전 등록되지 않은 이메일 주소입니다. 아쉽지만 오픈 베타에서 만나요!🤙 ",
          {
            position: toast.POSITION.BOTTOM_CENTER,
            autoClose: 3000,
            hideProgressBar: true,
            className: `${styles.toast_container}`,
            bodyClassName: "",
            closeButton: false,
            icon: false,
          }
        );
      });
  };

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeEmail(e.currentTarget.value);
  };
  return (
    <div className={styles.container}>
      <div className={styles.logo_image}>
        <Image
          alt="logo"
          src={logo}
          width={496}
          height={272}
          className={styles.logo}
        />
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
            onClick={onClickButton}
            disabled={email.length == 0}>
            &gt;&gt;
          </button>
        </div>
        <ToastContainer limit={1} />
      </div>
    </div>
  );
}
