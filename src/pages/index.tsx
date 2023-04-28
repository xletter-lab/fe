import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "./index.module.css";
import Welcome from "@/component/main/welcome/welcome";
import landingImage from "../../public/png/landing_page.png";
import Footer from "@/component/main/footer/footer";
import Image from "next/image";
import { defaultOptions } from "@/types";

export default function Main() {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");

  const changeEmail = (newEmail: string) => {
    setEmail(newEmail);
  };

  const clickNext = () => {
    window.localStorage.setItem("xletter_email", email);
    router.push("/warning");
  };

  useEffect(() => {}, []);

  return (
    <div className={styles.page}>
      <Welcome
        email={email}
        changeEmail={changeEmail}
        clickReadig={clickNext}
      />
      <div className={styles.landing_image}></div>
      <Image
        alt="landing"
        src={landingImage}
        width="1440"
        height={"1384"}
        className={styles.landing_image}
      />

      <Footer email={email} changeEmail={changeEmail} clickReadig={clickNext} />
    </div>
  );
}
