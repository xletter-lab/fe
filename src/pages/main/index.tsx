import styles from './index.module.css'
import React from 'react'
import Button from '@/component/common/button/Button'
import Login from '../login/index';
import { useRouter } from "next/router";
type Props = {
  buttonText: string;
  isActive?: boolean;
  onClick: () => void;
  className?:string;
};


export default function Main() {
  const router = useRouter();
  const clickEvaluate = () => {
    router.push("./login");
  };

  return (
    <div>
      <img src='\png\xletter_firstpage.png' className={styles.firstPageImg} id="main_page" alt="xletter_firstpage" />;
      
      
      <Button
        buttonText="웹소설 읽으러 가기"
        onClick={clickEvaluate} className={`${styles.fpb1}`}/>
        
        
        <Button
        buttonText="웹소설 읽으러 가기"
        onClick={clickEvaluate} className={`${styles.fpb2}`}/>
      </div>
        
     
  )
}
