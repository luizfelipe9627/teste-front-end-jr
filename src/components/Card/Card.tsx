import React from "react";
import Button from "../Button/Button";
import CarouselCard from "./CarouselCard";
import styles from "./Card.module.scss";
import Modal from "../Modal/Modal";

interface CardProps {
  id: number;
  photo: string;
  productName: string;
  descriptionShort: string;
  price: number;
  products: CardProps[];
}

function formatPrice(price: number) {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default function Card() {
  const [data, setData] = React.useState<CardProps[]>([]);

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

  const [openModal, setOpenModal] = React.useState(false);
  const [selectedProduct, setSelectedProduct] =
    React.useState<CardProps | null>(null);

  function handleClick(product: CardProps) {
    setSelectedProduct(product);
    setOpenModal(true);
  }

  return (
    <>
      <CarouselCard>
        {data.map((item, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.image}>
              <img src={item.photo} alt={item.productName} />
            </div>

            <div className={styles.info}>
              <p className={styles.title}>{item.productName}</p>
              <p className={styles.price}>R$ {formatPrice(item.price)}</p>
              <p className={styles.discountPrice}>R$ {formatPrice(item.price)}</p>
              <p className={styles.installment}>ou 2x de R$ 49,95 sem juros</p>
              <p className={styles.delivery}>Frete grátis</p>
              <Button onClick={() => handleClick(item)}>Comprar</Button>
            </div>
          </div>
        ))}
      </CarouselCard>

      {openModal && (
        <Modal
          openModal={openModal}
          setOpenModal={setOpenModal}
          productName={selectedProduct?.productName}
          productPrice={selectedProduct?.price}
          productPhoto={selectedProduct?.photo}
          productDescription={selectedProduct?.descriptionShort}
          formatPrice={formatPrice}
        />
      )}
    </>
  );
}
