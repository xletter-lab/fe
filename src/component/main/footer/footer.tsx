import Image from "next/image";
import styles from "./footer.module.css";
import Link from "next/link";
import { getValidUser } from "@/api/api";
import { toast, ToastContainer } from "react-toastify";
import { Option } from "@/types";
type Props = {
  email: string;
  changeEmail: (newEmail: string) => void;
  clickReadig: () => void;
};
export default function Footer({ changeEmail, clickReadig, email }: Props) {
  const onClickButton = () => {
    getValidUser({ email })
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
  return (
    <div className={styles.container}>
      <div className={styles.email_area}>
        <div className={styles.email_input_area}>
          <input
            className={styles.email_input}
            value={email}
            onChange={(e) => changeEmail(e.target.value)}
            placeholder={"이메일 입력하고 소설 읽기!"}></input>
          <button
            className={styles.email_button}
            onClick={onClickButton}
            disabled={email.length == 0}>
            &gt;&gt;
          </button>
        </div>
      </div>
      <div className={styles.toast_area}>
        <ToastContainer limit={1} />
      </div>

      <div className={styles.content}>
        <div className={styles.logo}></div>
        <div className={styles.sns}>
          <Link href={"https://discord.gg/jPrQxwVE"}>
            <Image
              className={styles.discord}
              alt="discord"
              src={"/png/discord_gray.png"}
              width={50}
              height={50}
            />
          </Link>
          <Link
            href={
              "https://twitter.com/Xletter_Labs?t=YrHSixULDYM2HzXg0wEU3w&s=09"
            }>
            <Image
              className={styles.twitter}
              alt="tiwtter"
              src={"/png/twitter_gray.png"}
              width={50}
              height={50}
            />
          </Link>
          <Link href={"https://t.me/+CAtOfY-E28QxYWVl"}>
            <Image
              className={styles.telegram}
              alt="telegram"
              src={"/png/telegram_gray.png"}
              width={50}
              height={50}
            />
          </Link>
        </div>
        <div className={styles.contact}>
          <div className={styles.mail}>xletter.lab@gmail.com</div>
          <div className={styles.copyright}>
            @ 2023 XLetter, all rights reserved
          </div>
        </div>
      </div>
    </div>
  );
}
