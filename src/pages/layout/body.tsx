import React from "react";
import styles from './body.module.css'

type BodyProps = {
    children: React.ReactNode;
  }
  
  // Body 컴포넌트
  const Body = ({ children }: BodyProps) => {
    return (
      <div className={styles.bodyLayout}>
        
        {children}
        
      </div>
    );
  }
  

  
  export default Body;