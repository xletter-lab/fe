import Image from "next/image";
import styles from "./Footer.module.css";
export default function Footer() {
  return (
    <>
      <div className={styles.container}>
        <div>;XLetter</div>
        <div>
          <Image
            alt="discord"
            src={"/png/discord_gray.png"}
            width={50}
            height={50}
          />
          <Image
            alt="tiwtter"
            src={"/png/twitter_gray.png"}
            width={50}
            height={50}
          />
          <Image
            alt="telegram"
            src={"/png/telegram_gray.png"}
            width={50}
            height={50}
          />
        </div>
        <div>
          <div>xletter.lab@gmail.com</div>
          <div>@ 2023 XLetter, all rights reserved</div>
        </div>
      </div>
    </>
  );
}
