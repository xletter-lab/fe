import { useState } from "react";
import { useRouter } from "next/router";
import Welcome from "@/component/main/Welcome";
import Info from "@/component/main/Info";
import Footer from "@/component/main/Footer";

export default function Main() {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");

  const changeEmail = (newEmail: string) => {
    setEmail(newEmail);
  };

  const clickReading = () => {
    router.push(
      {
        pathname: "/novel",
        query: { email },
      },
      "/novel"
    );
  };

  return (
    <>
      <Welcome
        email={email}
        changeEmail={changeEmail}
        clickReadig={clickReading}
      />
      <Info
        email={email}
        changeEmail={changeEmail}
        clickReadig={clickReading}
      />
      <Footer />
    </>
  );
}
