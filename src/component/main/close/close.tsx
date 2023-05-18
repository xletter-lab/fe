import Image from "next/image";
import logo from "../../../../public/png/logo.png";
import styles from "./close.module.css";

type Props = {};
export default function Close({}: Props) {
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
          클로즈드 베타 기간이 종료되었습니다
        </div>
      </div>
    </div>
  );
}
