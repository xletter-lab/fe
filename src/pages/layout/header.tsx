import React from 'react';
import styles from './header.module.css'

// HeaderProps 타입 정의
type HeaderProps = {
  title: string;
}

// Header 컴포넌트
const Header = ({ title }: HeaderProps) => {
  return (
      
      <h1 className={styles.headerLayout}>{title}</h1>
      
  );
}

export default Header;