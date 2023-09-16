import styles from "./Button.module.scss";

interface ButtonProps {
  children?: React.ReactNode;
}

export default function Button({ children }: ButtonProps) {
  return children ? (
    <button className={styles.button}>{children}</button>
  ) : null;
}
