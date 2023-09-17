import Button from "../Button/Button";
import Input from "../Input/Input";
import styles from "./Newsletter.module.scss";

interface NewsletterProps {
  title: string;
  emphasis?: string;
  text: string;
  placeholder?: string;
  buttonText: string;
}

export default function Newsletter({ title, emphasis, text, placeholder = "Digite aqui", buttonText }: NewsletterProps) {
  return (
    <div className={styles.newsletter}>
      <div className={styles.text}>
        <h1>
          {title} <span>{emphasis}</span>
        </h1>
        <p>{text}</p>
      </div>
      <form className={styles.form}>
        <Input
          type="email"
          placeholder={placeholder}
          id="email"
          name="email"
          required
        />
        <Button>{buttonText}</Button>
      </form>
    </div>
  );
}
