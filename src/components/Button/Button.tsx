import styles from "./Button.module.scss";

interface ButtonProps {
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

export default function Button({ children, onClick, className }: ButtonProps) {
  return children ? (
    <button className={`${styles.button} ${className}`} onClick={onClick}>
      {children}
    </button>
  ) : null;
}
