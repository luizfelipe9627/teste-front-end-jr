import styles from "./Range.module.scss";
import RangeText from "./RangeData";
import escudo from "../../assets/svg/shieldCheck.svg";
import caminhao from "../../assets/svg/truck.svg";
import cartao from "../../assets/svg/creditCard.svg";

export default function Range() {
  return (
    <div className={styles.range}>
      <RangeText img={escudo} alt="Escudo" text="Compra" emphasis="100% segura" />
      <RangeText
        img={caminhao}
        alt="Caminhão"
        text="acima de R$ 200"
        emphasis="Frete grátis"
        direction="row-reverse"
      />
      <RangeText
        img={cartao}
        alt="Cartão de crédito"
        text="suas compras"
        emphasis="Parcele"
        direction="row-reverse"
      />
    </div>
  );
}
