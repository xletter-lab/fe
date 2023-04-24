import Image from "next/image";
import styles from "./footer.module.css";
import Link from "next/link";
export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.logo}>;XLetter</div>
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

          <Image
            className={styles.telegram}
            alt="telegram"
            src={"/png/telegram_gray.png"}
            width={50}
            height={50}
          />
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
