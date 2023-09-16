import styles from "./Product.module.scss";
import Button from "../Button/Button";
import product from "../../assets/img/produto.png";
import Title from "../Title/Title";

interface ProductDataProps {
  title?: string;
  description?: string;
  textButton?: string;
  img: string;
}

export function ProductData({
  title,
  description,
  textButton,
  img,
}: ProductDataProps) {
  return (
    <div
      className={styles.productData}
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

export default function Product() {
  return (
    <section className={styles.product}>
      <Title
        title="Produtos relacionados"
        titleLink="Ver todos"
        aHref="#ver-todos"
        lines
      />
      <div className={styles.container}>
        <ProductData
          title="Produtos"
          description="Lorem ipsum dolor sit amet, consectetur"
          textButton="Confira"
          img={product}
        />
        <ProductData
          title="Produtos"
          description="Lorem ipsum dolor sit amet, consectetur"
          textButton="Confira"
          img={product}
        />
      </div>
    </section>
  );
}
