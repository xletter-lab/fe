import { useState } from "react";
import { useRouter } from "next/router";
import Welcome from "@/component/main/Welcome";
import Info from "@/component/main/Info";
import Footer from "@/component/main/Footer";
import styles from "./index.module.css";

export default function Main() {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");

  const changeEmail = (newEmail: string) => {
    setEmail(newEmail);
  };

  const clickNext = () => {
    router.push(
      {
        pathname: "/warning",
        query: { email },
      },
      "/warning"
    );
  };

  return (
    <div className={styles.page}>
      <Welcome
        email={email}
        changeEmail={changeEmail}
        clickReadig={clickNext}
      />
      <Info email={email} changeEmail={changeEmail} clickReadig={clickNext} />
      <Footer />
    </div>
  );
}
