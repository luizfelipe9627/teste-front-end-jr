import styles from "./Produtos.module.scss";
import { Button } from "../Button/Button";
import produto from "../../assets/img/produto.png";
import Title from "../Title/Title";

interface ProdutosDataProps {
  title?: string;
  description?: string;
  textButton?: string;
  img: string;
}

export function ProdutosData({ ...props }: ProdutosDataProps) {
  return (
    <div
      className={styles.produtosData}
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

export default function Produto() {
  return (
    <section className={styles.produtos}>
      <Title
        title="Produtos relacionados"
        titleLink="Ver todos"
        href="#ver-todos"
        lines
      />
      <div className={styles.container}>
        <ProdutosData
          title="Produtos"
          description="Lorem ipsum dolor sit amet, consectetur"
          textButton="Confira"
          img={produto}
        />
        <ProdutosData
          title="Produtos"
          description="Lorem ipsum dolor sit amet, consectetur"
          textButton="Confira"
          img={produto}
        />
      </div>
    </section>
  );
}
