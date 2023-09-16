import styles from "./Parceiros.module.scss";
import { Button } from "../Button/Button";
import parceiro from "../../assets/img/parceiro.png";

interface ParceirosDataProps {
  title?: string;
  description?: string;
  textButton?: string;
  img: string;
}

export function ParceirosData({ ...props }: ParceirosDataProps) {
  return (
    <div
      className={styles.parceirosData}
      style={{ backgroundImage: `url(${props.img})` }}
    >
      <div className={styles.text}>
        {props.title && <h1>{props.title}</h1>}
        {props.description && <p>{props.description}</p>}
        {props.textButton && <Button>{props.textButton}</Button>}
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
