import styles from "./RoundSign.module.css";
type Props = {
  className?: string;
  text: string;
};
export default function RoundSign({ className, text }: Props) {
  return <div className={`${styles.round_sign} ${className}`}>{text}</div>;
}
