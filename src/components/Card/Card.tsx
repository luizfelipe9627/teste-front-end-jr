import styles from "./Card.module.scss";
import React from "react";
import { Button } from "../Button/Button";
import CarouselCard from "./CarouselCard";

interface Product {
  id: number;
  photo: string;
  productName: string;
  descriptionShort: string;
  price: string;
}

export default function Card() {
  const [data, setData] = React.useState<Product[]>([]);

  React.useEffect(() => {
    async function fetchProduto(url: string) {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json.products);
      } catch (error) {
        console.log(error);
      }
    }

    fetchProduto(
      "https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json",
    );
  }, []);

  return (
    <CarouselCard>
      {data.map((item, index) => (
        <div key={index} className={styles.card}>
          <div className={styles.image}>
            <img src={item.photo} alt="" />
          </div>

          <div className={styles.info}>
            <p className={styles.title}>{item.productName}</p>
            <p className={styles.price}>R$ {item.price}</p>
            <p className={styles.discountPrice}>R$ {item.price}</p>
            <p className={styles.installment}>ou 2x de R$49,95 sem juros</p>
            <p className={styles.delivery}>Frete grátis</p>
            <Button>Comprar</Button>
          </div>
        </div>
      ))}
    </CarouselCard>
  );
}
