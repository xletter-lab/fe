import styles from "./title.module.css";
type Props = {
  title: string;
};
export default function Title({ title }: Props) {
  return <div className={styles.title}>{title}</div>;
}
