import styles from "./Partner.module.scss";
import Button from "../Button/Button";
import partner from "../../assets/img/parceiro.png";

interface PartnersDataProps {
  title?: string;
  description?: string;
  textButton?: string;
  img: string;
}

export function PartnersData({ title, description, textButton, img }: PartnersDataProps) {
  return (
    <div
      className={styles.partnersData}
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className={styles.text}>
        {title && <h1>{title}</h1>}
        {description && <p>{description}</p>}
        {textButton && <Button>{textButton}</Button>}
      </div>
    </div>
  );
}

export default function Partners() {
  return (
    <section className={styles.partners}>
      <PartnersData
        title="Parceiros"
        description="Lorem ipsum dolor sit amet, consectetur"
        textButton="Confira"
        img={partner}
      />
      <PartnersData
        title="Parceiros"
        description="Lorem ipsum dolor sit amet, consectetur"
        textButton="Confira"
        img={partner}
      />
    </section>
  );
}
