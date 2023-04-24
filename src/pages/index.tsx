import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from './index.module.css';
import Welcome from '@/component/main/welcome/welcome';
import Info from '@/component/main/info/info';
import Footer from '@/component/main/footer/footer';

export default function Main() {
  const router = useRouter();
  const [email, setEmail] = useState<string>('aaa@user.com');

  const changeEmail = (newEmail: string) => {
    setEmail(newEmail);
  };

  const clickNext = () => {
    router.push(
      {
        pathname: '/warning',
        query: { email },
      },
      '/warning'
    );
  };

  return (
    <div className={styles.page}>
      <Welcome email={email} changeEmail={changeEmail} clickReadig={clickNext} />
      <Info email={email} changeEmail={changeEmail} clickReadig={clickNext} />
      <Footer />
    </div>
  );
}
