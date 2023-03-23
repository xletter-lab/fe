import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "./layout/header";

type HeaderProps = {
  children?: React.ReactNode;
};
export default function Home({ children }: HeaderProps) {
  const function1 = (varaibale: number) => {};
  if (children) {
    return (
      <>
        <Header />
        <Children />
      </>
    );
  } else {
    return <Main />;
  }
}
