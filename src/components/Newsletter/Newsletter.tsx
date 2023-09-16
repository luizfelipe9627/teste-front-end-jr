import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import styles from "./Newsletter.module.scss";

interface NewsletterProps {
  title: string;
  emphasis?: string;
  text: string;
  placeholder: string;
  buttonText: string;
}

export default function Newsletter({ ...props }: NewsletterProps) {
  return (
    <div className={styles.newsletter}>
      <div className={styles.text}>
        <h1>
          {props.title} <span>{props.emphasis}</span>
        </h1>
        <p>{props.text}</p>
      </div>
      <form className={styles.form}>
        <Input
          type="email"
          placeholder={props.placeholder}
          id="email"
          name="email"
          required
        />
        <Button>{props.buttonText}</Button>
      </form>
    </div>
  );
}
