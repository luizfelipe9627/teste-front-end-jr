import styles from "./Modal.module.scss";
import Button from "../Button/Button";
import React from "react";
import increase from "../../assets/svg/increase.svg";
import decrease from "../../assets/svg/decrease.svg";
import x from "../../assets/svg/x.svg";

interface ModalProps {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  productPhoto?: string;
  productName?: string;
  productDescription?: string;
  productPrice?: number;
  formatPrice: (price: number) => string;
}

export default function Modal({
  openModal,
  setOpenModal,
  productName = "Produto não encontrado",
  productPhoto = "https://via.placeholder.com/470x594/FFFFFF/?text=Imagem+Indisponível",
  productDescription = "Descrição não encontrada",
  productPrice = 0,
  formatPrice,
}: ModalProps) {
  const [count, setCount] = React.useState(1);
  const [totalPrice, setTotalPrice] = React.useState(productPrice);

  React.useEffect(() => {
    if (openModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [openModal]);

  function increaseNumber() {
    setCount(count + 1);
    setTotalPrice((prevPrice) => prevPrice + productPrice);
  }

  function decreaseNumber() {
    if (count > 1) {
      setCount(count - 1);
      setTotalPrice((prevPrice) => prevPrice - productPrice);
    }
  }

  function handleModalClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.stopPropagation();
  }

  return (
    openModal && (
      <div className={styles.overlay} onClick={() => setOpenModal(false)}>
        <div className={styles.modal} onClick={handleModalClick}>
          <div className={styles.buttonClose}>
            <button
              className={styles.close}
              onClick={() => setOpenModal(false)}
            >
              <img src={x} alt="Fechar modal" />
            </button>
          </div>

          <div className={styles.image}>
            <img src={productPhoto} alt={productName} />
          </div>

          <div className={styles.content}>
            <h1 className={styles.title}>{productName}</h1>
            <span className={styles.price}>R$ {formatPrice(totalPrice)}</span>
            <p className={styles.description}>{productDescription}</p>
            <a href={`#${productName}`} className={styles.link}>
              Veja mais detalhes do produto{" >"}
            </a>
            <div className={styles.count}>
              <button onClick={decreaseNumber} className={styles.decrease}>
                <img src={decrease} alt="Diminuir" />
              </button>
              <p className={styles.amount}>{count}</p>
              <button onClick={increaseNumber} className={styles.increase}>
                <img src={increase} alt="Aumentar" />
              </button>
            </div>
            <Button className={styles.comprar}>Comprar</Button>
          </div>
        </div>
      </div>
    )
  );
}
