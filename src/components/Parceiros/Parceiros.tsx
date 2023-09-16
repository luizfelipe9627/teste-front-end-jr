import styles from "./Parceiros.module.scss";
import Button from "../Button/Button";
import parceiro from "../../assets/img/parceiro.png";

interface ParceirosDataProps {
  title?: string;
  description?: string;
  textButton?: string;
  img: string;
}

export function ParceirosData({ title, description, textButton, img }: ParceirosDataProps) {
  return (
    <div
      className={styles.parceirosData}
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

export default function Parceiros() {
  return (
    <section className={styles.parceiros}>
      <ParceirosData
        title="Parceiros"
        description="Lorem ipsum dolor sit amet, consectetur"
        textButton="Confira"
        img={parceiro}
      />
      <ParceirosData
        title="Parceiros"
        description="Lorem ipsum dolor sit amet, consectetur"
        textButton="Confira"
        img={parceiro}
      />
    </section>
  );
}
