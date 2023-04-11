import { useState } from "react";
import { useRouter } from "next/router";
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

  return <div className={styles.page}>메인</div>;
}
